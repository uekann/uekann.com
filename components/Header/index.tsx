import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.css";



const Header = () => (
    <div className={styles.header}>
        <div className={styles.title}>
            {/* <p>portfolio of</p>
            <h1>uekann</h1> */}
            <Link href="/">
                <Image src="/title_logo.svg" alt="uekann" width={434} height={109} />
            </Link>
        </div>
        <div className={styles.contact}>
            <Link href="https://www.instagram.com/uekan8">
                <Image src="/sns/Instagram.svg" alt="Instagram" width={37} height={37} className={styles.left_image} />
            </Link>
            <Link href="https://github.com/uekann">
                <Image src="/sns/GitHub.svg" alt="GitHub" width={37} height={37} className={styles.center_image} />
            </Link>
            <Link href="https://zenn.dev/uekann">
                <Image src="/sns/Zenn.svg" alt="Zenn" width={37} height={37} className={styles.right_image} />
            </Link>
        </div>
    </ div>
);

export default Header;
