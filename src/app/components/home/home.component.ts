import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../icon/icon.component';
import { ContactBandComponent } from '../contact-band/contact-band.component';
import { CONTACT, HERO_IMAGE } from '../../brand';
import { SERVICE_IDS } from '../../services.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe, IconComponent, ContactBandComponent],
  template: `
    <section class="hero">
      <div class="hero__panel on-dark">
        <div class="hero__content">
          <p class="eyebrow">{{ 'common.locationName' | translate }}</p>
          <h1 class="hero__title">
            <span class="hero__brand">IFixIt Cyprus</span>
            <span class="hero__display">{{ 'home.display' | translate }}</span>
          </h1>
          <p class="hero__lead">{{ 'home.subtitle' | translate }}</p>
          <div class="hero__actions">
            <a class="btn btn--gold" [href]="contact.phoneHref">
              <app-icon name="phone" />
              <span>{{ 'common.callUs' | translate }}<span class="hero__num">: {{ contact.phoneDisplay }}</span></span>
            </a>
            <a class="btn btn--ghost-light" routerLink="/services">{{ 'home.viewServices' | translate }}</a>
          </div>
          <p class="hero__hours">
            <app-icon name="clock" />
            <span class="sr-only">{{ 'common.hours' | translate }}: </span>
            @for (slot of contact.hours; track slot.from; let last = $last) {
              <span>{{ slot.from }}–{{ slot.to }}</span>@if (!last) {<span aria-hidden="true"> | </span>}
            }
          </p>
        </div>
      </div>
      <div class="hero__media" [class.hero__media--photo]="hero.isPhoto">
        <img [src]="hero.src" [alt]="hero.altKey ? (hero.altKey | translate) : ''" width="800" height="640">
      </div>
    </section>

    <section class="section" aria-labelledby="intro-title">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">IFixIt Cyprus</p>
          <h2 id="intro-title">{{ 'home.introTitle' | translate }}</h2>
          <p>{{ 'home.introText' | translate }}</p>
        </div>
        <ul class="grid grid--3 plain-list">
          @for (f of features; track f.key) {
            <li class="card">
              <span class="card__icon"><app-icon [name]="f.icon" /></span>
              <h3>{{ 'home.' + f.key | translate }}</h3>
              <p>{{ 'home.' + f.desc | translate }}</p>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="section section--soft" aria-labelledby="services-title">
      <div class="container">
        <div class="section__head section__head--row">
          <h2 id="services-title">{{ 'home.servicesTitle' | translate }}</h2>
          <a class="text-link" routerLink="/services">{{ 'home.allServices' | translate }} <app-icon name="arrow" /></a>
        </div>
        <ul class="grid grid--3 plain-list">
          @for (id of services; track id) {
            <li>
              <a class="service-tile" routerLink="/services" [fragment]="id">
                <span class="service-tile__icon"><app-icon [name]="id" /></span>
                <span>
                  <span class="service-tile__title">{{ 'services.' + id | translate }}</span>
                  <span class="service-tile__desc">{{ 'services.' + id + 'Desc' | translate }}</span>
                </span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>

    <app-contact-band titleKey="home.ctaTitle" textKey="home.ctaText" />
  `,
  styles: [`
    .hero { display: grid; background: var(--navy); }
    .hero__panel { display: flex; align-items: center; padding: 3.5rem 1.25rem; color: var(--muted-on-dark); }
    .hero__content { width: 100%; max-width: 600px; }
    .hero__title { margin: 0 0 1.25rem; color: #fff; }
    .hero__brand { display: block; font-size: clamp(1.75rem, 3.2vw, 2.6rem); font-weight: 700; letter-spacing: .01em; }
    .hero__display {
      display: block; margin-top: .35rem; font-size: clamp(2.3rem, 5.2vw, 4.4rem); line-height: 1.08;
      font-weight: 700; text-transform: uppercase; letter-spacing: .02em;
      color: var(--navy); -webkit-text-stroke: 3px var(--gold); paint-order: stroke fill;
    }
    @supports not (-webkit-text-stroke: 1px black) { .hero__display { color: var(--gold); } }
    .hero__lead { font-size: 1.0625rem; max-width: 34rem; margin-bottom: 2rem; }
    .hero__actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-bottom: 1.75rem; }
    .hero__hours { display: flex; align-items: center; flex-wrap: wrap; gap: .5rem; margin: 0; font-size: .875rem; app-icon { color: var(--gold); } }
    .hero__media { min-height: 260px; background: var(--gold-soft); overflow: hidden; }
    .hero__media img { display: block; width: 100%; height: 100%; object-fit: cover; }
    @media (min-width: 1024px) {
      .hero { grid-template-columns: 1fr 1fr; min-height: 560px; }
      .hero__panel { padding: 4.5rem 3rem 4.5rem max(2rem, calc((100vw - var(--container)) / 2 + 2rem)); }
    }
    @media (max-width: 479px) { .hero__num { display: none; } .hero__actions .btn { flex: 1 1 100%; } }
    .plain-list { list-style: none; }
    .service-tile {
      display: flex; gap: 1rem; height: 100%; padding: 1.4rem; background: #fff; text-decoration: none;
      border: 1px solid var(--line); border-radius: var(--radius); transition: border-color .2s, box-shadow .2s;
      &:hover { border-color: var(--gold); box-shadow: 0 6px 20px rgba(19,24,54,.08); }
    }
    .service-tile__icon { flex-shrink: 0; display: grid; place-items: center; width: 48px; height: 48px;
      border-radius: 50%; background: var(--gold-soft); color: var(--gold-ink); font-size: 1.4rem; }
    .service-tile__title { display: block; font-weight: 600; color: var(--ink); margin-bottom: .25rem; }
    .service-tile__desc { display: block; font-size: .9rem; color: var(--body); line-height: 1.55; }
  `]
})
export class HomeComponent {
  readonly contact = CONTACT;
  readonly hero = HERO_IMAGE;
  readonly services = SERVICE_IDS;
  readonly features = [
    { key: 'qualityWork', desc: 'qualityDesc', icon: 'quality' },
    { key: 'fastService', desc: 'fastDesc', icon: 'fast' },
    { key: 'trustedPros', desc: 'trustedDesc', icon: 'trusted' },
  ];
}
