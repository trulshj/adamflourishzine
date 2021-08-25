import Link from 'next/link';
import Image from 'next/image';
import styles from './menu.module.css';

import logo from '../public/logo.png';
import rose from '../public/rose.png';

let buttons = [
    { label: 'Home', link: '' },
    { label: 'About', link: 'about' },
    { label: 'FAQ', link: '' },
    { label: 'Schedule', link: 'schedule' },
    { label: 'Guidelines', link: '' },
    { label: 'Mods', link: '' },
];

export default function Menu() {
    return (
        <div className={styles.left}>
            <Image src={logo} alt='Flourish Logo' />
            <div className={styles.numberBtnsWrapper}>
                {buttons.map((b) => (
                    <Link href={`/${b.link}`}>
                        <button key={b.label} className={styles.numberBtn}>
                            {b.label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
