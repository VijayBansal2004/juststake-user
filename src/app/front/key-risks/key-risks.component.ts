import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-key-risks',
  imports: [],
  templateUrl: './key-risks.component.html',
  styleUrl: './key-risks.component.css',
})
export class KeyRisksComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'terms-container');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'terms-container');
  }
  email = 'info@juststake.com';
}
