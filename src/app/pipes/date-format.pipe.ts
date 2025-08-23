import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { DateFormatService } from '../services/date-format.service';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'localDate',
  pure: false,
  standalone: true
})
export class DateFormatPipe implements PipeTransform, OnDestroy {
  private subscription?: Subscription;
  private lastLanguage?: string;
  private lastDate?: Date;
  private lastResult?: string;

  constructor(
    private dateFormatService: DateFormatService,
    private translationService: TranslationService
  ) {}

  transform(value: Date | string | number, format: 'date' | 'time' | 'datetime' = 'date'): string {
    if (!value) return '';

    let date: Date;
    if (value instanceof Date) {
      date = value;
    } else if (typeof value === 'string') {
      date = new Date(value);
    } else if (typeof value === 'number') {
      date = new Date(value);
    } else {
      return '';
    }

    if (isNaN(date.getTime())) {
      return '';
    }

    const currentLanguage = this.translationService.getCurrentLanguage();
    
    // Performance optimization: only format if date or language changed
    if (date === this.lastDate && currentLanguage === this.lastLanguage && this.lastResult) {
      return this.lastResult;
    }

    this.lastDate = date;
    this.lastLanguage = currentLanguage;

    switch (format) {
      case 'time':
        this.lastResult = this.dateFormatService.formatTime(date);
        break;
      case 'datetime':
        this.lastResult = this.dateFormatService.formatDateTime(date);
        break;
      case 'date':
      default:
        this.lastResult = this.dateFormatService.formatDate(date);
        break;
    }

    return this.lastResult;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}