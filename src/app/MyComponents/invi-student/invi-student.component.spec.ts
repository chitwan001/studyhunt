import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviStudentComponent } from './invi-student.component';

describe('InviStudentComponent', () => {
  let component: InviStudentComponent;
  let fixture: ComponentFixture<InviStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
