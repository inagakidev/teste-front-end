import { useState } from 'react';
import styles from './newsletter.module.scss';

export default function Newsletter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [submitted, setSubmitted] = useState(false);



    return (
        <section className={styles.newsletter} aria-labelledby="newsletter-title">
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2 id="newsletter-title" className={styles.title}>
                        Inscreva-se na nossa newsletter
                    </h2>
                    <p className={styles.description}>
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={(event) => {
                        event.preventDefault();
                        setSubmitted(true);
                        setName('');
                        setEmail('');
                        setAccepted(false);
                    }}
                >
                    <div className={styles.fields}>
                        <label htmlFor="newsletter-name" className="srOnly">Nome</label>
                        <input
                            id="newsletter-name"
                            type="text"
                            placeholder="Digite seu nome"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="newsletter-email" className="srOnly">E-mail</label>
                        <input
                            id="newsletter-email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit" className={styles.button}>
                            Inscrever
                        </button>
                    </div>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            required
                        />
                        Aceito os termos e condições
                    </label>

                    {submitted && (
                        <p className={styles.success} role="status">
                            Inscrição realizada com sucesso!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}