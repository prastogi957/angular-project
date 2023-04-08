import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerbuttonComponent } from './callerbutton.component';

describe('CallerbuttonComponent', () => {
  let component: CallerbuttonComponent;
  let fixture: ComponentFixture<CallerbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallerbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallerbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
