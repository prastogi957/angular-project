import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinsonComponent } from './parkinson.component';

describe('ParkinsonComponent', () => {
  let component: ParkinsonComponent;
  let fixture: ComponentFixture<ParkinsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkinsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkinsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
