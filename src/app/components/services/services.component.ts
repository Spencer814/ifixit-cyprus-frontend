import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="services-container" [class.rtl]="isRTL">
      <section class="hero-section">
        <div class="hero-content">
          <h1>{{ 'services.title' | translate }}</h1>
          <p class="hero-subtitle">{{ 'services.subtitle' | translate }}</p>
        </div>
      </section>

      <section class="services-section">
        <div class="container">
          <div class="services-grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-image">
                <div class="image-placeholder" [class]="service.imageClass">
                  <div class="placeholder-content">
                    <div class="service-icon">{{ service.icon }}</div>
                  </div>
                </div>
              </div>
              <div class="service-content">
                <div class="service-header">
                  <h3>{{ service.title | translate }}</h3>
                </div>
                <p class="service-description">{{ service.description | translate }}</p>
                <ul class="service-features">
                  <li *ngFor="let feature of service.features">{{ feature | translate }}</li>
                </ul>
                <button class="service-btn">{{ 'services.getQuote' | translate }}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>{{ 'services.readyToStart' | translate }}</h2>
            <p>{{ 'services.ctaDescription' | translate }}</p>
            <button class="cta-btn">{{ 'services.contactUs' | translate }}</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .services-container {
      min-height: 100vh;
    }

    .hero-section {
      background: linear-gradient(135deg, #131836, #1a1f4a);
      color: white;
      padding: 8rem 0 6rem;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .hero-section h1 {
      font-size: 3.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: #b69d3f;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: #e2e8f0;
      line-height: 1.6;
    }

    .services-section {
      padding: 6rem 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2.5rem;
    }

    .service-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      transition: all 0.3s ease;
      
      &:hover {
        border-color: #b69d3f;
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(182, 157, 63, 0.15);
      }
    }

    .service-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      &.plumbing-image {
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      }
      
      &.electrical-image {
        background: linear-gradient(135deg, #f59e0b, #d97706);
      }
      
      &.painting-image {
        background: linear-gradient(135deg, #ec4899, #be185d);
      }
      
      &.maintenance-image {
        background: linear-gradient(135deg, #10b981, #047857);
      }
      
      &.hvac-image {
        background: linear-gradient(135deg, #06b6d4, #0891b2);
      }
      
      &.cleaning-image {
        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
      }
    }

    .placeholder-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      text-align: center;
      color: white;
    }

    .service-icon {
      font-size: 3rem;
      filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
    }

    .service-content {
      padding: 2rem;
    }

    .service-header {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .service-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #131836;
      margin: 0;
    }

    .service-description {
      font-size: 1rem;
      line-height: 1.7;
      color: #64748b;
      margin-bottom: 1.5rem;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin-bottom: 2rem;
    }

    .service-features li {
      padding: 0.5rem 0;
      color: #374151;
      position: relative;
      padding-left: 1.5rem;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #b69d3f;
        font-weight: bold;
      }
    }

    .service-btn {
      width: 100%;
      background: #b69d3f;
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #9a8235;
        transform: translateY(-2px);
      }
    }

    .cta-section {
      background: linear-gradient(135deg, #131836, #1a1f4a);
      color: white;
      padding: 5rem 0;
      text-align: center;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: #b69d3f;
    }

    .cta-content p {
      font-size: 1.2rem;
      color: #e2e8f0;
      margin-bottom: 2rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .cta-btn {
      background: #b69d3f;
      color: white;
      border: none;
      padding: 1.25rem 3rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: #9a8235;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(182, 157, 63, 0.3);
      }
    }

    .rtl {
      direction: rtl;
      text-align: right;
      
      .service-features li {
        padding-right: 1.5rem;
        padding-left: 0;
        
        &::before {
          right: 0;
          left: auto;
        }
      }
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2.5rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
      }
      
      .cta-content h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class ServicesComponent implements OnInit, OnDestroy {
  isRTL = false;
  private subscription?: Subscription;

  services = [
    {
      icon: '🔧',
      title: 'services.plumbing',
      description: 'services.plumbingDesc',
      features: ['services.plumbingFeature1', 'services.plumbingFeature2', 'services.plumbingFeature3'],
      imageClass: 'plumbing-image'
    },
    {
      icon: '⚡',
      title: 'services.electrical',
      description: 'services.electricalDesc',
      features: ['services.electricalFeature1', 'services.electricalFeature2', 'services.electricalFeature3'],
      imageClass: 'electrical-image'
    },
    {
      icon: '🎨',
      title: 'services.painting',
      description: 'services.paintingDesc',
      features: ['services.paintingFeature1', 'services.paintingFeature2', 'services.paintingFeature3'],
      imageClass: 'painting-image'
    },
    {
      icon: '🏠',
      title: 'services.maintenance',
      description: 'services.maintenanceDesc',
      features: ['services.maintenanceFeature1', 'services.maintenanceFeature2', 'services.maintenanceFeature3'],
      imageClass: 'maintenance-image'
    },
    {
      icon: '❄️',
      title: 'services.hvac',
      description: 'services.hvacDesc',
      features: ['services.hvacFeature1', 'services.hvacFeature2', 'services.hvacFeature3'],
      imageClass: 'hvac-image'
    },
    {
      icon: '🧹',
      title: 'services.cleaning',
      description: 'services.cleaningDesc',
      features: ['services.cleaningFeature1', 'services.cleaningFeature2', 'services.cleaningFeature3'],
      imageClass: 'cleaning-image'
    }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription = this.translationService.currentLanguage$.subscribe(() => {
      this.isRTL = this.translationService.isRTL();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}