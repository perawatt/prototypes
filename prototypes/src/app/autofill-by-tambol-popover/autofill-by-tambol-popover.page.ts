import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-autofill-by-tambol-popover',
  templateUrl: './autofill-by-tambol-popover.page.html',
  styleUrls: ['./autofill-by-tambol-popover.page.scss'],
})
export class AutofillByTambolPopoverPage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;
  
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      'streetAddress': [null, [Validators.required]],
      'district': ["ศิลา", [Validators.required]],
      'city': [null, [Validators.required]],
      'province': [null, [Validators.required]],
      'postalCode': [null, [Validators.required]],
      'remark': '',
    });

    this.fg.valueChanges.subscribe(_ => {
    });
  }

  ngOnInit() {
  }

  isInvalid(name: string): boolean {
    var ctrl = this.fg.get(name);
    return ctrl.invalid && !this.isFirstTime;
  }
}
