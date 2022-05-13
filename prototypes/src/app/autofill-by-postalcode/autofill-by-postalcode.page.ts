import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-autofill-by-postalcode',
  templateUrl: './autofill-by-postalcode.page.html',
  styleUrls: ['./autofill-by-postalcode.page.scss'],
})
export class AutofillByPostalcodePage implements OnInit {
  public fg: FormGroup;
  public isFirstTime: boolean = true;
  public addressList: object[] = [];

  constructor(private fb: FormBuilder, private addrSvc: AddressService) {
    this.fg = this.fb.group({
      'streetAddress': [null, [Validators.required]],
      'district': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'province': [null, [Validators.required]],
      'postalCode': ["40000", [Validators.required]],
      'remark': '',
    });

    this.fg.valueChanges.subscribe(_ => {
    });

    this.addressList = addrSvc.getAddressList();
    console.log(JSON.stringify(this.addressList))
  }

  ngOnInit() {
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }

}
