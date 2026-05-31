import { HashRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/Home/HomePage';
import { AboutPage } from './pages/About/AboutPage';
import { ProductionsPage } from './pages/Productions/ProductionsPage';
import { PhilosophyPage } from './pages/Philosophy/PhilosophyPage';
import { DirectorPage } from './pages/Director/DirectorPage';
import { GalleryPage } from './pages/Gallery/GalleryPage';
import { ContactPage } from './pages/Contact/ContactPage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/director" element={<DirectorPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
