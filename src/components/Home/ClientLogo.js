import React from "react";

import * as styles from "./Home.module.css";

const ClientLogo = ({ image }) => {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.logo} src={image} alt="Minzor's Client" />
    </div>
  );
};

export default ClientLogo;
