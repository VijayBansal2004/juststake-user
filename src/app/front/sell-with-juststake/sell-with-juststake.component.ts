import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sell-with-juststake',
  templateUrl: './sell-with-juststake.component.html',
  styleUrls: ['./sell-with-juststake.component.css'],
  imports: [RouterModule],
})
export class SellWithJuststakeComponent implements AfterViewInit {
  currentStep = 0;

  steps: HTMLElement[] = [];
  indicators: HTMLElement[] = [];

  ngAfterViewInit(): void {
    // Wait for DOM to be fully available
    setTimeout(() => {
      this.steps = Array.from(document.querySelectorAll<HTMLElement>('.step'));
      this.indicators = Array.from(
        document.querySelectorAll<HTMLElement>('.step-indicator')
      );

      this.showStep(this.currentStep);

      const form = document.getElementById('wizardForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Form submitted!');
        });
      }
    }, 0);
  }

  showStep(stepIndex: number): void {
    this.steps.forEach((step, index) => {
      step.style.display = index === stepIndex ? 'block' : 'none';
    });

    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === stepIndex);
    });

    const prevBtn = document.getElementById('prevBtn') as HTMLElement;
    const nextBtn = document.getElementById('nextBtn') as HTMLElement;
    const submitBtn = document.getElementById('submitBtn') as HTMLElement;

    if (prevBtn && nextBtn && submitBtn) {
      prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
      nextBtn.style.display =
        stepIndex === this.steps.length - 1 ? 'none' : 'inline-block';
      submitBtn.style.display =
        stepIndex === this.steps.length - 1 ? 'inline-block' : 'none';
    }
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.showStep(this.currentStep);
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showStep(this.currentStep);
    }
  }
}
