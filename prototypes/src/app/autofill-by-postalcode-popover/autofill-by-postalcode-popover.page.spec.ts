import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutofillByPostalcodePopoverPage } from './autofill-by-postalcode-popover.page';

describe('AutofillByPostalcodePopoverPage', () => {
  let component: AutofillByPostalcodePopoverPage;
  let fixture: ComponentFixture<AutofillByPostalcodePopoverPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutofillByPostalcodePopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutofillByPostalcodePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
