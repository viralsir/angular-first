import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfComponentComponent } from './tdf-component.component';

describe('TdfComponentComponent', () => {
  let component: TdfComponentComponent;
  let fixture: ComponentFixture<TdfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
