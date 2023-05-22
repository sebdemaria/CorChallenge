import Image from "next/image";

import { CorLogo } from "public/assets";

import styles from "styles/componentStyles/Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Image alt="cor logo" className={styles.headerLogo} src={CorLogo} />
        </header>
    );
};
