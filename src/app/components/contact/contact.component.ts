import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  template: `
    <div class="contact-container" [class.rtl]="isRTL">
      <section class="hero-section">
        <div class="hero-content">
          <h1>{{ 'contact.title' | translate }}</h1>
          <p class="hero-subtitle">{{ 'contact.subtitle' | translate }}</p>
        </div>
      </section>

      <section class="contact-section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>{{ 'contact.getInTouch' | translate }}</h2>
              <p>{{ 'contact.description' | translate }}</p>
              
              <div class="contact-details">
                <div class="contact-item">
                  <div class="contact-icon">📞</div>
                  <div class="contact-text">
                    <h3>{{ 'common.phone' | translate }}</h3>
                    <p>+357 25583225</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">✉️</div>
                  <div class="contact-text">
                    <h3>{{ 'common.email' | translate }}</h3>
                    <p>info&#64;neacontractors.com</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">📍</div>
                  <div class="contact-text">
                    <h3>{{ 'contact.location' | translate }}</h3>
                    <p>{{ 'contact.locationName' | translate }}</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">🕒</div>
                  <div class="contact-text">
                    <h3>{{ 'contact.hours' | translate }}</h3>
                    <p>08:00 - 13:00 || 15:15 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-container">
              <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <h3>{{ 'contact.sendMessage' | translate }}</h3>
                
                <div class="form-row">
                  <div class="form-group">
                    <label for="firstName">{{ 'contact.firstName' | translate }}</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      [(ngModel)]="formData.firstName"
                      required
                      #firstName="ngModel"
                    >
                    <div class="error-message" *ngIf="firstName.invalid && firstName.touched">
                      {{ 'contact.firstNameRequired' | translate }}
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <label for="lastName">{{ 'contact.lastName' | translate }}</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      [(ngModel)]="formData.lastName"
                      required
                      #lastName="ngModel"
                    >
                    <div class="error-message" *ngIf="lastName.invalid && lastName.touched">
                      {{ 'contact.lastNameRequired' | translate }}
                    </div>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">{{ 'common.email' | translate }}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    email
                    #email="ngModel"
                  >
                  <div class="error-message" *ngIf="email.invalid && email.touched">
                    {{ 'contact.emailInvalid' | translate }}
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="phone">{{ 'common.phone' | translate }}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    [(ngModel)]="formData.phone"
                  >
                </div>
                
                <div class="form-group">
                  <label for="service">{{ 'contact.serviceType' | translate }}</label>
                  <select 
                    id="service" 
                    name="service"
                    [(ngModel)]="formData.service"
                    required
                    #service="ngModel"
                  >
                    <option value="">{{ 'contact.selectService' | translate }}</option>
                    <option value="plumbing">{{ 'services.plumbing' | translate }}</option>
                    <option value="electrical">{{ 'services.electrical' | translate }}</option>
                    <option value="painting">{{ 'services.painting' | translate }}</option>
                    <option value="maintenance">{{ 'services.maintenance' | translate }}</option>
                    <option value="hvac">{{ 'services.hvac' | translate }}</option>
                    <option value="cleaning">{{ 'services.cleaning' | translate }}</option>
                  </select>
                  <div class="error-message" *ngIf="service.invalid && service.touched">
                    {{ 'contact.serviceRequired' | translate }}
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="message">{{ 'contact.message' | translate }}</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5"
                    [(ngModel)]="formData.message"
                    required
                    #message="ngModel"
                  ></textarea>
                  <div class="error-message" *ngIf="message.invalid && message.touched">
                    {{ 'contact.messageRequired' | translate }}
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  class="submit-btn"
                  [disabled]="contactForm.invalid || isSubmitting"
                >
                  <span *ngIf="!isSubmitting">{{ 'contact.sendMessage' | translate }}</span>
                  <span *ngIf="isSubmitting">{{ 'contact.sending' | translate }}</span>
                </button>
                
                <div class="success-message" *ngIf="showSuccessMessage">
                  {{ 'contact.messageSent' | translate }}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-container {
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

    .contact-section {
      padding: 6rem 0;
      background: #f8fafc;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info h2 {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: #131836;
    }

    .contact-info p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #64748b;
      margin-bottom: 3rem;
    }

    .contact-details {
      space-y: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .contact-icon {
      font-size: 1.5rem;
      padding: 0.75rem;
      background: #b69d3f;
      border-radius: 8px;
      min-width: 3rem;
      text-align: center;
    }

    .contact-text h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #131836;
      margin-bottom: 0.5rem;
    }

    .contact-text p {
      color: #64748b;
      margin: 0;
    }

    .contact-form-container {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    .contact-form h3 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #131836;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: #374151;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 0.875rem 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: #b69d3f;
        box-shadow: 0 0 0 3px rgba(182, 157, 63, 0.1);
      }
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .error-message {
      color: #dc2626;
      font-size: 0.875rem;
      margin-top: 0.5rem;
    }

    .submit-btn {
      width: 100%;
      background: #b69d3f;
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover:not(:disabled) {
        background: #9a8235;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(182, 157, 63, 0.3);
      }
      
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .success-message {
      background: #10b981;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      text-align: center;
    }

    .rtl {
      direction: rtl;
      text-align: right;
      
      .contact-item {
        flex-direction: row-reverse;
      }
    }

    @media (max-width: 768px) {
      .hero-section h1 {
        font-size: 2.5rem;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
      
      .form-row {
        grid-template-columns: 1fr;
      }
      
      .contact-form-container {
        padding: 2rem 1.5rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit, OnDestroy {
  isRTL = false;
  isSubmitting = false;
  showSuccessMessage = false;
  private subscription?: Subscription;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription = this.translationService.currentLanguage$.subscribe(() => {
      this.isRTL = this.translationService.isRTL();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onSubmit(): void {
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      
      // Reset form
      this.formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 2000);
  }
}