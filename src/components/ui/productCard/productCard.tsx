import styles from './productCard.module.scss';
import type { Product } from '../../../types/product';
import { formatPrice } from '../../../utils/formatPrice';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}


const OLD_PRICE_FACTOR = 1.07;
const INSTALLMENTS = 2;

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const oldPrice = Math.round(product.price * OLD_PRICE_FACTOR);
  const installmentPrice = Math.round(product.price / INSTALLMENTS);

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.details}
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img
          src={product.photo}
          alt={product.productName}
          className={styles.image}
          width={228}
          height={228}
          loading="lazy"
        />
        <h3 className={styles.name}>{product.descriptionShort}</h3>
      </button>

      <div className={styles.prices}>
        <s className={styles.oldPrice}>{formatPrice(oldPrice)}</s>
        <strong className={styles.price}>{formatPrice(product.price)}</strong>
        <span className={styles.installments}>
          ou {INSTALLMENTS}x de {formatPrice(installmentPrice)} sem juros
        </span>
        <span className={styles.shipping}>Frete grátis</span>
      </div>

      <button type="button" className={styles.buyButton} onClick={() => onSelect(product)}>
        Comprar
      </button>
    </article>
  );
}