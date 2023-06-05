import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseResultsComponent } from './phase-results.component';

describe('PhaseResultsComponent', () => {
  let component: PhaseResultsComponent;
  let fixture: ComponentFixture<PhaseResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
