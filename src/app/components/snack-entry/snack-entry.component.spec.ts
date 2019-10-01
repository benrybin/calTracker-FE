import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackEntryComponent } from './snack-entry.component';

describe('SnackEntryComponent', () => {
  let component: SnackEntryComponent;
  let fixture: ComponentFixture<SnackEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
