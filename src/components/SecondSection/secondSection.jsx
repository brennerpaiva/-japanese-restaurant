import React from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";
import ImageSection2 from "../../../public/images/second-section.png";

export default function SecondSection() {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <Image src={ImageSection2} width={600} />
      </div>
      <div className={Styles.text}>
        <h1>Feita de Forma Tradicional</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <span>Ler mais sobre o preparo</span>
      </div>
    </div>
  );
}
