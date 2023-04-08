import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnedisComponent } from './onedis.component';

describe('OnedisComponent', () => {
  let component: OnedisComponent;
  let fixture: ComponentFixture<OnedisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnedisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
