import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../icon/icon.component';
import { PageHeadComponent } from '../page-head/page-head.component';
import { ContactBandComponent } from '../contact-band/contact-band.component';
import { SERVICE_IDS } from '../../services.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, TranslatePipe, IconComponent, PageHeadComponent, ContactBandComponent],
  template: `
    <app-page-head titleKey="services.title" subtitleKey="services.subtitle" />

    <section class="section" [attr.aria-label]="'services.title' | translate">
      <div class="container">
        <ul class="grid grid--3 plain-list">
          @for (id of services; track id) {
            <li class="service" [id]="id">
              <span class="card__icon"><app-icon [name]="id" /></span>
              <h2 class="service__title">{{ 'services.' + id | translate }}</h2>
              <p>{{ 'services.' + id + 'Desc' | translate }}</p>
              <ul class="service__features">
                @for (n of [1, 2, 3]; track n) {
                  <li><app-icon name="check" /> {{ 'services.' + id + 'Feature' + n | translate }}</li>
                }
              </ul>
              <a class="text-link service__link" routerLink="/contact">
                {{ 'services.getQuote' | translate }}<span class="sr-only">: {{ 'services.' + id | translate }}</span>
                <app-icon name="arrow" />
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <app-contact-band titleKey="services.readyToStart" textKey="services.ctaDescription" />
  `,
  styles: [`
    .plain-list { list-style: none; }
    .service {
      display: flex; flex-direction: column; padding: 1.75rem; background: #fff;
      border: 1px solid var(--line); border-top: 3px solid var(--gold); border-radius: var(--radius);
      scroll-margin-top: 1.5rem;
    }
    .service__title { font-size: 1.2rem; }
    .service__features { list-style: none; display: grid; gap: .4rem; margin: 0 0 1.5rem; }
    .service__features li { display: flex; align-items: center; gap: .55rem; color: var(--ink); font-size: .95rem; }
    .service__features app-icon { color: var(--gold-ink); }
    .service__link { margin-top: auto; }
  `]
})
export class ServicesComponent {
  readonly services = SERVICE_IDS;
}
