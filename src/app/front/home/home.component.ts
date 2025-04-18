import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  items = [
    'Fractional Ownership',
    'Low Investment',
    'Trusted Partnerships',
    'Steady Earnings',
    'Seamless Experience',
  ];
  carouselOptions: any = {
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="far fa-arrow-left-long text-white"></i>',
      '<i class="far fa-arrow-right-long text-white"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  testimonials = [
    {
      name: 'Mathew Turner',
      text: `“The platform is too easy to use. I can invest in any property
                  so easily. I now own fractions of properties in Dubai,
                  receiving regular rental income in my wallet. Really no
                  hassle, no management; just earnings!”`,
    },
    {
      name: 'Jeffrey Ellis',
      text: `“Properties listed on the platform have really great
                  appreciation. Just a few months back, I bought a property; and
                  it’s not even a year; the rates are booming!”`,
    },
    {
      name: 'Flynn Dafoe',
      text: `“JustStake’s biannual exit window is revolutionary! I can sell
                  my shares at any time and access cash whenever needed. It’s
                  quite reassuring to have this flexibility. Property
                  investments are much more dynamic and convenient.”`,
    },
    {
      name: 'Luna Williams',
      text: `“Investing in JustStake’s properties has been the best
                  decision I made! I bought real estate shares in a few clicks,
                  and rental income started flowing soon after. The
                  accessibility and the steady returns just excite me to keep on
                  investing more.”`,
    },
    {
      name: 'Robert Tony',
      text: ` “Before signing up for JustStake, I had no idea it would be so
                  easy to own a stake! It's as simple as shopping. Well, thanks
                  for making investments accessible and effortless.”`,
    },
    {
      name: 'Viktor Legetsky',
      text: `“Impressive liquidity access! Last month, I sold some of the
                  shares I owned on the secondary market and was pleasantly
                  surprised by how quickly I was able to access my money. The
                  process was fast and seamless!”`,
    },
  ];

  testimonialsOptions: any = {
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="far fa-arrow-left-long"></i>',
      '<i class="far fa-arrow-right-long"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private scrollTriggers: any[] = [];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const width = window?.innerWidth;

    if (width <= 991) return;

    setTimeout(() => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());

      const cards = gsap.utils.toArray('.cards .card-item');
      if (!cards.length) return;

      const stickDistance = 0;

      const firstCardST = ScrollTrigger.create({
        trigger: cards[0],
        start: 'center center',
      });

      const lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: 'bottom bottom',
      });

      cards.forEach((card: any, index: number) => {
        const scale = 1 - (cards.length - index) * 0.025;

        const scaleDown = gsap.to(card, {
          scale,
          transformOrigin: `50% ${lastCardST.start + stickDistance}`,
        });

        const trigger = ScrollTrigger.create({
          trigger: card,
          start: 'center center',
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          animation: scaleDown,
          toggleActions: 'restart none none reverse',
        });

        this.scrollTriggers.push(trigger);
      });

      ScrollTrigger.refresh();
    }, 0);
  }

  ngOnDestroy(): void {
    this.scrollTriggers.forEach((trigger) => trigger.kill());
    this.scrollTriggers = [];
  }
}
