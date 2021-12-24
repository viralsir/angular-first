import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringIntropolationComponent } from './string-intropolation.component';

describe('StringIntropolationComponent', () => {
  let component: StringIntropolationComponent;
  let fixture: ComponentFixture<StringIntropolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringIntropolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringIntropolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
