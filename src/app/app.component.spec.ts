import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { TranslationService } from './services/translation.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    try { localStorage.removeItem('selectedLanguage'); } catch { /* storage blocked */ }
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function render() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('starts in Greek and sets the html lang attribute', () => {
    const { el } = render();
    expect(document.documentElement.lang).toBe('el');
    expect(el.querySelector('nav[aria-label] a')?.textContent?.trim()).toBe('Αρχική');
  });

  it('renders a skip link to the main content', () => {
    const { el } = render();
    const skip = el.querySelector('a.skip-link') as HTMLAnchorElement | null;
    expect(skip).withContext('skip link').not.toBeNull();
    expect(skip!.getAttribute('href')).toBe('#main');
    expect(el.querySelector('main#main')).not.toBeNull();
  });

  it('switches to English: lang attribute, nav text, title and meta description', () => {
    const { fixture, el } = render();
    const enButton = el.querySelector('button[data-lang="en"]') as HTMLButtonElement | null;
    expect(enButton).withContext('English language button').not.toBeNull();
    enButton!.click();
    fixture.detectChanges();

    expect(document.documentElement.lang).toBe('en');
    expect(enButton!.getAttribute('aria-pressed')).toBe('true');
    expect(el.querySelector('nav[aria-label] a')?.textContent?.trim()).toBe('Home');
    expect(document.title).toContain('IFixIt Cyprus');
    expect(document.title).toContain('Home repairs and maintenance in Limassol');
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    expect(description).toContain('Limassol');
  });

  it('switches back to Greek with Greek title text', () => {
    const { fixture, el } = render();
    (el.querySelector('button[data-lang="en"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    (el.querySelector('button[data-lang="el"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(document.documentElement.lang).toBe('el');
    expect(document.title).toContain('Λεμεσό');
  });

  it('remembers a saved language choice instead of forcing Greek', () => {
    TestBed.inject(TranslationService).setLanguage('en');
    const { el } = render();
    expect(document.documentElement.lang).toBe('en');
    expect(el.querySelector('nav[aria-label] a')?.textContent?.trim()).toBe('Home');
  });

  it('has no placeholder "#" links and no Privacy/Terms links that lead nowhere', () => {
    const { el } = render();
    const hrefs = Array.from(el.querySelectorAll('a')).map(a => a.getAttribute('href'));
    expect(hrefs).not.toContain('#');
    expect(el.textContent).not.toContain('Πολιτική Απορρήτου');
  });

  it('shows the phone as a tel: link in the header', () => {
    const { el } = render();
    const tel = el.querySelector('header a[href="tel:+35725583225"]');
    expect(tel).not.toBeNull();
  });
});
