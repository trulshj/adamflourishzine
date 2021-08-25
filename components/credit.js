
import styles from './credit.module.css';


export default function Credit() {
    return (
        <footer className={styles.credit}>
            website and hosting by{' '}
            <a className={styles.name} href='https://github.com/trulshj' target='_blank'>
                @trulshj
            </a>{' '}
            and{' '}
            <a className={styles.name} href='https://fishnobi.tumblr.com' target='_blank'>
                @fishnobi
            </a>
        </footer>
    );
}
