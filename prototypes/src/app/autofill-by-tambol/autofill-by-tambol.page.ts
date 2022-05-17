import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from 'src/services/address.service';

@Component({
  selector: 'app-autofill-by-tambol',
  templateUrl: './autofill-by-tambol.page.html',
  styleUrls: ['./autofill-by-tambol.page.scss'],
})
export class AutofillByTambolPage implements OnInit {
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

  public getAddressByTambol() {
    if (this.fg.get("district").value) {
      const numberOfAddress: number = 5;
      var selected = this.addressList.filter((item) => { return (item.district.toString()).includes(this.fg.get("district").value)});
      selected = selected.slice(0,numberOfAddress);
      console.log(JSON.stringify(selected.slice(0,numberOfAddress)))
      this.filteredAddressList = selected;
    }
    else
    {
      this.filteredAddressList = [];
    }
  }

  ngOnInit() {
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
