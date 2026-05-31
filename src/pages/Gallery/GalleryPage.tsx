import { useState } from 'react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import { galleryItems } from '../../data/gallery';
import './GalleryPage.css';

export function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="page">
      <section className="section">
        <div className="container" style={{ marginBottom: '1.5rem' }}>
          <SectionHeader label="Gallery" title="Moments" />
        </div>

        <div className="gal-grid">
          {galleryItems.map((item, i) => (
            <div
              className={`gal-item${item.span === 'wide' ? ' gal-item--w' : ''}${
                item.span === 'tall' ? ' gal-item--t' : ''
              }`}
              key={i}
              onClick={() => setLightbox({ src: item.src, alt: item.alt })}
            >
              <img src={item.src} alt={item.alt} />
              <div className="gal-item__ov">
                <span>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
