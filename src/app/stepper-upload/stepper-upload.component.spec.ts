import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperUploadComponent } from './stepper-upload.component';

describe('StepperUploadComponent', () => {
  let component: StepperUploadComponent;
  let fixture: ComponentFixture<StepperUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
