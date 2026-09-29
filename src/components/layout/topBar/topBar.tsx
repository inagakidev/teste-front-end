// components/layout/TopBar/TopBar.tsx
import TopBarItem from './topBarItem.tsx';
import styles from "./topBar.module.scss";
import shieldIcon from '../../../assets/shieldCheck.svg';
import truckIcon from '../../../assets/truck.svg';
import cardIcon from '../../../assets/creditCard.svg';

const benefits = [
  { icon: shieldIcon, before: 'Compra', highlight: '100% segura' },
  { icon: truckIcon, highlight: 'Frete grátis', after: 'acima de R$ 200' },
  { icon: cardIcon, highlight: 'Parcele', after: 'suas compras' },
];

export default function TopBar() {
  return (
    <ul className={styles.topBar}>
      {benefits.map((benefit) => (
        <TopBarItem key={benefit.highlight} {...benefit} />
      ))}
    </ul>
  );
}