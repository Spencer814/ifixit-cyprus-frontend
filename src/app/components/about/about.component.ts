import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="about-container" [class.rtl]="isRTL">
      <section class="hero-section">
        <div class="hero-content">
          <h1>{{ 'about.title' | translate }}</h1>
          <p class="hero-subtitle">{{ 'about.subtitle' | translate }}</p>
        </div>
      </section>

      <section class="content-section">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>{{ 'about.ourStory' | translate }}</h2>
              <p>{{ 'about.description1' | translate }}</p>
              <p>{{ 'about.description2' | translate }}</p>
            </div>
            <div class="about-image">
              <div class="image-placeholder team-image">
                <div class="placeholder-content">
                  <div class="team-icon">👷‍♂️</div>
                  <span class="placeholder-text">Our Professional Team</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="features">
            <div class="feature-item">
              <div class="feature-icon">🏆</div>
              <h3>{{ 'about.quality' | translate }}</h3>
              <p>{{ 'about.qualityDesc' | translate }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h3>{{ 'about.reliability' | translate }}</h3>
              <p>{{ 'about.reliabilityDesc' | translate }}</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">👥</div>
              <h3>{{ 'about.satisfaction' | translate }}</h3>
              <p>{{ 'about.satisfactionDesc' | translate }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">{{ 'about.projects' | translate }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">4+</div>
              <div class="stat-label">{{ 'about.experience' | translate }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">{{ 'about.satisfaction' | translate }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">{{ 'about.support' | translate }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-container {
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

    .content-section {
      padding: 6rem 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-image {
      width: 100%;
      height: 400px;
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-4px);
      }

      &.team-image {
        background: linear-gradient(135deg, #131836, #1a1f4a);
      }
    }

    .placeholder-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      text-align: center;
      color: white;
    }

    .team-icon {
      font-size: 4rem;
      filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
    }

    .placeholder-text {
      font-size: 1.1rem;
      font-weight: 500;
      opacity: 0.9;
    }

    .about-text h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
      color: #131836;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #64748b;
      margin-bottom: 1.5rem;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
    }

    .feature-item {
      text-align: center;
      padding: 2rem 1rem;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-item h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #131836;
    }

    .feature-item p {
      color: #64748b;
      line-height: 1.6;
    }

    .stats-section {
      background: #f8fafc;
      padding: 5rem 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .stat-item {
      padding: 2rem 1rem;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      color: #b69d3f;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1.1rem;
      color: #64748b;
      font-weight: 500;
    }

    .rtl {
      direction: rtl;
      text-align: right;
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .about-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .about-image {
        height: 300px;
      }
      
      .about-text h2 {
        font-size: 2rem;
      }
      
      .features {
        grid-template-columns: 1fr;
        margin-top: 3rem;
      }
      
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `]
})
export class AboutComponent implements OnInit, OnDestroy {
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
}