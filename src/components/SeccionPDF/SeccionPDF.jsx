//Importante pero no tan necesario
import React from "react";

//Import del css para que se vea wonito
import '../SeccionPDF/SeccionPDF.css'

//import icono de react (Importante buscar bien la ruta)
import { MdDownload } from "react-icons/md";

//IMPORTACION IMAGENES
import FloorCleaningVol1 from '../../assets/img/the-co-bot-floor-cleaning-guide-vol-1-01.jpg'
import AirportsApplicationVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-airports-01.jpg'
import HealthcareApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-healthcare-01.jpg'
import LogisticsApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-logistics-01.jpg'
import RetailApplicationsVol2 from '../../assets/img/the-co-bot-floor-cleaning-guide-for-retail-01.jpg'
//

// Importacion PDFs
import CleaningGuideForAirports from '../../assets/PDF/the-co-bot-floor-cleaning-guide-for-airports.pdf';
import CleaningGuideVol1 from '../../assets/PDF/the-co-bot-floor-cleaning-guide-vol-1.pdf'
import CleaningGuideForHealthcare from '../../assets/PDF/the-co-bot-floor-cleaning-guide-for-healthcare.pdf'
import cleaningGuideForLogistics from '../../assets/PDF/the-co-bot-floor-cleaning-guide-for-logistics.pdf'
import CleaningGuideForRetail from '../../assets/PDF/the-co-bot-floor-cleaning-guide-for-retail.pdf'
//

function PDF() {

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
   };
   
   const handleDownload = (pdf) => {
    downloadFile(pdf, `${pdf}`);
   };

  return(
    <section className="container">
    
      <div className="row">
        <div className="col-12 py-5">
          <h4 className="RobotoMedio">Obtenga más información sobre cómo nuestras soluciones autónomas brindan valor en múltiples aplicaciones</h4>
        </div>
        
        <div className="col-12 col-lg py-4">
          <img className="boxImg" src={FloorCleaningVol1} alt="" />
          <p className="mt-3 RobotoLigth">Floor Cleaning Guide Vol.1</p>
          <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(CleaningGuideVol1)}><MdDownload/>PDF</button>
        </div>
        
        <div className="col-12 col-lg py-4">
          <img className="boxImg" src={AirportsApplicationVol2} alt="" />
          <p className="mt-3 RobotoLigth">Airports Applications Vol2</p>
          <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(CleaningGuideForAirports)}><MdDownload/>PDF</button>
        </div>

        <div className="col-12 col-lg py-4">
          <img className="boxImg" src={HealthcareApplicationsVol2} alt="" />
          <p className="mt-3 RobotoLigth">Healthcare Applications Vol2</p>
          <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(CleaningGuideForHealthcare)}><MdDownload/>PDF</button>
        </div>

        <div className="col-12 col-lg py-4">
          <img className="boxImg" src={LogisticsApplicationsVol2} alt="" />
          <p className="mt-3 RobotoLigth">Logistics Applications Vol2</p>
          <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(cleaningGuideForLogistics)}><MdDownload/>PDF</button>
        </div>
        
        <div className="col-12 col-lg py-4">
          <img className="boxImg" src={RetailApplicationsVol2} alt="" />
          <p className="mt-3 RobotoLigth">Retail Applications Vol2</p>
          <button className="btn btn-link text-white btn-linea" onClick={() => handleDownload(CleaningGuideForRetail)}><MdDownload/>PDF</button>
        </div>
      </div>
    </section>
  )
}

export default PDF;