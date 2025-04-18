import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitWindowComponent } from './exit-window.component';

describe('ExitWindowComponent', () => {
  let component: ExitWindowComponent;
  let fixture: ComponentFixture<ExitWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
