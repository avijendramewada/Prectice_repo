import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmmisionDetailComponent } from './form-submmision-detail.component';

describe('FormSubmmisionDetailComponent', () => {
  let component: FormSubmmisionDetailComponent;
  let fixture: ComponentFixture<FormSubmmisionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubmmisionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmmisionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
