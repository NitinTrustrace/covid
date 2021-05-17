import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParDateComponent } from './par-date.component';

describe('ParDateComponent', () => {
  let component: ParDateComponent;
  let fixture: ComponentFixture<ParDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
