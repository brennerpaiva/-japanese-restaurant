import React from "react";
import Styles from "./styles.module.scss";
import Image from "next/image";
import FirstProfileImage from "../../../public/images/img-profile-1.png";
import SecondProfileImage from "../../../public/images/img-profile-2.png";
import StarsImage from "../../../public/images/stars.png";

export default function Comments() {
  return (
    <div className={Styles.container}>
      <h1>Comentários</h1>
      <div className={Styles.cardRow}>
        <div className={Styles.card}>
          <Image src={FirstProfileImage} width={120} />
          <span>Daniele Almeida</span>
          <p>Ótimo serviço! Encantada com a qualidade dos pratos.</p>
          <Image src={StarsImage} width={122} />
        </div>
        <div className={Styles.card}>
          <Image src={SecondProfileImage} width={120} />
          <span>Daniele Almeida</span>
          <p>
            Não é apenas a comida excelente, o serviço torna a experiência
            especial.
          </p>
          <Image src={StarsImage} width={122} />
        </div>
      </div>
    </div>
  );
}
