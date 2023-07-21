import React from "react";
import styles from "./styles.module.scss";
import LogoImage from "../../../public/images/food-jp.png";
import Image from "next/image";

export default function Header() {
  return (
    <head className={styles.header}>
      <div className={styles.logo}>
        <Image src={LogoImage} width={157}></Image>
      </div>
      <div className={styles.options}>
        <span>Início</span>
        <span>Cardápio</span>
        <span>Sobre</span>
      </div>
      <div className={styles.button}>
        <button>Entrar</button>
      </div>
    </head>
  );
}
