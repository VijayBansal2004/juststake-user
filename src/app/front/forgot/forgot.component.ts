import { Component, OnInit, Renderer2, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  imports: [RouterModule],
  styleUrl: './forgot.component.css',
})
export class ForgotComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'auth-container');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'auth-container');
  }
}
