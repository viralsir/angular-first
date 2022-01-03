import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEntryComponent } from './emp-entry.component';

describe('EmpEntryComponent', () => {
  let component: EmpEntryComponent;
  let fixture: ComponentFixture<EmpEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
