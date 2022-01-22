import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNotSelectedComponent } from './default-not-selected.component';

describe('DefaultNotSelectedComponent', () => {
  let component: DefaultNotSelectedComponent;
  let fixture: ComponentFixture<DefaultNotSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultNotSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNotSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
