import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-front',
  standalone: true,
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  imports: [RouterOutlet, FrontHeaderComponent, FrontFooterComponent],
})
export class FrontComponent implements OnInit, OnDestroy {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  private cssFiles: string[] = [
    'assets/front/css/bootstrap.min.css',
    'assets/front/css/jquery-ui.min.css',
    'assets/front/css/ace-responsive-menu.css',
    'assets/front/css/fontawesome.css',
    'assets/front/css/flaticon.css',
    'assets/front/css/bootstrap-select.min.css',
    'assets/front/css/animate.css',
    'assets/front/css/magnific-popup.css',
    'assets/front/css/slider.css',
    'assets/front/css/style.css',
    'assets/front/css/ud-custom-spacing.css',
    'assets/front/css/responsive.css',
  ];
  private jsFiles: string[] = [
    'assets/front/js/jquery-3.6.4.min.js',
    'assets/front/js/jquery-migrate-3.0.0.min.js',
    'assets/front/js/popper.min.js',
    'assets/front/js/bootstrap.min.js',
    'assets/front/js/bootstrap-select.min.js',
    'assets/front/js/ace-responsive-menu.js',
    'assets/front/js/jquery-scrolltofixed-min.js',
    'assets/front/js/wow.min.js',
    'assets/front/js/custom.js',
    'assets/front/js/gsap.min.js',
    'assets/front/js/ScrollTrigger.min.js',
  ];

  ngOnInit(): void {
    if (
      this.document.head.querySelector('link.user-layout-css') ||
      this.document.body.querySelector('script.user-layout-js')
    ) {
      return;
    }
    this.loadCSS();
    this.loadJS();
  }

  ngOnDestroy(): void {
    this.removeCSS();
    this.removeJS();
  }

  private loadCSS(): void {
    this.cssFiles.forEach((href) => {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'href', href);
      this.renderer.setAttribute(link, 'class', 'user-layout-css');
      this.renderer.appendChild(this.document.head, link);
    });
  }

  private loadJS(): void {
    this.jsFiles.forEach((src) => {
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'src', src);
      this.renderer.setAttribute(script, 'type', 'text/javascript');
      this.renderer.setAttribute(script, 'defer', 'true');
      this.renderer.setAttribute(script, 'class', 'user-layout-js');
      this.renderer.appendChild(this.document.body, script);
    });
  }

  private removeCSS(): void {
    const links = this.document.querySelectorAll('link.user-layout-css');
    links.forEach((link) =>
      this.renderer.removeChild(this.document.head, link)
    );
  }

  private removeJS(): void {
    const scripts = this.document.querySelectorAll('script.user-layout-js');
    scripts.forEach((script) =>
      this.renderer.removeChild(this.document.body, script)
    );
  }
}
