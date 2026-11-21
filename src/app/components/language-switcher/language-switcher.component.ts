import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslationService, SupportedLanguage } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

/** Two-button language toggle. Each label is in its own language. */
@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [AsyncPipe, TranslatePipe],
  template: `
    <div class="lang-switch" role="group" [attr.aria-label]="'common.language' | translate">
      @for (lang of languages; track lang.code) {
        <button type="button"
                class="lang-switch__btn"
                [attr.data-lang]="lang.code"
                [attr.lang]="lang.code"
                [attr.aria-pressed]="(current$ | async) === lang.code"
                (click)="select(lang.code)">{{ lang.short }}<span class="sr-only"> {{ lang.label }}</span></button>
      }
    </div>
  `,
})
export class LanguageSwitcherComponent {
  readonly languages: { code: SupportedLanguage; short: string; label: string }[] = [
    { code: 'el', short: 'ΕΛ', label: 'Ελληνικά' },
    { code: 'en', short: 'EN', label: 'English' },
  ];
  readonly current$ = this.translationService.currentLanguage$;

  constructor(private translationService: TranslationService) {}

  select(code: SupportedLanguage): void {
    this.translationService.setLanguage(code);
  }
}
