import { TestBed } from '@angular/core/testing';
import { TranslationService, Translation } from './translation.service';

function keys(obj: Translation, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === 'string' ? [prefix + k] : keys(v, prefix + k + '.'));
}

describe('TranslationService', () => {
  let service: TranslationService;
  beforeEach(() => {
    try { localStorage.removeItem('selectedLanguage'); } catch { /* storage blocked */ }
    service = TestBed.inject(TranslationService);
  });

  it('has the same keys in Greek and English', () => {
    const t = (service as any).translations as Record<'el' | 'en', Translation>;
    const el = keys(t.el).sort();
    const en = keys(t.en).sort();
    expect(el.filter(k => !en.includes(k))).withContext('missing in en').toEqual([]);
    expect(en.filter(k => !el.includes(k))).withContext('missing in el').toEqual([]);
  });

  it('does not claim 24/7 availability (hours are 08:00-13:00 / 15:15-18:00)', () => {
    const t = (service as any).translations as Record<'el' | 'en', Translation>;
    const all = JSON.stringify(t);
    expect(all).not.toContain('24/7');
  });

  it('sets the html lang attribute when the language changes', () => {
    service.setLanguage('en');
    expect(document.documentElement.lang).toBe('en');
    service.setLanguage('el');
    expect(document.documentElement.lang).toBe('el');
  });
});
