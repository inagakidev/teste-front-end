import styles from './footer.module.scss';
import logo from '../../../assets/logo.svg';
import instagramIcon from '../../../assets/instagram.svg';
import facebookIcon from '../../../assets/facebook.svg';
import linkedinIcon from '../../../assets/linkedin.svg';

const socials = [
  { label: 'Instagram', icon: instagramIcon, href: '#' },
  { label: 'Facebook', icon: facebookIcon, href: '#' },
  { label: 'LinkedIn', icon: linkedinIcon, href: '#' },
];

const columns = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <img src={logo} alt="Econverse" width={164} height={48} />
          <p className={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label}>
                  <img src={social.icon} alt="" width={24} height={24} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.columns} aria-label="Links do rodapé">
          {columns.map((column) => (
            <div key={column.title} className={styles.column}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}