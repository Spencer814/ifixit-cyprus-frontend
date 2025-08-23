import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SupportedLanguage = 'el' | 'en' | 'ru' | 'he';

export interface Translation {
  [key: string]: string | Translation;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<SupportedLanguage>('el');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Record<SupportedLanguage, Translation> = {
    el: {
      // Greek (Primary)
      common: {
        home: 'Αρχική',
        services: 'Υπηρεσίες',
        contact: 'Επικοινωνία',
        about: 'Σχετικά',
        search: 'Αναζήτηση',
        location: 'Τοποθεσία',
        phone: 'Τηλέφωνο',
        email: 'Email',
        name: 'Όνομα',
        submit: 'Υποβολή',
        loading: 'Φόρτωση...',
        error: 'Σφάλμα',
        success: 'Επιτυχία'
      },
      navigation: {
        findServices: 'Βρείτε Υπηρεσίες',
        providerList: 'Λίστα Παρόχων',
        requestService: 'Αίτημα Υπηρεσίας'
      },
      home: {
        title: 'IFixIt Cyprus - Βρείτε Αξιόπιστους Επαγγελματίες',
        subtitle: 'Συνδέουμε τους κατοίκους της Κύπρου με έμπιστους παρόχους υπηρεσιών',
        searchPlaceholder: 'Τι χρειάζεστε;',
        popularServices: 'Δημοφιλείς Υπηρεσίες',
        viewServices: 'Δείτε τις Υπηρεσίες',
        getQuote: 'Ζητήστε Προσφορά',
        qualityWork: 'Ποιοτική Εργασία',
        qualityDesc: 'Εργαζόμαστε μόνο με πιστοποιημένους επαγγελματίες που διασφαλίζουν την ποιότητα σε κάθε έργο.',
        fastService: 'Γρήγορη Εξυπηρέτηση',
        fastDesc: 'Άμεση ανταπόκριση και γρήγορη ολοκλήρωση των εργασιών σας.',
        trustedPros: 'Έμπιστοι Επαγγελματίες',
        trustedDesc: 'Όλοι οι συνεργάτες μας είναι προσεκτικά επιλεγμένοι και αξιόπιστοι.'
      },
      services: {
        plumbing: 'Υδραυλικές Εργασίες',
        electrical: 'Ηλεκτρολογικές Εργασίες',
        cleaning: 'Καθαρισμός',
        maintenance: 'Συντήρηση Σπιτιού',
        painting: 'Βάψιμο',
        hvac: 'Κλιματισμός/Θέρμανση',
        gardening: 'Κηπουρική',
        carpentry: 'Ξυλουργική',
        title: 'Οι Υπηρεσίες μας',
        subtitle: 'Ολοκληρωμένες λύσεις για όλες τις ανάγκες του σπιτιού και της επιχείρησής σας',
        plumbingDesc: 'Επαγγελματικές υδραυλικές υπηρεσίες από πιστοποιημένους τεχνικούς',
        electricalDesc: 'Ασφαλείς ηλεκτρολογικές εργασίες με εγγύηση ποιότητας',
        paintingDesc: 'Βάψιμο και διακόσμηση για εσωτερικούς και εξωτερικούς χώρους',
        maintenanceDesc: 'Γενική συντήρηση και επισκευές για το σπίτι σας',
        hvacDesc: 'Εγκατάσταση και συντήρηση συστημάτων κλιματισμού και θέρμανσης',
        cleaningDesc: 'Επαγγελματικές υπηρεσίες καθαρισμού για σπίτια και γραφεία',
        getQuote: 'Ζητήστε Προσφορά',
        readyToStart: 'Έτοιμοι να Ξεκινήσετε;',
        ctaDescription: 'Επικοινωνήστε μαζί μας σήμερα για δωρεάν εκτίμηση και συμβουλές',
        contactUs: 'Επικοινωνήστε Μαζί μας',
        plumbingFeature1: 'Επισκευή σωληνώσεων',
        plumbingFeature2: 'Εγκατάσταση συσκευών',
        plumbingFeature3: 'Επείγοντα προβλήματα 24/7',
        electricalFeature1: 'Ηλεκτρικές εγκαταστάσεις',
        electricalFeature2: 'Επισκευή βλαβών',
        electricalFeature3: 'Αναβάθμιση συστημάτων',
        paintingFeature1: 'Εσωτερικό βάψιμο',
        paintingFeature2: 'Εξωτερικό βάψιμο',
        paintingFeature3: 'Διακοσμητικές τεχνικές',
        maintenanceFeature1: 'Προληπτική συντήρηση',
        maintenanceFeature2: 'Επισκευές σπιτιού',
        maintenanceFeature3: 'Βελτιώσεις κτιρίου',
        hvacFeature1: 'Εγκατάσταση κλιματιστικών',
        hvacFeature2: 'Συντήρηση συστημάτων',
        hvacFeature3: 'Επισκευή βλαβών',
        cleaningFeature1: 'Γενικός καθαρισμός',
        cleaningFeature2: 'Βαθύς καθαρισμός',
        cleaningFeature3: 'Συντήρηση καθαριότητας'
      },
      locations: {
        servingTitle: 'Εξυπηρετούμε όλη την Κύπρο',
        nicosia: 'Λευκωσία',
        limassol: 'Λεμεσός',
        larnaca: 'Λάρνακα',
        paphos: 'Πάφος',
        ayianapa: 'Αγία Νάπα',
        polis: 'Πόλις'
      },
      footer: {
        tagline: 'Σας συνδέουμε με αξιόπιστους επαγγελματίες',
        privacy: 'Πολιτική Απορρήτου',
        terms: 'Όροι Χρήσης',
        contact: 'Επικοινωνήστε μαζί μας'
      },
      about: {
        title: 'Σχετικά με εμάς',
        subtitle: 'Γνωρίστε την IFixIt Cyprus και τη δέσμευσή μας για ποιότητα',
        ourStory: 'Η Ιστορία μας',
        description1: 'Η IFixIt Cyprus ιδρύθηκε με στόχο να συνδέει τους κατοίκους της Κύπρου με αξιόπιστους και εμπειρογνώμονες παρόχους υπηρεσιών.',
        description2: 'Με έδρα τη Λεμεσό, εξυπηρετούμε όλη την Κύπρο προσφέροντας υπηρεσίες υψηλής ποιότητας σε ανταγωνιστικές τιμές.',
        quality: 'Ποιότητα',
        qualityDesc: 'Εργαζόμαστε μόνο με πιστοποιημένους επαγγελματίες που τηρούν τα υψηλότερα πρότυπα ποιότητας.',
        reliability: 'Αξιοπιστία',
        reliabilityDesc: 'Οι υπηρεσίες μας είναι διαθέσιμες 24/7 για να καλύπτουν τις ανάγκες σας όποτε τις χρειάζεστε.',
        satisfaction: 'Ικανοποίηση Πελατών',
        satisfactionDesc: 'Η ικανοποίηση των πελατών μας είναι η πρώτη μας προτεραιότητα σε κάθε έργο που αναλαμβάνουμε.',
        projects: 'Έργα',
        experience: 'Χρόνια Εμπειρίας',
        support: 'Υποστήριξη'
      },
      contact: {
        title: 'Επικοινωνήστε Μαζί μας',
        subtitle: 'Είμαστε εδώ για να σας βοηθήσουμε με όλες τις ανάγκες σας',
        getInTouch: 'Ελάτε σε Επαφή',
        description: 'Στείλτε μας μήνυμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
        location: 'Τοποθεσία',
        hours: 'Ωράριο',
        sendMessage: 'Στείλτε Μήνυμα',
        firstName: 'Όνομα',
        lastName: 'Επώνυμο',
        serviceType: 'Τύπος Υπηρεσίας',
        selectService: 'Επιλέξτε Υπηρεσία',
        message: 'Μήνυμα',
        sending: 'Αποστολή...',
        messageSent: 'Το μήνυμά σας στάλθηκε επιτυχώς!',
        firstNameRequired: 'Το όνομα είναι υποχρεωτικό',
        lastNameRequired: 'Το επώνυμο είναι υποχρεωτικό',
        emailInvalid: 'Παρακαλώ εισάγετε έγκυρη διεύθυνση email',
        serviceRequired: 'Παρακαλώ επιλέξτε τύπο υπηρεσίας',
        messageRequired: 'Το μήνυμα είναι υποχρεωτικό'
      }
    },
    en: {
      // English (British)
      common: {
        home: 'Home',
        services: 'Services',
        contact: 'Contact',
        about: 'About',
        search: 'Search',
        location: 'Location',
        phone: 'Mobile',
        email: 'Email',
        name: 'Name',
        submit: 'Submit',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success'
      },
      navigation: {
        findServices: 'Find Services',
        providerList: 'Provider List',
        requestService: 'Request Service'
      },
      home: {
        title: 'IFixIt Cyprus - Find Trusted Professionals',
        subtitle: 'Connecting Cyprus residents with trusted local service providers',
        searchPlaceholder: 'What do you need?',
        popularServices: 'Popular Services',
        viewServices: 'View Services',
        getQuote: 'Get Quote',
        qualityWork: 'Quality Work',
        qualityDesc: 'We work only with certified professionals who ensure quality in every project.',
        fastService: 'Fast Service',
        fastDesc: 'Quick response and fast completion of your projects.',
        trustedPros: 'Trusted Professionals',
        trustedDesc: 'All our partners are carefully selected and reliable.'
      },
      services: {
        plumbing: 'Plumbing',
        electrical: 'Electrical Work',
        cleaning: 'Cleaning Services',
        maintenance: 'Home Maintenance',
        painting: 'Painting & Decorating',
        hvac: 'Air Conditioning & Heating',
        gardening: 'Gardening',
        carpentry: 'Carpentry',
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for all your home and business needs',
        plumbingDesc: 'Professional plumbing services from certified technicians',
        electricalDesc: 'Safe electrical work with quality guarantee',
        paintingDesc: 'Painting & decorating for interior and exterior spaces',
        maintenanceDesc: 'General maintenance and repairs for your home',
        hvacDesc: 'Installation and maintenance of air conditioning and heating systems',
        cleaningDesc: 'Professional cleaning services for homes and offices',
        getQuote: 'Get Quote',
        readyToStart: 'Ready to Start?',
        ctaDescription: 'Contact us today for a free estimate and consultation',
        contactUs: 'Contact Us',
        plumbingFeature1: 'Pipe repairs',
        plumbingFeature2: 'Fixture installation',
        plumbingFeature3: 'Emergency problems 24/7',
        electricalFeature1: 'Electrical installations',
        electricalFeature2: 'Fault repairs',
        electricalFeature3: 'System upgrades',
        paintingFeature1: 'Interior painting',
        paintingFeature2: 'Exterior painting',
        paintingFeature3: 'Decorative techniques',
        maintenanceFeature1: 'Preventive maintenance',
        maintenanceFeature2: 'Home repairs',
        maintenanceFeature3: 'Building improvements',
        hvacFeature1: 'Air conditioning installation',
        hvacFeature2: 'System maintenance',
        hvacFeature3: 'Fault repairs',
        cleaningFeature1: 'General cleaning',
        cleaningFeature2: 'Deep cleaning',
        cleaningFeature3: 'Cleaning maintenance'
      },
      locations: {
        servingTitle: 'Serving All of Cyprus',
        nicosia: 'Nicosia',
        limassol: 'Limassol',
        larnaca: 'Larnaca',
        paphos: 'Paphos',
        ayianapa: 'Ayia Napa',
        polis: 'Polis'
      },
      footer: {
        tagline: 'Connecting you with trusted professionals',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us'
      },
      about: {
        title: 'About Us',
        subtitle: 'Learn about IFixIt Cyprus and our commitment to quality',
        ourStory: 'Our Story',
        description1: 'IFixIt Cyprus was founded to connect Cyprus residents with trusted and experienced service providers.',
        description2: 'Based in Limassol, we serve all of Cyprus offering high-quality services at competitive prices.',
        quality: 'Quality',
        qualityDesc: 'We work only with certified professionals who maintain the highest quality standards.',
        reliability: 'Reliability',
        reliabilityDesc: 'Our services are available 24/7 to meet your needs whenever you require them.',
        satisfaction: 'Customer Satisfaction',
        satisfactionDesc: 'Customer satisfaction is our top priority in every project we undertake.',
        projects: 'Projects',
        experience: 'Years Experience',
        support: 'Support'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with all your needs',
        getInTouch: 'Get In Touch',
        description: 'Send us a message and we will contact you as soon as possible.',
        location: 'Location',
        hours: 'Hours',
        sendMessage: 'Send Message',
        firstName: 'First Name',
        lastName: 'Last Name',
        serviceType: 'Service Type',
        selectService: 'Select Service',
        message: 'Message',
        sending: 'Sending...',
        messageSent: 'Your message was sent successfully!',
        firstNameRequired: 'First name is required',
        lastNameRequired: 'Last name is required',
        emailInvalid: 'Please enter a valid email address',
        serviceRequired: 'Please select a service type',
        messageRequired: 'Message is required'
      }
    },
    ru: {
      // Russian/Ukrainian
      common: {
        home: 'Главная',
        services: 'Услуги',
        contact: 'Контакт',
        about: 'О нас',
        search: 'Поиск',
        location: 'Местоположение',
        phone: 'Телефон',
        email: 'Email',
        name: 'Имя',
        submit: 'Отправить',
        loading: 'Загрузка...',
        error: 'Ошибка',
        success: 'Успех'
      },
      navigation: {
        findServices: 'Найти Услуги',
        providerList: 'Список Поставщиков',
        requestService: 'Заказать Услугу'
      },
      home: {
        title: 'IFixIt Cyprus - Найдите Проверенных Специалистов',
        subtitle: 'Связываем жителей Кипра с надежными поставщиками услуг',
        searchPlaceholder: 'Что вам нужно?',
        popularServices: 'Популярные Услуги'
      },
      services: {
        plumbing: 'Сантехника',
        electrical: 'Электрические Работы',
        cleaning: 'Уборка',
        maintenance: 'Обслуживание Дома',
        painting: 'Покраска',
        hvac: 'Кондиционирование/Отопление',
        gardening: 'Садоводство',
        carpentry: 'Столярные Работы'
      },
      locations: {
        servingTitle: 'Обслуживаем весь Кипр',
        nicosia: 'Никосия',
        limassol: 'Лимассол',
        larnaca: 'Ларнака',
        paphos: 'Пафос',
        ayianapa: 'Айя-Напа',
        polis: 'Полис'
      },
      footer: {
        tagline: 'Связываем вас с надежными специалистами',
        privacy: 'Политика Конфиденциальности',
        terms: 'Условия Обслуживания',
        contact: 'Связаться с Нами'
      }
    },
    he: {
      // Hebrew
      common: {
        home: 'בית',
        services: 'שירותים',
        contact: 'צור קשר',
        about: 'אודות',
        search: 'חיפוש',
        location: 'מיקום',
        phone: 'טלפון',
        email: 'אימייל',
        name: 'שם',
        submit: 'שלח',
        loading: 'טוען...',
        error: 'שגיאה',
        success: 'הצלחה'
      },
      navigation: {
        findServices: 'מצא שירותים',
        providerList: 'רשימת ספקים',
        requestService: 'בקש שירות'
      },
      home: {
        title: 'IFixIt Cyprus - מצא מקצועיים מהימנים',
        subtitle: 'מחברים תושבי קפריסין עם ספקי שירות מקומיים מהימנים',
        searchPlaceholder: 'מה אתה צריך?',
        popularServices: 'שירותים פופולריים'
      },
      services: {
        plumbing: 'אינסטלציה',
        electrical: 'עבודות חשמל',
        cleaning: 'ניקיון',
        maintenance: 'תחזוקת בית',
        painting: 'צביעה',
        hvac: 'מיזוג אוויר/חימום',
        gardening: 'גינון',
        carpentry: 'נגרות'
      },
      locations: {
        servingTitle: 'משרתים את כל קפריסין',
        nicosia: 'ניקוסיה',
        limassol: 'לימסול',
        larnaca: 'לרנקה',
        paphos: 'פאפוס',
        ayianapa: 'איה נאפה',
        polis: 'פוליס'
      },
      footer: {
        tagline: 'מחברים אתכם למקצועיים מהימנים',
        privacy: 'מדיניות פרטיות',
        terms: 'תנאי שירות',
        contact: 'צרו קשר'
      }
    }
  };

  constructor() {
    // Try to get saved language from localStorage, default to Greek
    const savedLanguage = localStorage.getItem('selectedLanguage') as SupportedLanguage;
    if (savedLanguage && this.isValidLanguage(savedLanguage)) {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }

  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: SupportedLanguage): void {
    if (this.isValidLanguage(language)) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem('selectedLanguage', language);
      document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }

  getTranslation(key: string): string {
    const language = this.getCurrentLanguage();
    const translation = this.getNestedTranslation(this.translations[language], key);

    // Fallback to English if translation not found
    if (!translation && language !== 'en') {
      const fallback = this.getNestedTranslation(this.translations['en'], key);
      return fallback || key;
    }

    return translation || key;
  }

  private getNestedTranslation(obj: Translation, path: string): string | null {
    return path.split('.').reduce((current: any, key: string) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  }

  private isValidLanguage(language: string): language is SupportedLanguage {
    return ['el', 'en', 'ru', 'he'].includes(language);
  }

  getLanguageInfo(): Record<SupportedLanguage, { name: string; nativeName: string; flag: string; rtl: boolean }> {
    return {
      el: { name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', rtl: false },
      en: { name: 'English', nativeName: 'English', flag: '🇬🇧', rtl: false },
      ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', rtl: false },
      he: { name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', rtl: true }
    };
  }

  isRTL(): boolean {
    return this.getCurrentLanguage() === 'he';
  }
}
