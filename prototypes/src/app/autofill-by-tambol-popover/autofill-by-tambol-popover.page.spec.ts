import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutofillByTambolPopoverPage } from './autofill-by-tambol-popover.page';

describe('AutofillByTambolPopoverPage', () => {
  let component: AutofillByTambolPopoverPage;
  let fixture: ComponentFixture<AutofillByTambolPopoverPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutofillByTambolPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutofillByTambolPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
