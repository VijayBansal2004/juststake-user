import { Component, OnInit, OnDestroy, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cookie-notice',
  imports: [],
  templateUrl: './cookie-notice.component.html',
  styleUrl: './cookie-notice.component.css',
})
export class CookieNoticeComponent implements OnInit, OnDestroy {
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
