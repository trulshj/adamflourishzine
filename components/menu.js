import React, { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';

import Link from 'next/link';
import Image from 'next/image';
import styles from './menu.module.css';

import logo from '@/public/logo.png';
import rose from '@/public/rose.png';

let buttons = [
    { id: '1', label: 'Home', link: '' },
    { id: '2', label: 'About', link: 'about' },
    { id: '3', label: 'FAQ', link: 'faq' },
    { id: '4', label: 'Schedule', link: 'schedule' },
    { id: '5', label: 'Guidelines', link: 'guidelines' },
    { id: '6', label: 'Mods', link: 'mods' },
];

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    const smallScreen = useMediaPredicate('(max-width: 1000px)');

    return (
        <div
            className={styles.left}
        >
            <Image
                className={styles.logo}
                src={smallScreen || true ? rose : logo}
                onClick={() => {
                    setShowMenu(!showMenu);
                    console.log(showMenu);
                }}
                alt='Flourish Logo'
            />
            <div
                className={`${styles.numberBtnsWrapper} ${
                    showMenu ? '' : styles.inactive
                }`}
            >
                {buttons.map((b) => (
                    <Link href={`/${b.link}`}>
                        <button
                            key={b.label}
                            className={`${styles.numberBtn} ${
                                showMenu ? styles.activeButton : styles.inactiveButton
                            }`}
                        >
                            {b.label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
