import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { CarouselModule } from 'ngx-owl-carousel-o'; // Import the CarouselModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule, CommonModule, CarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
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
      text: `“Before signing up for JustStake, I had no idea it would be so
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
}
