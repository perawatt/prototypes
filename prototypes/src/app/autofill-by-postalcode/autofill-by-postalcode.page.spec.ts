import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutofillByPostalcodePage } from './autofill-by-postalcode.page';

describe('AutofillByPostalcodePage', () => {
  let component: AutofillByPostalcodePage;
  let fixture: ComponentFixture<AutofillByPostalcodePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutofillByPostalcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutofillByPostalcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
