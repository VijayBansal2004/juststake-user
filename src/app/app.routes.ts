import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './front/home/home.component';
import { AboutComponent } from './front/about/about.component';
import { ContactComponent } from './front/contact/contact.component';
import { FaqComponent } from './front/faq/faq.component';
import { ExitWindowComponent } from './front/exit-window/exit-window.component';
import { SellWithJuststakeComponent } from './front/sell-with-juststake/sell-with-juststake.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent as DashboardHome } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { TermsComponent } from './front/terms/terms.component';
import { KeyRisksComponent } from './front/key-risks/key-risks.component';
import { PrivacyPolicyComponent } from './front/privacy-policy/privacy-policy.component';
import { CookieNoticeComponent } from './front/cookie-notice/cookie-notice.component';
import { ForgotComponent } from './front/forgot/forgot.component';

export const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sell-with-juststake', component: SellWithJuststakeComponent },
      { path: 'exit-window', component: ExitWindowComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'key-risks', component: KeyRisksComponent },
      { path: 'privacy-policy', component: PrivacyPolicyComponent },
      { path: 'cookie-notice', component: CookieNoticeComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHome },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
