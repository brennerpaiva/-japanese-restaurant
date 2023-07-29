import React from "react";
import Style from "./styles.module.scss";
import Image from "next/image";
import LogoImage from "../../../public/images/food-jp.png";

export default function Footer() {
  return (
    <div className={Style.container}>
      <footer className={Style.footer}>
        <div className={Style.logo}>
          <Image src={LogoImage} width={157} />
        </div>
        <div className={Style.contact}>
          <h3>Contato</h3>
          <span>+55 21 99999-9999</span>
          <span>email@gmail.com</span>
        </div>
        <div className={Style.about}>
          <h3>Sobre nós</h3>
          <span>Menu</span>
          <span>Valores</span>
          <span>Página principal</span>
        </div>
        <div className={Style.services}>
          <h3>Serviços</h3>
          <span>Entrega</span>
          <span>Retirada</span>
        </div>
      </footer>
    </div>
  );
}
