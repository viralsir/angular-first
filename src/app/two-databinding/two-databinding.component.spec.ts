import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDatabindingComponent } from './two-databinding.component';

describe('TwoDatabindingComponent', () => {
  let component: TwoDatabindingComponent;
  let fixture: ComponentFixture<TwoDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
