import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: true
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;
  private lastLanguage?: string;
  private lastKey?: string;
  private lastResult?: string;

  constructor(private translationService: TranslationService) {}

  transform(key: string): string {
    const currentLanguage = this.translationService.getCurrentLanguage();
    
    // Performance optimization: only translate if key or language changed
    if (key === this.lastKey && currentLanguage === this.lastLanguage && this.lastResult) {
      return this.lastResult;
    }

    this.lastKey = key;
    this.lastLanguage = currentLanguage;
    this.lastResult = this.translationService.getTranslation(key);
    
    return this.lastResult;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}