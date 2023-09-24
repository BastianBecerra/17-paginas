import React from 'react';
import '../InfoPrincipal/InfoPrincipal.css';

function InfoPrincipal({ data, listas, listasDesc2 }) { // Agrega 'listas' como parámetro

    return (
        <section className="container-fluid bg-white">
            <div className="row">
                <div className="col-12 col-md-6">
                {data?.map((img, index) => (
                    <img key={img} className="Fregadora" src={img.imagen} alt="" />
                      ))}
                </div>
                <div className="col-12 col-md-6 d-flex align-content-center flex-wrap mb-5 mb-md-0">
                    <div className="w-100 py-3">
                        {data?.map((codigo, index) => (
                            <p key={codigo} className="textcolor text-start mb-2 RobotoBold"><strong>{codigo.codigo}</strong></p>
                        ))}
                        {data?.map((titulo, index) => (
                            <div key={titulo}>
                                {titulo.titulo.split('\n').map((linea, lineaIndex) => (
                                    <h1 key={lineaIndex} className="text-start RobotoBold tituloh1 mb-2"><strong>{linea}</strong></h1>
                                ))}
                            </div>
                        ))}
                       {data?.map((desc, index) => (
                        <div key={desc} className="textcolor text-start mb-2 RobotoLigth">{desc.descripcion}<br />
                            <ul>
                                {listas.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                      ))}
                      {data?.map((descDos, index) => (
                        <p key={descDos} className="textcolor text-start mb-2 RobotoLigth"><strong>{descDos.descripcionDos}</strong></p>
                      ))}

                        {data?.map((descTres, index) => (
                            <div key={descTres} className="textcolor text-start mb-2 RobotoLigth">{descTres.descripcionTres}<br />
                                <ul>
                                    {listasDesc2.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    {data?.map((descCuatro, index) => (
                        <p key={descCuatro} className="textcolor text-start mb-2 RobotoLigth">{descCuatro.descripcionCuatro}</p>
                    ))}   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoPrincipal;