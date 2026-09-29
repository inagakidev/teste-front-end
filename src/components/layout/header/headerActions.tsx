import styles from './header.module.scss';
import boxIcon from '../../../assets/box.svg';
import heartIcon from '../../../assets/heart.svg';
import userIcon from '../../../assets/userCircle.svg';
import cartIcon from '../../../assets/shoppingCart.svg';

const actions = [
  { icon: boxIcon, label: 'Meus pedidos', href: '#', size: 24 },
  { icon: heartIcon, label: 'Favoritos', href: '#', size: 32 },
  { icon: userIcon, label: 'Minha conta', href: '#', size: 32 },
  { icon: cartIcon, label: 'Carrinho', href: '#', size: 32 },
];

export default function HeaderActions() {
  return (
    <nav aria-label="Ações do usuário">
      <ul className={styles.actions}>
        {actions.map((action) => (
          <li key={action.label}>
            <a href={action.href} aria-label={action.label} className={styles.actionLink}>
              <img src={action.icon} alt="" width={action.size} height={action.size} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}