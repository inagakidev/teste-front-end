import { useRef, useState } from 'react';
import styles from './productShelf.module.scss';
import type { Product } from '../../../types/product';
import SectionTitle from '../../ui/sectionTitle/sectionTitle';
import ProductCard from '../../ui/productCard/productCard';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

interface ProductShelfProps {
  id: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  showTabs?: boolean;
}

export default function ProductShelf({
  id,
  products,
  onSelectProduct,
  showTabs = false,
}: ProductShelfProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const trackRef = useRef<HTMLUListElement>(null);
  const titleId = `${id}-title`;

  function scroll(direction: 'prev' | 'next') {
    const track = trackRef.current;
    if (!track) return;

    const CARD_STEP = 304 + 18;
    const amount = CARD_STEP * 4;

    track.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  }

  return (
    <section className={styles.shelf} aria-labelledby={titleId}>
      <SectionTitle
        id={titleId}
        title="Produtos relacionados"
        linkLabel={showTabs ? undefined : 'Ver todos'}
      />

      {showTabs && (
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${styles.tab} ${tab === activeTab ? styles.tabActive : ''}`}
              aria-pressed={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => scroll('prev')}
          aria-label="Produtos anteriores"
        >
          <ChevronIcon />
        </button>

        <ul className={styles.track} ref={trackRef}>
          {products.map((product, index) => (
            <li key={`${product.productName}-${index}`} className={styles.slide}>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => scroll('next')}
          aria-label="Próximos produtos"
        >
          <ChevronIcon />
        </button>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
