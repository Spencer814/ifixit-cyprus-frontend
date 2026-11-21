import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../icon/icon.component';
import { PageHeadComponent } from '../page-head/page-head.component';
import { TranslationService } from '../../services/translation.service';
import { CONTACT } from '../../brand';

/**
 * Contact details only. There is deliberately no form: the old one showed a
 * success message without sending anything. Phone and email reach the business.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe, IconComponent, PageHeadComponent],
  template: `
    <app-page-head titleKey="contact.title" subtitleKey="contact.subtitle" />

    <section class="section">
      <div class="container">
        <div class="section__head">
          <p class="lead">{{ 'contact.description' | translate }}</p>
        </div>

        <div class="ways">
          <article class="way way--primary on-dark">
            <span class="card__icon way__icon"><app-icon name="phone" /></span>
            <h2 class="way__title">{{ 'common.phone' | translate }}</h2>
            <p>{{ 'contact.callText' | translate }}</p>
            <a class="btn btn--gold way__action" [href]="contact.phoneHref">
              <span class="sr-only">{{ 'common.callUs' | translate }}: </span>{{ contact.phoneDisplay }}
            </a>
          </article>

          <article class="way">
            <span class="card__icon way__icon"><app-icon name="mail" /></span>
            <h2 class="way__title">{{ 'common.email' | translate }}</h2>
            <p>{{ 'contact.emailText' | translate }}</p>
            <a class="btn btn--ghost way__action way__email" [href]="mailtoHref()">{{ contact.email }}</a>
          </article>

          <article class="way">
            <span class="card__icon way__icon"><app-icon name="clock" /></span>
            <h2 class="way__title">{{ 'contact.hours' | translate }}</h2>
            <dl class="hours">
              @for (slot of contact.hours; track slot.from) {
                <div><dt>{{ slot.labelKey | translate }}</dt><dd>{{ slot.from }}–{{ slot.to }}</dd></div>
              }
            </dl>
          </article>

          <article class="way">
            <span class="card__icon way__icon"><app-icon name="pin" /></span>
            <h2 class="way__title">{{ 'contact.location' | translate }}</h2>
            <p class="way__strong">{{ 'contact.locationName' | translate }}</p>
            <p>{{ 'contact.locationText' | translate }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .lead { font-size: 1.125rem; color: var(--ink); margin: 0; }
    .ways { display: grid; gap: 1.5rem; }
    @media (min-width: 700px) { .ways { grid-template-columns: repeat(2, 1fr); } }
    @media (min-width: 1100px) { .ways { grid-template-columns: 1.3fr 1.3fr 1fr 1fr; } }
    .way { display: flex; flex-direction: column; padding: 1.75rem; border: 1px solid var(--line);
      border-top: 3px solid var(--gold); border-radius: var(--radius); background: #fff; }
    .way__title { font-size: 1.15rem; }
    .way--primary { background: var(--navy); border-color: var(--navy); border-top-color: var(--gold); color: var(--muted-on-dark); }
    .way--primary .way__title { color: #fff; }
    .way--primary .way__icon { background: var(--gold); color: var(--navy); }
    .way__action { margin-top: auto; align-self: flex-start; }
    .way__email { font-size: .875rem; padding-inline: 1rem; word-break: break-all; }
    .way__strong { font-weight: 600; color: var(--ink); margin-bottom: .25rem; }
    .hours { margin: 0; display: grid; gap: .5rem; }
    .hours div { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0 1rem; border-bottom: 1px dashed var(--line); padding-bottom: .4rem; }
    .hours dt { color: var(--body); }
    .hours dd { margin: 0; white-space: nowrap; font-weight: 600; color: var(--ink); font-variant-numeric: tabular-nums; }
  `]
})
export class ContactComponent {
  readonly contact = CONTACT;

  constructor(private translationService: TranslationService) {}

  mailtoHref(): string {
    const subject = this.translationService.getTranslation('contact.emailSubject');
    return `mailto:${this.contact.email}?subject=${encodeURIComponent(subject)}`;
  }
}
