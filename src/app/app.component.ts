import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, TranslatePipe, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'IFixIt Cyprus';
  isRTL = false;
  
  private subscription?: Subscription;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    // Initialize Greek as primary language
    this.translationService.setLanguage('el');
    
    // Subscribe to language changes for RTL support
    this.subscription = this.translationService.currentLanguage$.subscribe(() => {
      this.isRTL = this.translationService.isRTL();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
