import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

/** Navy title band used at the top of the inner pages. */
@Component({
  selector: 'app-page-head',
  standalone: true,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <section class="page-head on-dark">
      <span class="page-head__echo" aria-hidden="true">IFixIt</span>
      <div class="container">
        <p class="eyebrow">IFixIt Cyprus</p>
        <h1>{{ titleKey | translate }}</h1>
        <p>{{ subtitleKey | translate }}</p>
      </div>
    </section>
  `,
})
export class PageHeadComponent {
  @Input({ required: true }) titleKey = '';
  @Input({ required: true }) subtitleKey = '';
}
