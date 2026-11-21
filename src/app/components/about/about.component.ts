import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../icon/icon.component';
import { PageHeadComponent } from '../page-head/page-head.component';
import { ContactBandComponent } from '../contact-band/contact-band.component';
import { CONTACT } from '../../brand';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe, IconComponent, PageHeadComponent, ContactBandComponent],
  template: `
    <app-page-head titleKey="about.title" subtitleKey="about.subtitle" />

    <section class="section" aria-labelledby="story-title">
      <div class="container story">
        <div>
          <p class="eyebrow">IFixIt Cyprus</p>
          <h2 id="story-title">{{ 'about.ourStory' | translate }}</h2>
          <p>{{ 'about.description1' | translate }}</p>
          <p>{{ 'about.description2' | translate }}</p>
        </div>
        <aside class="facts on-dark" [attr.aria-label]="'common.contact' | translate">
          <ul class="facts__list">
            <li><app-icon name="pin" /> {{ 'common.locationName' | translate }}</li>
            <li><app-icon name="phone" />
              <a [href]="contact.phoneHref"><span class="sr-only">{{ 'common.phone' | translate }}: </span>{{ contact.phoneDisplay }}</a></li>
            <li><app-icon name="mail" />
              <a [href]="'mailto:' + contact.email"><span class="sr-only">{{ 'common.email' | translate }}: </span>{{ contact.email }}</a></li>
            <li><app-icon name="clock" />
              <span><span class="sr-only">{{ 'common.hours' | translate }}: </span>
                @for (slot of contact.hours; track slot.from) { <span class="facts__slot">{{ slot.from }}–{{ slot.to }}</span> }
              </span></li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="section section--soft" aria-labelledby="values-title">
      <div class="container">
        <div class="section__head">
          <h2 id="values-title">{{ 'about.valuesTitle' | translate }}</h2>
        </div>
        <ul class="grid grid--3 plain-list">
          @for (v of values; track v.key) {
            <li class="card">
              <span class="card__icon"><app-icon [name]="v.icon" /></span>
              <h3>{{ 'about.' + v.key | translate }}</h3>
              <p>{{ 'about.' + v.key + 'Desc' | translate }}</p>
            </li>
          }
        </ul>
      </div>
    </section>

    <div class="stats">
      <div class="container">
        <dl class="stats__grid">
          @for (s of stats; track s.key) {
            <div class="stats__item">
              <dt>{{ 'about.' + s.key | translate }}</dt>
              <dd>{{ s.value }}</dd>
            </div>
          }
        </dl>
      </div>
    </div>

    <app-contact-band titleKey="home.ctaTitle" textKey="home.ctaText" />
  `,
  styles: [`
    .story { display: grid; gap: 2.5rem; align-items: center; }
    @media (min-width: 900px) { .story { grid-template-columns: 1.1fr .9fr; gap: 4rem; } }
    .facts { background: var(--navy); color: #fff; padding: 2rem; border-radius: var(--radius); border-bottom: 4px solid var(--gold); }
    .facts__list { list-style: none; display: grid; gap: 1.1rem; }
    .facts__list li { display: flex; gap: .8rem; align-items: flex-start; overflow-wrap: anywhere; }
    .facts__list app-icon { color: var(--gold); font-size: 1.2rem; margin-top: .25rem; flex-shrink: 0; }
    .facts a { color: #fff; }
    .facts__slot { display: block; }
    .plain-list { list-style: none; }
    .stats { background: var(--surface); padding: 3.5rem 0; border-top: 1px solid var(--line); }
    .stats__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1.5rem; margin: 0; }
    .stats__item { display: flex; flex-direction: column-reverse; justify-content: flex-end; text-align: center; padding: 1rem;
      border-left: 3px solid var(--gold); }
    .stats__item dt { font-weight: 500; color: var(--body); }
    .stats__item dd { margin: 0; font-size: 2.5rem; font-weight: 700; color: var(--navy); line-height: 1.2; }
  `]
})
export class AboutComponent {
  readonly contact = CONTACT;
  readonly values = [
    { key: 'quality', icon: 'quality' },
    { key: 'reliability', icon: 'clock' },
    { key: 'satisfaction', icon: 'check' },
  ];
  /** Figures carried over from the previous site; to be confirmed by the business. */
  readonly stats = [
    { key: 'projects', value: '500+' },
    { key: 'experience', value: '4+' },
    { key: 'satisfaction', value: '98%' },
  ];
}
