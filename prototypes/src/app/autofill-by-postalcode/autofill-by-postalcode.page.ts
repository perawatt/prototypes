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

  public getAddressByPostalcode(event:any) {   
    if (this.fg.get("postalCode").value && event.target.value.toString().length == 5) {
      var selected = this.addressList.filter((item) => { return (item.zipcode.toString()).includes(this.fg.get("postalCode").value)});
      this.filteredAddressList = selected;
    }
    else
    {
      this.clearList()    
    }
  }

  public clearList(){
    this.filteredAddressList = [];
  }

  public onSelectAddress(address:any){
    this.fg.get('district').setValue(address.district);
    this.fg.get('city').setValue(address.amphoe);
    this.fg.get('province').setValue(address.province);
    if(this.fg.get('postalCode').value != address.zipcode){
      this.fg.get('postalCode').setValue(address.zipcode);
    }
    this.clearList()    
  }

  onSave() {
    console.log(this.fg.valid)
    if (this.isFirstTime) {
      this.isFirstTime = false;
    }
    if (this.fg.valid) {
    }
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
