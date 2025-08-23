import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe],
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1>{{ 'home.title' | translate }}</h1>
        <p class="hero-subtitle">{{ 'home.subtitle' | translate }}</p>
        
        <div class="cta-section">
          <a routerLink="/services" class="cta-btn primary">{{ 'home.viewServices' | translate }}</a>
          <a routerLink="/contact" class="cta-btn secondary">{{ 'home.getQuote' | translate }}</a>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="features-content">
        <div class="feature-grid">
          <div class="feature-item">
            <div class="feature-image">
              <img [src]="'assets/images/quality-work-' + this.getCurrentLanguage() + '.svg'" alt="{{ 'home.qualityWork' | translate }}" class="feature-img">
            </div>
            <div class="feature-text">
              <h3>{{ 'home.qualityWork' | translate }}</h3>
              <p>{{ 'home.qualityDesc' | translate }}</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-image">
              <img [src]="'assets/images/fast-service-' + this.getCurrentLanguage() + '.svg'" alt="{{ 'home.fastService' | translate }}" class="feature-img">
            </div>
            <div class="feature-text">
              <h3>{{ 'home.fastService' | translate }}</h3>
              <p>{{ 'home.fastDesc' | translate }}</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-image">
              <img [src]="'assets/images/trusted-professionals-' + this.getCurrentLanguage() + '.svg'" alt="{{ 'home.trustedPros' | translate }}" class="feature-img">
            </div>
            <div class="feature-text">
              <h3>{{ 'home.trustedPros' | translate }}</h3>
              <p>{{ 'home.trustedDesc' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .hero {
      background: linear-gradient(135deg, #131836, #1a1f4a);
      color: white;
      padding: 8rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
      min-height: 70vh;
      display: flex;
      align-items: center;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, rgba(182, 157, 63, 0.1) 0%, transparent 50%);
      z-index: 1;
    }

    .hero-content {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 2;
      width: 100%;
    }

    .hero h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      color: #b69d3f;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.4rem;
      margin-bottom: 3rem;
      color: #e2e8f0;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .cta-section {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-btn {
      padding: 1.2rem 2.5rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      cursor: pointer;
      
      &.primary {
        background: #b69d3f;
        color: white;
        
        &:hover {
          background: #9a8235;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(182, 157, 63, 0.3);
        }
      }
      
      &.secondary {
        background: transparent;
        color: white;
        border: 2px solid white;
        
        &:hover {
          background: white;
          color: #131836;
          transform: translateY(-2px);
        }
      }
    }

    .features {
      padding: 6rem 0;
      background: white;
    }

    .features-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 3rem;
    }

    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }

    .feature-image {
      width: 100%;
      max-width: 300px;
      margin-bottom: 1.5rem;
    }

    .feature-img {
      width: 100%;
      height: 200px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      object-fit: cover;

      &:hover {
        transform: translateY(-4px);
      }
    }

    .placeholder-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
    }

    .placeholder-text {
      font-size: 0.9rem;
      color: #64748b;
      font-weight: 500;
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .feature-text {
      text-align: center;
    }

    .feature-item h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #131836;
      margin-bottom: 1rem;
    }

    .feature-item p {
      color: #64748b;
      line-height: 1.7;
      font-size: 1rem;
    }


    .project-image .placeholder-text,
    .team-image .placeholder-text {
      color: white;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 6rem 0;
        min-height: 60vh;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
      }
      
      .cta-section {
        flex-direction: column;
        align-items: center;
      }
      
      .cta-btn {
        width: 100%;
        max-width: 300px;
        text-align: center;
      }
      
      .feature-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .cta-btn {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  isRTL = false;
  private subscription?: Subscription;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription = this.translationService.currentLanguage$.subscribe(() => {
      this.isRTL = this.translationService.isRTL();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getCurrentLanguage(): string {
    return this.translationService.getCurrentLanguage();
  }
}