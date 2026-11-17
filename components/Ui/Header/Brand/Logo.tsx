import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <Image
        src="/imgs/LogoLight.svg"
        width={71}
        height={32}
        alt="Anil Panthi"
        className={styles.logoLight}
        priority
      />
      <Image
        src="/imgs/LogoDark.svg"
        width={71}
        height={32}
        alt="Anil Panthi"
        className={styles.logoDark}
        priority
      />
    </div>
  );
}
