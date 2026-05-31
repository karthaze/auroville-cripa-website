export interface NavLink {
  label: string;
  path: string;
  key: string;
}

export interface Production {
  year: string;
  title: string;
  author: string;
  description?: string;
  image?: string;
}

export interface TimelineItem {
  year: string;
  event: string;
  highlight?: boolean;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  span?: 'wide' | 'tall';
}
