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
        services: 'Υπηρεσίες',
        contact: 'Επικοινωνία',
        allRightsReserved: 'Όλα τα δικαιώματα κατοχυρωμένα.',
        about: 'Σχετικά',
        search: 'Αναζήτηση',
        location: 'Τοποθεσία',
        phone: 'Τηλέφωνο',
        email: 'Ηλεκτρονικό Ταχυδρομείο',
        name: 'Όνομα',
        submit: 'Υποβολή',
        loading: 'Φόρτωση...',
        error: 'Σφάλμα',
        success: 'Επιτυχία',
        locationName: 'Λεμεσός, Κύπρος'
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
        trustedDesc: 'Όλοι οι συνεργάτες μας είναι προσεκτικά επιλεγμένοι και αξιόπιστοι.',
        ourTeam: 'Η Ομάδα Μας'
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
        contact: 'Επικοινωνήστε μαζί μας',
        allRightsReserved: 'Όλα τα δικαιώματα κατοχυρωμένα.'
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
        support: 'Υποστήριξη',
        ourTeam: 'Η Ομάδα Μας'
      },
      contact: {
        title: 'Επικοινωνήστε Μαζί μας',
        subtitle: 'Είμαστε εδώ για να σας βοηθήσουμε με όλες τις ανάγκες σας',
        getInTouch: 'Ελάτε σε Επαφή',
        description: 'Στείλτε μας μήνυμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
        location: 'Τοποθεσία',
        locationName: 'Λεμεσός, Κύπρος',
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
        success: 'Success',
        locationName: 'Limassol, Cyprus'
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
        trustedDesc: 'All our partners are carefully selected and reliable.',
        ourTeam: 'Our Team'
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
        contact: 'Contact Us',
        allRightsReserved: 'All rights reserved.'
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
        support: 'Support',
        ourTeam: 'Our Team'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with all your needs',
        getInTouch: 'Get In Touch',
        description: 'Send us a message and we will contact you as soon as possible.',
        location: 'Location',
        locationName: 'Limassol, Cyprus',
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
      // document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
      document.documentElement.dir = 'ltr';
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
