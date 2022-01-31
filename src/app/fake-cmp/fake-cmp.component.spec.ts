import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeCmpComponent } from './fake-cmp.component';

describe('FakeCmpComponent', () => {
  let component: FakeCmpComponent;
  let fixture: ComponentFixture<FakeCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
