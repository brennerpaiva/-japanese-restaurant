import React from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";
import FirstCardImage from "../../../public/images/ramen-de-frango.png";
import SecondCardImage from "../../../public/images/ramen-apimentado.png";
import ThirdCardImage from "../../../public/images/ramen-tradicional.png";

export default function MostPopular() {
  return (
    <div className={Styles.container}>
      <h1>Mais Populares</h1>
      <div className={Styles.cardRow}>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <Image src={FirstCardImage} width={240} />
          </div>
          <span>Ramen de Frango</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$30</span>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <Image src={SecondCardImage} width={240} />
          </div>
          <span>Ramen Apimentado</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$30</span>
        </div>
        <div className={Styles.card}>
          <div className={Styles.cardImage}>
            <Image src={ThirdCardImage} width={240} />
          </div>
          <span>Ramen Tradicional</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>R$30</span>
        </div>
      </div>
    </div>
  );
}
