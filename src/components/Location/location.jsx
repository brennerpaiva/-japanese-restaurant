import React from "react";
import Styles from "./styles.module.scss";
import Image from "next/image";
import MapImage from "../../../public/images/map.png";
import MapIcon from "../../../public/images/map-icon.png";

export default function Location() {
  return (
    <div className={Styles.container}>
      <h1>Localização</h1>
      <div className={Styles.location}>
        <Image src={MapImage} />
        <div className={Styles.input}>
          <Image src={MapIcon} width={30} />
          <input type="text" placeholder="Localização para entrega" />
          <button>Buscar</button>
        </div>
      </div>
    </div>
  );
}
