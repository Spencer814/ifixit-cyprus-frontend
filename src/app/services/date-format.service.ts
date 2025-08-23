import { Injectable } from '@angular/core';
import { TranslationService, SupportedLanguage } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor(private translationService: TranslationService) {}

  /**
   * Format date according to local conventions for each supported language
   * - Greek (Cyprus): DD/MM/YYYY (European format)
   * - English (UK): DD/MM/YYYY (British format)
   * - Russian: DD.MM.YYYY (Russian format)
   * - Hebrew: DD/MM/YYYY (Israeli format)
   */
  formatDate(date: Date): string {
    const language = this.translationService.getCurrentLanguage();
    
    switch (language) {
      case 'el': // Greek (Cyprus)
      case 'en': // British English
      case 'he': // Hebrew (Israel)
        return this.formatEuropeanStyle(date);
      
      case 'ru': // Russian
        return this.formatRussianStyle(date);
        
      default:
        return this.formatEuropeanStyle(date);
    }
  }

  /**
   * Format time according to local conventions
   * - Greek/English/Hebrew: 24-hour format
   * - Russian: 24-hour format
   */
  formatTime(date: Date): string {
    const language = this.translationService.getCurrentLanguage();
    
    return date.toLocaleTimeString(this.getLocaleCode(language), {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // 24-hour format for all supported regions
    });
  }

  /**
   * Format date and time together
   */
  formatDateTime(date: Date): string {
    return `${this.formatDate(date)} ${this.formatTime(date)}`;
  }

  /**
   * Format date for form inputs (ISO format: YYYY-MM-DD)
   */
  formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Parse date string in local format to Date object
   */
  parseLocalDate(dateString: string): Date | null {
    const language = this.translationService.getCurrentLanguage();
    
    try {
      let parts: string[];
      
      switch (language) {
        case 'ru':
          parts = dateString.split('.');
          break;
        default:
          parts = dateString.split('/');
          break;
      }
      
      if (parts.length !== 3) return null;
      
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
      const year = parseInt(parts[2], 10);
      
      const date = new Date(year, month, day);
      
      // Validate the date
      if (date.getDate() !== day || date.getMonth() !== month || date.getFullYear() !== year) {
        return null;
      }
      
      return date;
    } catch {
      return null;
    }
  }

  /**
   * Get month names in current language
   */
  getMonthNames(): string[] {
    const language = this.translationService.getCurrentLanguage();
    
    const monthNames: Record<SupportedLanguage, string[]> = {
      el: [
        'Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος',
        'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'
      ],
      en: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      ru: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      he: [
        'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
        'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
      ]
    };
    
    return monthNames[language] || monthNames.en;
  }

  /**
   * Get day names in current language
   */
  getDayNames(): string[] {
    const language = this.translationService.getCurrentLanguage();
    
    const dayNames: Record<SupportedLanguage, string[]> = {
      el: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
      en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      he: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
    };
    
    return dayNames[language] || dayNames.en;
  }

  private formatEuropeanStyle(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private formatRussianStyle(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  private getLocaleCode(language: SupportedLanguage): string {
    const localeCodes: Record<SupportedLanguage, string> = {
      el: 'el-CY', // Greek (Cyprus)
      en: 'en-GB', // British English
      ru: 'ru-RU', // Russian
      he: 'he-IL'  // Hebrew (Israel)
    };
    
    return localeCodes[language] || 'en-GB';
  }
}