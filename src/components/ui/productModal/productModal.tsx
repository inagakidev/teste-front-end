import { useState } from 'react';
import styles from './productModal.module.scss';
import type { Product } from '../../../types/product';
import { formatPrice } from '../../../utils/formatPrice';
import Modal from '../modal/modal';
import minusIcon from '../../../assets/minus.svg';
import plusIcon from '../../../assets/plus.svg';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 99;

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(MIN_QUANTITY);

  if (!product) return null;

  const decrease = () => setQuantity((q) => Math.max(MIN_QUANTITY, q - 1));
  const increase = () => setQuantity((q) => Math.min(MAX_QUANTITY, q + 1));

  return (
    <Modal isOpen onClose={onClose} labelledBy="product-modal-title">
      <div className={styles.content}>
        <img
          src={product.photo}
          alt={product.productName}
          className={styles.image}
          width={247}
          height={192}
        />

        <div className={styles.info}>
          <div className={styles.header}>
            <h2 id="product-modal-title" className={styles.name}>
              {product.productName}
            </h2>
            <p className={styles.price}>{formatPrice(product.price)}</p>
          </div>

          <div className={styles.details}>
            <p className={styles.description}>{product.descriptionShort}</p>
            <a href="#" className={styles.moreLink}>
              Veja mais detalhes do produto &gt;
            </a>
          </div>

          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button
                type="button"
                onClick={decrease}
                disabled={quantity === MIN_QUANTITY}
                aria-label="Diminuir quantidade"
              >
                <img src={minusIcon} alt="" width={20} height={20} />
              </button>
              <span aria-live="polite" aria-label={`Quantidade: ${quantity}`}>
                {String(quantity).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={increase}
                disabled={quantity === MAX_QUANTITY}
                aria-label="Aumentar quantidade"
              >
                <img src={plusIcon} alt="" width={20} height={20} />
              </button>
            </div>

            <button type="button" className={styles.buyButton}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}