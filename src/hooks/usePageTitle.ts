import { useEffect } from 'react';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/productions': 'Productions',
  '/philosophy': 'Philosophy',
  '/director': 'The Director',
  '/gallery': 'Gallery',
  '/contact': 'Contact',
};

export function usePageTitle(pathname: string): void {
  useEffect(() => {
    const title = pageTitles[pathname] || 'Home';
    document.title = `The Auroville Theatre Group — ${title}`;
  }, [pathname]);
}
