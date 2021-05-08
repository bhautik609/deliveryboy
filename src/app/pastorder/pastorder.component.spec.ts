import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorderComponent } from './pastorder.component';

describe('PastorderComponent', () => {
  let component: PastorderComponent;
  let fixture: ComponentFixture<PastorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
