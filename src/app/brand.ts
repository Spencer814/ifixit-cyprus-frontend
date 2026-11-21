/** Contact details shown across the site. Change them here only. */
export const CONTACT = {
  phoneDisplay: '+357 25583225',
  phoneHref: 'tel:+35725583225',
  email: 'info@neacontractors.com',
  hours: [
    { labelKey: 'contact.morning', from: '08:00', to: '13:00' },
    { labelKey: 'contact.afternoon', from: '15:15', to: '18:00' },
  ],
} as const;

/**
 * HERO IMAGE SLOT — the right-hand side of the home page hero.
 *
 * Today it is a brand-colour illustration (no photo rights needed).
 * To use a real photo: put the file in src/assets/images/ (e.g. hero.jpg,
 * about 1600px wide), point `src` at it, set `isPhoto: true`, and fill in
 * `altKey` with a translation key describing the photo (add it to both
 * languages in translation.service.ts).
 */
export const HERO_IMAGE: { src: string; isPhoto: boolean; altKey: string } = {
  src: 'assets/images/hero-illustration.svg',
  isPhoto: false,
  altKey: '',
};
