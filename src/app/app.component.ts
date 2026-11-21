import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { combineLatest, filter, startWith, Subscription } from 'rxjs';
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { IconComponent } from './components/icon/icon.component';
import { CONTACT } from './brand';
import { SERVICE_IDS } from './services.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent, IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
  readonly navItems = [
    { path: '/', key: 'common.home', exact: true },
    { path: '/about', key: 'common.about', exact: false },
    { path: '/services', key: 'common.services', exact: false },
    { path: '/contact', key: 'common.contact', exact: false },
  ];
  readonly serviceLinks = SERVICE_IDS;
  menuOpen = false;

  @ViewChild('main', { static: true }) private main?: ElementRef<HTMLElement>;
  private subscription?: Subscription;
  private firstNavigation = true;

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    const navigationEnd$ = this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd));

    this.subscription = combineLatest([
      navigationEnd$.pipe(startWith(null)),
      this.translationService.currentLanguage$,
    ]).subscribe(([navigation]) => {
      this.updateHead();
      if (navigation) {
        this.onNavigated();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  private onNavigated(): void {
    this.menuOpen = false;
    // Move focus to the new page so keyboard and screen-reader users start there.
    if (!this.firstNavigation && !this.router.url.includes('#')) {
      this.main?.nativeElement.focus({ preventScroll: true });
    }
    this.firstNavigation = false;
  }

  private updateHead(): void {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const page: string = route.snapshot.data['meta'] ?? 'home';
    const t = (key: string) => this.translationService.getTranslation(key);
    const pageTitle = t(`meta.${page}Title`);
    this.title.setTitle(page === 'home' ? `IFixIt Cyprus | ${pageTitle}` : `${pageTitle} | IFixIt Cyprus`);
    this.meta.updateTag({ name: 'description', content: t(`meta.${page}Description`) });
    this.meta.updateTag({ property: 'og:title', content: this.title.getTitle() });
    this.meta.updateTag({ property: 'og:description', content: t(`meta.${page}Description`) });
    this.meta.updateTag({ property: 'og:locale', content: this.translationService.getCurrentLanguage() === 'el' ? 'el_GR' : 'en_GB' });
  }
}
