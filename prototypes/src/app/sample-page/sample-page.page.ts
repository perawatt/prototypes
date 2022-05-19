import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.page.html',
  styleUrls: ['./sample-page.page.scss'],
})
export class SamplePagePage implements OnInit {

  public fg: FormGroup;
  public isFirstTime: boolean = true;

  constructor(private fb: FormBuilder) { 
    this.fg = this.fb.group({
      'phone': [null, [Validators.required]],
    });

    this.fg.valueChanges.subscribe(_ => {
    });
  }

  ngOnInit() {
  }

  onSave() {
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
