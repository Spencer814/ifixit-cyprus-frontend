import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// export type SupportedLanguage = 'el' | 'en' | 'ru' | 'he';
export type SupportedLanguage = 'el' | 'en';

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
        about: 'Σχετικά',
        services: 'Υπηρεσίες',
        contact: 'Επικοινωνία',
        phone: 'Τηλέφωνο',
        email: 'Email',
        hours: 'Ωράριο',
        location: 'Τοποθεσία',
        locationName: 'Λεμεσός, Κύπρος',
        skipToContent: 'Μετάβαση στο περιεχόμενο',
        menu: 'Μενού',
        mainNav: 'Κύρια πλοήγηση',
        language: 'Γλώσσα',
        callUs: 'Καλέστε μας',
        emailUs: 'Στείλτε email'
      },
      meta: {
        homeTitle: 'Επισκευές και συντήρηση σπιτιού στη Λεμεσό',
        homeDescription: 'IFixIt Cyprus: υδραυλικά, ηλεκτρολογικά, βάψιμο, συντήρηση σπιτιού, κλιματισμός και καθαρισμός στη Λεμεσό. Τηλέφωνο +357 25583225.',
        aboutTitle: 'Σχετικά με εμάς',
        aboutDescription: 'Γνωρίστε την IFixIt Cyprus, με έδρα τη Λεμεσό.',
        servicesTitle: 'Οι υπηρεσίες μας',
        servicesDescription: 'Υδραυλικά, ηλεκτρολογικά, βάψιμο, συντήρηση σπιτιού, κλιματισμός και καθαρισμός από την IFixIt Cyprus.',
        contactTitle: 'Επικοινωνία',
        contactDescription: 'Καλέστε την IFixIt Cyprus στο +357 25583225 ή στείλτε email στο info@neacontractors.com. Ωράριο 08:00–13:00 και 15:15–18:00.'
      },
      home: {
        display: 'Επισκευές & Συντήρηση',
        subtitle: 'Συνδέουμε τους κατοίκους της Κύπρου με έμπιστους παρόχους υπηρεσιών',
        viewServices: 'Δείτε τις Υπηρεσίες',
        introTitle: 'Τι κάνουμε',
        introText: 'Η IFixIt Cyprus αναλαμβάνει επισκευές και συντήρηση για σπίτια και επιχειρήσεις στη Λεμεσό: υδραυλικά, ηλεκτρολογικά, βάψιμο, κλιματισμό, καθαρισμό και γενική συντήρηση.',
        qualityWork: 'Ποιοτική Εργασία',
        qualityDesc: 'Εργαζόμαστε μόνο με πιστοποιημένους επαγγελματίες που διασφαλίζουν την ποιότητα σε κάθε έργο.',
        fastService: 'Γρήγορη Εξυπηρέτηση',
        fastDesc: 'Άμεση ανταπόκριση και γρήγορη ολοκλήρωση των εργασιών σας.',
        trustedPros: 'Έμπιστοι Επαγγελματίες',
        trustedDesc: 'Όλοι οι συνεργάτες μας είναι προσεκτικά επιλεγμένοι και αξιόπιστοι.',
        servicesTitle: 'Με τι μπορούμε να βοηθήσουμε',
        allServices: 'Όλες οι υπηρεσίες',
        ctaTitle: 'Χρειάζεστε κάποια επισκευή;',
        ctaText: 'Καλέστε μας ή στείλτε μας email. Πείτε μας τι χρειάζεται και πού βρίσκεστε.'
      },
      services: {
        title: 'Οι Υπηρεσίες μας',
        subtitle: 'Ολοκληρωμένες λύσεις για όλες τις ανάγκες του σπιτιού και της επιχείρησής σας',
        plumbing: 'Υδραυλικές Εργασίες',
        electrical: 'Ηλεκτρολογικές Εργασίες',
        painting: 'Βάψιμο',
        maintenance: 'Συντήρηση Σπιτιού',
        hvac: 'Κλιματισμός/Θέρμανση',
        cleaning: 'Καθαρισμός',
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
        plumbingFeature3: 'Επισκευή διαρροών',
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
      about: {
        title: 'Σχετικά με εμάς',
        subtitle: 'Γνωρίστε την IFixIt Cyprus και τη δέσμευσή μας για ποιότητα',
        ourStory: 'Η Ιστορία μας',
        description1: 'Η IFixIt Cyprus ιδρύθηκε με στόχο να συνδέει τους κατοίκους της Κύπρου με αξιόπιστους και εμπειρογνώμονες παρόχους υπηρεσιών.',
        description2: 'Με έδρα τη Λεμεσό, εξυπηρετούμε όλη την Κύπρο προσφέροντας υπηρεσίες υψηλής ποιότητας σε ανταγωνιστικές τιμές.',
        valuesTitle: 'Οι αξίες μας',
        quality: 'Ποιότητα',
        qualityDesc: 'Εργαζόμαστε μόνο με πιστοποιημένους επαγγελματίες που τηρούν τα υψηλότερα πρότυπα ποιότητας.',
        reliability: 'Αξιοπιστία',
        reliabilityDesc: 'Μπορείτε να μας βρείτε στο τηλέφωνο ή με email κατά τις ώρες λειτουργίας μας.',
        satisfaction: 'Ικανοποίηση Πελατών',
        satisfactionDesc: 'Η ικανοποίηση των πελατών μας είναι η πρώτη μας προτεραιότητα σε κάθε έργο που αναλαμβάνουμε.',
        projects: 'Έργα',
        experience: 'Χρόνια Εμπειρίας'
      },
      contact: {
        title: 'Επικοινωνήστε Μαζί μας',
        subtitle: 'Είμαστε εδώ για να σας βοηθήσουμε με όλες τις ανάγκες σας',
        description: 'Καλέστε μας ή στείλτε μας email και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
        callText: 'Καλέστε μας κατά τις ώρες λειτουργίας.',
        emailText: 'Πείτε μας τι χρειάζεται επισκευή και πού βρίσκεστε. Αν μπορείτε, επισυνάψτε φωτογραφίες.',
        emailSubject: 'Αίτημα μέσω IFixIt Cyprus',
        location: 'Τοποθεσία',
        locationName: 'Λεμεσός, Κύπρος',
        locationText: 'Η έδρα μας είναι στη Λεμεσό.',
        hours: 'Ωράριο',
        morning: 'Πρωί',
        afternoon: 'Απόγευμα'
      },
      footer: {
        tagline: 'Επισκευές και συντήρηση σπιτιού, με έδρα τη Λεμεσό.',
        pages: 'Σελίδες',
        allRightsReserved: 'Όλα τα δικαιώματα κατοχυρωμένα.'
      }
    },
    en: {
      // English (British)
      common: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
        location: 'Location',
        locationName: 'Limassol, Cyprus',
        skipToContent: 'Skip to main content',
        menu: 'Menu',
        mainNav: 'Main navigation',
        language: 'Language',
        callUs: 'Call us',
        emailUs: 'Send an email'
      },
      meta: {
        homeTitle: 'Home repairs and maintenance in Limassol',
        homeDescription: 'IFixIt Cyprus: plumbing, electrical work, painting, home maintenance, air conditioning and cleaning in Limassol. Call +357 25583225.',
        aboutTitle: 'About Us',
        aboutDescription: 'Learn about IFixIt Cyprus, based in Limassol.',
        servicesTitle: 'Our Services',
        servicesDescription: 'Plumbing, electrical work, painting, home maintenance, air conditioning and cleaning from IFixIt Cyprus.',
        contactTitle: 'Contact',
        contactDescription: 'Call IFixIt Cyprus on +357 25583225 or email info@neacontractors.com. Open 08:00–13:00 and 15:15–18:00.'
      },
      home: {
        display: 'Repairs & Maintenance',
        subtitle: 'Connecting Cyprus residents with trusted local service providers',
        viewServices: 'View Services',
        introTitle: 'What we do',
        introText: 'IFixIt Cyprus takes care of repairs and maintenance for homes and businesses in Limassol: plumbing, electrical work, painting, air conditioning, cleaning and general upkeep.',
        qualityWork: 'Quality Work',
        qualityDesc: 'We work only with certified professionals who ensure quality in every project.',
        fastService: 'Fast Service',
        fastDesc: 'Quick response and fast completion of your projects.',
        trustedPros: 'Trusted Professionals',
        trustedDesc: 'All our partners are carefully selected and reliable.',
        servicesTitle: 'What we can help with',
        allServices: 'All services',
        ctaTitle: 'Need something fixed?',
        ctaText: 'Call or email us. Tell us what needs doing and where you are.'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for all your home and business needs',
        plumbing: 'Plumbing',
        electrical: 'Electrical Work',
        painting: 'Painting & Decorating',
        maintenance: 'Home Maintenance',
        hvac: 'Air Conditioning & Heating',
        cleaning: 'Cleaning Services',
        plumbingDesc: 'Professional plumbing services from certified technicians',
        electricalDesc: 'Safe electrical work with quality guarantee',
        paintingDesc: 'Painting & decorating for interior and exterior spaces',
        maintenanceDesc: 'General maintenance and repairs for your home',
        hvacDesc: 'Installation and maintenance of air conditioning and heating systems',
        cleaningDesc: 'Professional cleaning services for homes and offices',
        getQuote: 'Get a quote',
        readyToStart: 'Ready to Start?',
        ctaDescription: 'Contact us today for a free estimate and consultation',
        contactUs: 'Contact Us',
        plumbingFeature1: 'Pipe repairs',
        plumbingFeature2: 'Fixture installation',
        plumbingFeature3: 'Leak repairs',
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
      about: {
        title: 'About Us',
        subtitle: 'Learn about IFixIt Cyprus and our commitment to quality',
        ourStory: 'Our Story',
        description1: 'IFixIt Cyprus was founded to connect Cyprus residents with trusted and experienced service providers.',
        description2: 'Based in Limassol, we serve all of Cyprus offering high-quality services at competitive prices.',
        valuesTitle: 'Our values',
        quality: 'Quality',
        qualityDesc: 'We work only with certified professionals who maintain the highest quality standards.',
        reliability: 'Reliability',
        reliabilityDesc: 'You can reach us by phone or email during our working hours.',
        satisfaction: 'Customer Satisfaction',
        satisfactionDesc: 'Customer satisfaction is our top priority in every project we undertake.',
        projects: 'Projects',
        experience: 'Years Experience'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with all your needs',
        description: 'Call or email us and we will get back to you as soon as possible.',
        callText: 'Call us during working hours.',
        emailText: 'Tell us what needs fixing and where you are. Photos help if you can attach them.',
        emailSubject: 'Enquiry via IFixIt Cyprus',
        location: 'Location',
        locationName: 'Limassol, Cyprus',
        locationText: 'We are based in Limassol.',
        hours: 'Hours',
        morning: 'Morning',
        afternoon: 'Afternoon'
      },
      footer: {
        tagline: 'Home repairs and maintenance, based in Limassol.',
        pages: 'Pages',
        allRightsReserved: 'All rights reserved.'
      }
    // },
    // ru: {
    //   // Russian/Ukrainian
    //   common: {
    //     home: 'Главная',
    //     services: 'Услуги',
    //     contact: 'Контакт',
    //     about: 'О нас',
    //     search: 'Поиск',
    //     location: 'Местоположение',
    //     phone: 'Телефон',
    //     email: 'Электронная Почта',
    //     name: 'Имя',
    //     submit: 'Отправить',
    //     loading: 'Загрузка...',
    //     error: 'Ошибка',
    //     success: 'Успех',
    //     locationName: 'Лимассол, Кипр'
    //   },
    //   navigation: {
    //     findServices: 'Найти Услуги',
    //     providerList: 'Список Поставщиков',
    //     requestService: 'Заказать Услугу'
    //   },
    //   home: {
    //     title: 'IFixIt Cyprus - Найдите Проверенных Специалистов',
    //     subtitle: 'Связываем жителей Кипра с надежными поставщиками услуг',
    //     searchPlaceholder: 'Что вам нужно?',
    //     popularServices: 'Популярные Услуги',
    //     viewServices: 'Посмотреть Услуги',
    //     getQuote: 'Получить Расценки',
    //     qualityWork: 'Качественная Работа',
    //     qualityDesc: 'Мы работаем только с сертифицированными специалистами, которые гарантируют качество каждого проекта.',
    //     fastService: 'Быстрое Обслуживание',
    //     fastDesc: 'Быстрое реагирование и оперативное выполнение ваших задач.',
    //     trustedPros: 'Надежные Специалисты',
    //     trustedDesc: 'Все наши партнеры проверены и имеют необходимые лицензии для работы на Кипре.',
    //     ourTeam: 'Наша Команда'
    //   },
    //   services: {
    //     title: 'Наши Услуги',
    //     subtitle: 'Профессиональные услуги для вашего дома и бизнеса',
    //     plumbing: 'Сантехника',
    //     electrical: 'Электрические Работы',
    //     painting: 'Покраска и Отделка',
    //     maintenance: 'Обслуживание Дома',
    //     hvac: 'Кондиционирование/Отопление',
    //     cleaning: 'Уборка',
    //     plumbingDesc: 'Полный спектр сантехнических услуг от ремонта до установки',
    //     electricalDesc: 'Профессиональные электрические работы и установки',
    //     paintingDesc: 'Покраска интерьеров, экстерьеров и декоративные работы',
    //     maintenanceDesc: 'Комплексное обслуживание и ремонт вашего дома',
    //     hvacDesc: 'Установка и обслуживание систем кондиционирования и отопления',
    //     cleaningDesc: 'Профессиональные услуги уборки для домов и офисов',
    //     getQuote: 'Получить Расценки',
    //     readyToStart: 'Готовы Начать?',
    //     ctaDescription: 'Свяжитесь с нами сегодня для бесплатной оценки и консультации',
    //     contactUs: 'Связаться с Нами',
    //     plumbingFeature1: 'Ремонт труб',
    //     plumbingFeature2: 'Установка сантехники',
    //     plumbingFeature3: 'Экстренные проблемы 24/7',
    //     electricalFeature1: 'Электрические установки',
    //     electricalFeature2: 'Ремонт неисправностей',
    //     electricalFeature3: 'Модернизация систем',
    //     paintingFeature1: 'Внутренняя покраска',
    //     paintingFeature2: 'Наружная покраска',
    //     paintingFeature3: 'Декоративные техники',
    //     maintenanceFeature1: 'Профилактическое обслуживание',
    //     maintenanceFeature2: 'Ремонт дома',
    //     maintenanceFeature3: 'Улучшение зданий',
    //     hvacFeature1: 'Установка кондиционеров',
    //     hvacFeature2: 'Обслуживание систем',
    //     hvacFeature3: 'Ремонт неисправностей',
    //     cleaningFeature1: 'Общая уборка',
    //     cleaningFeature2: 'Глубокая уборка',
    //     cleaningFeature3: 'Поддерживающая уборка'
    //   },
    //   locations: {
    //     servingTitle: 'Обслуживаем весь Кипр',
    //     nicosia: 'Никосия',
    //     limassol: 'Лимассол',
    //     larnaca: 'Ларнака',
    //     paphos: 'Пафос',
    //     ayianapa: 'Айя-Напа',
    //     polis: 'Полис'
    //   },
    //   footer: {
    //     tagline: 'Связываем вас с надежными специалистами',
    //     privacy: 'Политика Конфиденциальности',
    //     terms: 'Условия Обслуживания',
    //     contact: 'Связаться с Нами',
    //     allRightsReserved: 'Все права защищены.'
    //   },
    //   about: {
    //     title: 'О Нас',
    //     subtitle: 'Узнайте о IFixIt Cyprus и нашей приверженности к качеству',
    //     ourStory: 'Наша История',
    //     description1: 'IFixIt Cyprus была основана для связи жителей Кипра с надежными и опытными поставщиками услуг.',
    //     description2: 'Базируясь в Лимассоле, мы обслуживаем весь Кипр, предлагая высококачественные услуги по конкурентоспособным ценам.',
    //     quality: 'Качество',
    //     qualityDesc: 'Мы работаем только с сертифицированными специалистами, которые поддерживают самые высокие стандарты качества.',
    //     reliability: 'Надежность',
    //     reliabilityDesc: 'Наши услуги доступны 24/7, чтобы удовлетворить ваши потребности, когда они вам нужны.',
    //     satisfaction: 'Удовлетворение Клиентов',
    //     satisfactionDesc: 'Удовлетворение клиентов - наш главный приоритет в каждом проекте, который мы выполняем.',
    //     projects: 'Проектов',
    //     experience: 'Лет Опыта',
    //     support: 'Поддержка',
    //     ourTeam: 'Наша Команда'
    //   },
    //   contact: {
    //     title: 'Свяжитесь с Нами',
    //     subtitle: 'Мы здесь, чтобы помочь вам со всеми вашими потребностями',
    //     getInTouch: 'Связаться',
    //     description: 'Отправьте нам сообщение, и мы свяжемся с вами как можно скорее.',
    //     location: 'Местоположение',
    //     locationName: 'Лимассол, Кипр',
    //     hours: 'Часы Работы',
    //     sendMessage: 'Отправить Сообщение',
    //     firstName: 'Имя',
    //     lastName: 'Фамилия',
    //     serviceType: 'Тип Услуги',
    //     selectService: 'Выберите Услугу',
    //     message: 'Сообщение',
    //     sending: 'Отправляется...',
    //     messageSent: 'Ваше сообщение было успешно отправлено!',
    //     firstNameRequired: 'Имя обязательно',
    //     lastNameRequired: 'Фамилия обязательна',
    //     emailInvalid: 'Пожалуйста, введите действительный адрес электронной почты',
    //     serviceRequired: 'Пожалуйста, выберите тип услуги',
    //     messageRequired: 'Сообщение обязательно'
    //   }
    // },
    // he: {
    //   // Hebrew
    //   common: {
    //     home: 'בית',
    //     services: 'שירותים',
    //     contact: 'צור קשר',
    //     about: 'אודות',
    //     search: 'חיפוש',
    //     location: 'מיקום',
    //     phone: 'טלפון',
    //     email: 'אימייל',
    //     name: 'שם',
    //     submit: 'שלח',
    //     loading: 'טוען...',
    //     error: 'שגיאה',
    //     success: 'הצלחה',
    //     locationName: 'לימסול, קפריסין'
    //   },
    //   navigation: {
    //     findServices: 'מצא שירותים',
    //     providerList: 'רשימת ספקים',
    //     requestService: 'בקש שירות'
    //   },
    //   home: {
    //     title: 'IFixIt Cyprus - מצא מקצועיים מהימנים',
    //     subtitle: 'מחברים תושבי קפריסין עם ספקי שירות מקומיים מהימנים',
    //     searchPlaceholder: 'מה אתה צריך?',
    //     popularServices: 'שירותים פופולריים',
    //     viewServices: 'צפה בשירותים',
    //     getQuote: 'קבל הצעת מחיר',
    //     qualityWork: 'עבודה איכותית',
    //     qualityDesc: 'אנו עובדים רק עם מקצועיים מוסמכים המבטיחים איכות בכל פרויקט.',
    //     fastService: 'שירות מהיר',
    //     fastDesc: 'מענה מהיר והשלמת עבודות במהירות.',
    //     trustedPros: 'מקצועיים מהימנים',
    //     trustedDesc: 'כל השותפים שלנו נבדקו ויש להם הרישיונות הנדרשים לעבודה בקפריסין.',
    //     ourTeam: 'הצוות שלנו'
    //   },
    //   services: {
    //     title: 'השירותים שלנו',
    //     subtitle: 'שירותים מקצועיים לבית ולעסק שלך',
    //     plumbing: 'אינסטלציה',
    //     electrical: 'עבודות חשמל',
    //     painting: 'צביעה ועיצוב',
    //     maintenance: 'תחזוקת בית',
    //     hvac: 'מיזוג אוויר/חימום',
    //     cleaning: 'ניקיון',
    //     plumbingDesc: 'מגוון מלא של שירותי אינסטלציה מתיקון ועד התקנה',
    //     electricalDesc: 'עבודות חשמל מקצועיות והתקנות',
    //     paintingDesc: 'צביעת פנים, חוץ ועבודות דקורטיביות',
    //     maintenanceDesc: 'תחזוקה ותיקונים מקיפים לביתכם',
    //     hvacDesc: 'התקנה ותחזוקה של מערכות מיזוג ועל חימום',
    //     cleaningDesc: 'שירותי ניקיון מקצועיים לבתים ומשרדים',
    //     getQuote: 'קבל הצעת מחיר',
    //     readyToStart: 'מוכנים להתחיל?',
    //     ctaDescription: 'צרו קשר היום לקבלת הערכה והתייעצות ללא עלות',
    //     contactUs: 'צרו קשר',
    //     plumbingFeature1: 'תיקון צינורות',
    //     plumbingFeature2: 'התקנת אביזרים',
    //     plumbingFeature3: 'בעיות חירום 24/7',
    //     electricalFeature1: 'התקנות חשמל',
    //     electricalFeature2: 'תיקון תקלות',
    //     electricalFeature3: 'שדרוג מערכות',
    //     paintingFeature1: 'צביעת פנים',
    //     paintingFeature2: 'צביעת חוץ',
    //     paintingFeature3: 'טכניקות דקורטיביות',
    //     maintenanceFeature1: 'תחזוקה מונעת',
    //     maintenanceFeature2: 'תיקוני בית',
    //     maintenanceFeature3: 'שיפור מבנים',
    //     hvacFeature1: 'התקנת מזגנים',
    //     hvacFeature2: 'תחזוקת מערכות',
    //     hvacFeature3: 'תיקון תקלות',
    //     cleaningFeature1: 'ניקיון כללי',
    //     cleaningFeature2: 'ניקיון יסודי',
    //     cleaningFeature3: 'ניקיון תחזוקתי'
    //   },
    //   locations: {
    //     servingTitle: 'משרתים את כל קפריסין',
    //     nicosia: 'ניקוסיה',
    //     limassol: 'לימסול',
    //     larnaca: 'לרנקה',
    //     paphos: 'פאפוס',
    //     ayianapa: 'איה נאפה',
    //     polis: 'פוליס'
    //   },
    //   footer: {
    //     tagline: 'מחברים אתכם למקצועיים מהימנים',
    //     privacy: 'מדיניות פרטיות',
    //     terms: 'תנאי שירות',
    //     contact: 'צרו קשר',
    //     allRightsReserved: 'כל הזכויות שמורות.'
    //   },
    //   about: {
    //     title: 'אודותינו',
    //     subtitle: 'למדו על IFixIt Cyprus והמחויבות שלנו לאיכות',
    //     ourStory: 'הסיפור שלנו',
    //     description1: 'IFixIt Cyprus נוסדה כדי לחבר בין תושבי קפריסין לספקי שירות מהימנים ומנוסים.',
    //     description2: 'הממוקמים בלימסול, אנו משרתים את כל קפריסין ומציעים שירותים איכותיים במחירים תחרותיים.',
    //     quality: 'איכות',
    //     qualityDesc: 'אנו עובדים רק עם מקצועיים מוסמכים השומרים על הסטנדרטים הגבוהים ביותר של איכות.',
    //     reliability: 'אמינות',
    //     reliabilityDesc: 'השירותים שלנו זמינים 24/7 כדי לענות על הצרכים שלכם מתי שתזדקקו להם.',
    //     satisfaction: 'שביעות רצון לקוחות',
    //     satisfactionDesc: 'שביעות רצון הלקוחות היא העדיפות העליונה שלנו בכל פרויקט שאנו מבצעים.',
    //     projects: 'פרויקטים',
    //     experience: 'שנות ניסיון',
    //     support: 'תמיכה',
    //     ourTeam: 'הצוות שלנו'
    //   },
    //   contact: {
    //     title: 'צרו קשר',
    //     subtitle: 'אנחנו כאן כדי לעזור לכם עם כל הצרכים שלכם',
    //     getInTouch: 'יצירת קשר',
    //     description: 'שלחו לנו הודעה ונחזור אליכם בהקדם האפשרי.',
    //     location: 'מיקום',
    //     locationName: 'לימסול, קפריסין',
    //     hours: 'שעות פעילות',
    //     sendMessage: 'שלח הודעה',
    //     firstName: 'שם פרטי',
    //     lastName: 'שם משפחה',
    //     serviceType: 'סוג שירות',
    //     selectService: 'בחר שירות',
    //     message: 'הודעה',
    //     sending: 'שולח...',
    //     messageSent: 'ההודעה שלכם נשלחה בהצלחה!',
    //     firstNameRequired: 'שם פרטי נדרש',
    //     lastNameRequired: 'שם משפחה נדרש',
    //     emailInvalid: 'אנא הכנס כתובת אימייל תקינה',
    //     serviceRequired: 'אנא בחר סוג שירות',
    //     messageRequired: 'הודעה נדרשת'
    //   }
    }
  };

  constructor() {
    // Use the saved language if there is one; otherwise Greek.
    let savedLanguage: string | null = null;
    try {
      savedLanguage = localStorage.getItem('selectedLanguage');
    } catch {
      // Storage can be blocked (private mode, strict settings); fall back to Greek.
    }
    if (savedLanguage && this.isValidLanguage(savedLanguage)) {
      this.currentLanguageSubject.next(savedLanguage);
    }
    this.applyToDocument(this.currentLanguageSubject.value);
  }

  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: SupportedLanguage): void {
    if (this.isValidLanguage(language)) {
      this.applyToDocument(language);
      try {
        localStorage.setItem('selectedLanguage', language);
      } catch {
        // Storage blocked: the choice simply is not remembered.
      }
      this.currentLanguageSubject.next(language);
    }
  }

  private applyToDocument(language: SupportedLanguage): void {
    // document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = language;
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
    // return ['el', 'en', 'ru', 'he'].includes(language);
    return ['el', 'en'].includes(language);
  }

  getLanguageInfo(): Record<SupportedLanguage, { name: string; nativeName: string; flag: string; rtl: boolean }> {
    return {
      el: { name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', rtl: false },
      en: { name: 'English', nativeName: 'English', flag: '🇬🇧', rtl: false },
      // ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', rtl: false },
      // he: { name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', rtl: true }
    };
  }

  isRTL(): boolean {
    // return this.getCurrentLanguage() === 'he';
    return false;
  }
}
