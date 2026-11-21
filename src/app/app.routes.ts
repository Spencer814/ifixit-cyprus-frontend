import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

/** `meta` is the translation-key prefix for the page title and description. */
export const routes: Routes = [
  { path: '', component: HomeComponent, data: { meta: 'home' } },
  { path: 'about', component: AboutComponent, data: { meta: 'about' } },
  { path: 'services', component: ServicesComponent, data: { meta: 'services' } },
  { path: 'contact', component: ContactComponent, data: { meta: 'contact' } },
  { path: '**', redirectTo: '' }
];
