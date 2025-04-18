import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellWithJuststakeComponent } from './sell-with-juststake.component';

describe('SellWithJuststakeComponent', () => {
  let component: SellWithJuststakeComponent;
  let fixture: ComponentFixture<SellWithJuststakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellWithJuststakeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SellWithJuststakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
