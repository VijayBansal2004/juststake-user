import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRisksComponent } from './key-risks.component';

describe('KeyRisksComponent', () => {
  let component: KeyRisksComponent;
  let fixture: ComponentFixture<KeyRisksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyRisksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
