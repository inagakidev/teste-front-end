import { useState } from 'react';
import styles from './categories.module.scss';

import technologyIcon from '../../../assets/electronics.svg';
import supermarketIcon from '../../../assets/supermercados.svg';
import drinksIcon from '../../../assets/whiskey.svg';
import toolsIcon from '../../../assets/ferramentas.svg';
import healthIcon from '../../../assets/cuidados-de-saude.svg';
import sportsIcon from '../../../assets/corrida.svg';
import fashionIcon from '../../../assets/moda.svg';

const categories = [
  { id: 'tecnologia', label: 'Tecnologia', icon: technologyIcon },
  { id: 'supermercado', label: 'Supermercado', icon: supermarketIcon },
  { id: 'bebidas', label: 'Bebidas', icon: drinksIcon },
  { id: 'ferramentas', label: 'Ferramentas', icon: toolsIcon },
  { id: 'saude', label: 'Saúde', icon: healthIcon },
  { id: 'esportes', label: 'Esportes e Fitness', icon: sportsIcon },
  { id: 'moda', label: 'Moda', icon: fashionIcon },
];

export default function Categories() {
  const [activeId, setActiveId] = useState('tecnologia');

  return (
    <section className={styles.categories} aria-labelledby="categories-title">
      <h2 id="categories-title" className="srOnly">
        Compre por categoria
      </h2>

      <ul className={styles.list}>
        {categories.map((category) => {
          const isActive = category.id === activeId;

          return (
            <li key={category.id}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                aria-pressed={isActive}
                onClick={() => setActiveId(category.id)}
              >
                <span className={styles.box}>
                  <img src={category.icon} alt="" width={61} height={61} />
                </span>
                <span className={styles.label}>{category.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
