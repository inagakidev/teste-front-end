import styles from './brands.module.scss';
import SectionTitle from '../../ui/sectionTitle/sectionTitle';
import brandLogo from '../../../assets/logo.svg';

const brands = [
  { name: 'Econverse', logo: brandLogo, href: '#' },
  { name: 'Econverse', logo: brandLogo, href: '#' },
  { name: 'Econverse', logo: brandLogo, href: '#' },
  { name: 'Econverse', logo: brandLogo, href: '#' },
  { name: 'Econverse', logo: brandLogo, href: '#' },
];

export default function Brands() {
  return (
    <section className={styles.brands} aria-labelledby="brands-title">
      <SectionTitle id="brands-title" title="Navegue por marcas" showLines={false} />

      <ul className={styles.list}>
        {brands.map((brand, index) => (
          <li key={index}>
            <a
              href={brand.href}
              className={styles.item}
              aria-label={`Ver produtos da marca ${brand.name}`}
            >
              <img src={brand.logo} alt="" width={117} height={37} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
