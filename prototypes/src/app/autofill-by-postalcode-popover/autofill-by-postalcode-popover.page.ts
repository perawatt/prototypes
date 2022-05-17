import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { AddressService } from 'src/services/address.service';

@Component({
  selector: 'app-autofill-by-postalcode-popover',
  templateUrl: './autofill-by-postalcode-popover.page.html',
  styleUrls: ['./autofill-by-postalcode-popover.page.scss'],
})
export class AutofillByPostalcodePopoverPage implements OnInit {
  public fg: FormGroup;
  public isFirstTime: boolean = true;
  public addressList: any[] = [];
  public filteredAddressList: any[] = [];
  public isPopoverOpen: boolean;

  constructor(private fb: FormBuilder, private addrSvc: AddressService, platform: Platform) {
    this.fg = this.fb.group({
      'streetAddress': [null, [Validators.required]],
      'district': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'province': [null, [Validators.required]],
      'postalCode': [null, [Validators.required]],
      'remark': '',
    });

    this.fg.valueChanges.subscribe(_ => {
    });
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });

    this.addressList = addrSvc.getAddressList();
  }

  ngOnInit() {
  }

  ondidDismiss() {
    this.clearList()
  }

  public getAddressByPostalcode(event: any) {
    if (this.fg.get("postalCode").value && event.target.value.toString().length == 5) {
      var selected = this.addressList.filter((item) => { return (item.zipcode.toString()).includes(this.fg.get("postalCode").value) });
      this.filteredAddressList = selected;
      if (this.filteredAddressList.length > 0) {
        this.isPopoverOpen = true
      }
    }
    else {
      this.clearList()
    }
  }

  public clearList() {
    this.isPopoverOpen = false;
    this.filteredAddressList = [];
  }

  public onSelectAddress(address: any) {
    this.fg.get('district').setValue(address.district);
    this.fg.get('city').setValue(address.amphoe);
    this.fg.get('province').setValue(address.province);
    if (this.fg.get('postalCode').value != address.zipcode) {
      this.fg.get('postalCode').setValue(address.zipcode);
    }
    this.clearList()
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
