import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AClassComponent } from './aclass.component';

describe('AClassComponent', () => {
  let component: AClassComponent;
  let fixture: ComponentFixture<AClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
