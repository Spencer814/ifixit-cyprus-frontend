import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, SupportedLanguage } from '../../services/translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher" [class.rtl]="isRTL">
      <button 
        class="language-toggle"
        (click)="toggleDropdown()"
        [attr.aria-expanded]="isDropdownOpen"
        aria-label="Select language"
      >
        <span class="current-flag">{{ getCurrentLanguageInfo().flag }}</span>
        <span class="current-code">{{ currentLanguage.toUpperCase() }}</span>
        <span class="dropdown-arrow" [class.open]="isDropdownOpen">▼</span>
      </button>

      <div class="language-dropdown" [class.open]="isDropdownOpen">
        <button
          *ngFor="let lang of availableLanguages"
          class="language-option"
          [class.active]="lang === currentLanguage"
          (click)="selectLanguage(lang)"
          [attr.aria-label]="'Switch to ' + getLanguageInfo()[lang].name"
        >
          <span class="flag">{{ getLanguageInfo()[lang].flag }}</span>
          <span class="name">{{ getLanguageInfo()[lang].nativeName }}</span>
          <span class="code">{{ lang.toUpperCase() }}</span>
        </button>
      </div>
    </div>

    <!-- Overlay to close dropdown when clicking outside -->
    <div 
      *ngIf="isDropdownOpen" 
      class="dropdown-overlay" 
      (click)="closeDropdown()"
    ></div>
  `,
  styles: [`
    .language-switcher {
      position: relative;
      display: inline-block;
      z-index: 1000;
    }

    .language-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: white;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
      color: #333;
      transition: all 0.2s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .language-toggle:hover {
      border-color: #2563eb;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .current-flag {
      font-size: 1.2rem;
    }

    .current-code {
      font-weight: 600;
      color: #2563eb;
    }

    .dropdown-arrow {
      transition: transform 0.2s ease;
      color: #666;
      font-size: 0.8rem;
    }

    .dropdown-arrow.open {
      transform: rotate(180deg);
    }

    .language-dropdown {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      right: 0;
      background: white;
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: all 0.2s ease;
      min-width: 200px;
    }

    .language-dropdown.open {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }

    .language-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.75rem 1rem;
      background: transparent;
      border: none;
      text-align: left;
      cursor: pointer;
      transition: background-color 0.2s ease;
      font-size: 0.9rem;
    }

    .language-option:hover {
      background-color: #f3f4f6;
    }

    .language-option.active {
      background-color: #eff6ff;
      color: #2563eb;
      font-weight: 600;
    }

    .language-option .flag {
      font-size: 1.2rem;
      flex-shrink: 0;
    }

    .language-option .name {
      flex: 1;
      font-weight: 500;
    }

    .language-option .code {
      font-size: 0.8rem;
      color: #666;
      font-weight: 600;
    }

    .language-option.active .code {
      color: #2563eb;
    }

    .dropdown-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      background: transparent;
    }

    /* RTL Support */
    .language-switcher.rtl .language-dropdown {
      left: auto;
      right: 0;
    }

    .language-switcher.rtl .language-option {
      text-align: right;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .language-toggle {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
      }

      .language-dropdown {
        min-width: 180px;
      }

      .language-option {
        padding: 0.6rem 0.8rem;
        font-size: 0.85rem;
      }
    }
  `]
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  currentLanguage: SupportedLanguage = 'el';
  availableLanguages: SupportedLanguage[] = ['el', 'en', 'ru', 'he'];
  isDropdownOpen = false;
  isRTL = false;
  
  private subscription?: Subscription;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.currentLanguage = language;
        this.isRTL = this.translationService.isRTL();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  selectLanguage(language: SupportedLanguage): void {
    this.translationService.setLanguage(language);
    this.closeDropdown();
  }

  getCurrentLanguageInfo() {
    return this.translationService.getLanguageInfo()[this.currentLanguage];
  }

  getLanguageInfo() {
    return this.translationService.getLanguageInfo();
  }
}