import React from "react";
import "../Banners/Banner.css";

const Banner = (props) => {
  const { imageClass, titulo } = props;

  return (
    <section className="bg-white container-fluid">
      <div className="row">
        <div className={`Banimg ${imageClass}`}>
          <h1 className="text-end py-4 RobotoMedio tituloh1 container text-white">
            {titulo}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;