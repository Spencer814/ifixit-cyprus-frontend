import { Component, Input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { IconComponent } from '../icon/icon.component';
import { CONTACT } from '../../brand';

/** Navy call-to-action strip: phone and email, no form. */
@Component({
  selector: 'app-contact-band',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  template: `
    <section class="cta-band" [attr.aria-labelledby]="headingId">
      <div class="container cta-band__inner">
        <div>
          <h2 [id]="headingId">{{ titleKey | translate }}</h2>
          <p>{{ textKey | translate }}</p>
        </div>
        <div class="cta-band__actions">
          <a class="btn btn--navy" [href]="contact.phoneHref">
            <app-icon name="phone" /><span class="sr-only">{{ 'common.callUs' | translate }}: </span>{{ contact.phoneDisplay }}
          </a>
          <a class="btn btn--ghost" [href]="'mailto:' + contact.email">
            <app-icon name="mail" /> {{ 'common.emailUs' | translate }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactBandComponent {
  private static count = 0;
  readonly headingId = `cta-band-${++ContactBandComponent.count}`;
  readonly contact = CONTACT;
  @Input({ required: true }) titleKey = '';
  @Input({ required: true }) textKey = '';
}
