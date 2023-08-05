import React from "react";
import Image from "next/image";
import Style from "./styles.module.scss";
import ImageSection1 from "../../../public/images/section-1.png";

export default function FirstSection() {
  return (
    <div className={Style.container}>
      <div className={Style.text}>
        <h1>Comida Oriental</h1>
        <p>
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <button>Cardápio</button>
      </div>
      <div className={Style.image}>
        <Image src={ImageSection1} width={450} />
      </div>
    </div>
  );
}
