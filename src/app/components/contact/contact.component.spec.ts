import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ContactComponent } from './contact.component';
import { TranslationService } from '../../services/translation.service';

describe('ContactComponent', () => {
  beforeEach(async () => {
    try { localStorage.removeItem('selectedLanguage'); } catch { /* storage blocked */ }
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function render() {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('offers the phone number as a tel: link', () => {
    const { el } = render();
    const tel = el.querySelector('a[href="tel:+35725583225"]');
    expect(tel).withContext('tel link').not.toBeNull();
    expect(tel!.textContent).toContain('+357 25583225');
  });

  it('offers the email address as a mailto: link', () => {
    const { el } = render();
    const mail = el.querySelector('a[href^="mailto:info@neacontractors.com"]');
    expect(mail).withContext('mailto link').not.toBeNull();
    expect(mail!.textContent).toContain('info@neacontractors.com');
  });

  it('shows opening hours and Limassol', () => {
    const { el } = render();
    expect(el.textContent).toContain('08:00');
    expect(el.textContent).toContain('13:00');
    expect(el.textContent).toContain('15:15');
    expect(el.textContent).toContain('18:00');
    expect(el.textContent).toContain('Λεμεσός');
  });

  it('has no form and cannot fake a submission', () => {
    const { el, fixture } = render();
    expect(el.querySelector('form')).toBeNull();
    expect(el.querySelector('input, textarea, select')).toBeNull();
    expect((fixture.componentInstance as any).onSubmit).toBeUndefined();
  });

  it('translates to English', () => {
    const { fixture, el } = render();
    TestBed.inject(TranslationService).setLanguage('en');
    fixture.detectChanges();
    expect(el.querySelector('h1')?.textContent).toContain('Contact Us');
    expect(el.textContent).toContain('Limassol, Cyprus');
  });
});
