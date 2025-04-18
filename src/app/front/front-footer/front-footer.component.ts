import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front-footer',
  imports: [RouterModule],
  templateUrl: './front-footer.component.html',
  styleUrl: './front-footer.component.css',
})
export class FrontFooterComponent {
  email = 'info@juststake.com';
}
