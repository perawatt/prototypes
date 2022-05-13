import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/services/address.service';

@Component({
  selector: 'app-autofill-by-postalcode',
  templateUrl: './autofill-by-postalcode.page.html',
  styleUrls: ['./autofill-by-postalcode.page.scss'],
})
export class AutofillByPostalcodePage implements OnInit {
  public fg: FormGroup;
  public isFirstTime: boolean = true;
  public addressList: any[] = [];
  public filteredAddressList: any[] = [];

  constructor(private fb: FormBuilder, private addrSvc: AddressService) {
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

    this.addressList = addrSvc.getAddressList();
  }

  ngOnInit() {
  }

  public getAddressByPostalcode() {
    if (this.fg.get("postalCode").value) {
      const numberOfAddress: number = 10;
      var selected = this.addressList.filter((item) => { return (item.zipcode.toString()).includes(this.fg.get("postalCode").value)});
      console.log(JSON.stringify(selected.slice(0,numberOfAddress)))
      this.filteredAddressList = selected;
    }
    else
    {
      this.filteredAddressList = [];
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
