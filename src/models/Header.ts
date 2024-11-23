import {Offcanvas} from '../models/Offcanvas'
export class Header {
  links: Array<{ label: string; href: string }>;
  icons:  Array<{ label: string; href: string }>;
  hamburger: Offcanvas;

  constructor(links: Array<{ label: string; href: string }>,  icons:  Array<{ label: string; href: string }>, hamburger: Offcanvas) {
      this.links = links;
      this.icons = icons;
      this.hamburger = hamburger;
  }
}
