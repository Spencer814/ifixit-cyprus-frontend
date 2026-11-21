import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Simple 24x24 line icons. Always decorative: pair them with visible text. */
const ICONS: Record<string, string[]> = {
  phone: ['M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2'],
  mail: ['M3 6h18v12H3z', 'M3 7l9 6 9-6'],
  clock: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18', 'M12 7v5l3 2'],
  pin: ['M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z', 'M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5'],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  check: ['M5 12.5l4.5 4.5L19 7'],
  plumbing: ['M4 9h7a3 3 0 0 1 3 3v8', 'M4 6v6', 'M17 20h-6', 'M18 4c1.5 2 2.5 3.4 2.5 4.6a2.5 2.5 0 0 1-5 0C15.5 7.4 16.5 6 18 4z'],
  electrical: ['M13 2L5 13h6l-1 9 8-11h-6l1-9z'],
  painting: ['M4 4h13v5H4z', 'M17 6.5h3v5.5h-8.5v3', 'M10 15h3v6h-3z'],
  maintenance: ['M3 11l9-7 9 7', 'M5 10v10h14V10', 'M10 20v-6h4v6'],
  hvac: ['M12 2v20', 'M4 7l16 10', 'M20 7L4 17', 'M9.5 3.5L12 6l2.5-2.5', 'M9.5 20.5L12 18l2.5 2.5'],
  cleaning: ['M6 9h12l-1.5 12h-9z', 'M9 9V5h6v4', 'M19 3l.6 1.4L21 5l-1.4.6L19 7l-.6-1.4L17 5l1.4-.6z'],
  quality: ['M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z'],
  fast: ['M12 4a8 8 0 1 0 8 8', 'M12 8v4l3 2', 'M16 3h5v5'],
  trusted: ['M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z', 'M8.5 12l2.5 2.5 4.5-5'],
};

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true" focusable="false">
      @for (d of paths; track $index) { <path [attr.d]="d" /> }
    </svg>
  `,
  styles: [':host{display:inline-flex;line-height:0}svg{width:1em;height:1em}'],
})
export class IconComponent {
  paths: string[] = [];
  @Input({ required: true }) set name(value: string) {
    this.paths = ICONS[value] ?? [];
  }
}
