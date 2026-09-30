import styles from './partnerBanners.module.scss';
import partnerImage from '../../../assets/image-card.png';

interface PartnerBanner {
  title: string;
  text: string;
  href: string;
  image: string;
}

const banners: PartnerBanner[] = [
  {
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    href: '#',
    image: partnerImage,
  },
  {
    title: 'Parceiros',
    text: 'Lorem ipsum dolor sit amet, consectetur',
    href: '#',
    image: partnerImage,
  },
];

interface PartnerBannersProps {
  id: string;
}

export default function PartnerBanners({ id }: PartnerBannersProps) {
  const titleId = `${id}-title`;

  return (
    <section className={styles.partners} aria-labelledby={titleId}>
      <h2 id={titleId} className="srOnly">
        Nossos parceiros
      </h2>

      <ul className={styles.list}>
        {banners.map((banner, index) => (
          <li key={index}>
            <article className={styles.banner} style={{ backgroundImage: `url(${banner.image})` }}>
              <h3 className={styles.title}>{banner.title}</h3>
              <p className={styles.text}>{banner.text}</p>
              <a href={banner.href} className={styles.button}>
                Confira
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
