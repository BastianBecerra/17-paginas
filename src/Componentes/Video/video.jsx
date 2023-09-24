import { useState, useEffect } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Video = ({ videos, posters, thumbnails }) => {

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleClickThumbnail = (index) => {
    setActiveIndex(index);
    setCurrentVideo(videos[index]); // Cambiar el video al seleccionar el thumbnail
  };


  useEffect(() => {
    // Reproducir el video seleccionado
    setCurrentVideo(videos[activeIndex]);
  }, [activeIndex, videos]);



  return (
    <section id="section-video" className=" bg-white py-5">
      <div className="container">
        <div className="row">
          <h1 className="RobotoBold">Videos</h1>
          
          <div className="col-md-12">
            <div className="video-carousel">
              <Carousel className='py-5 px-2' activeIndex={activeIndex} onSelect={handleSelect} controls={false} indicators={false}>
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    <video
                      className="d-block w-100"
                      poster={posters[activeIndex]}
                      src={currentVideo}
                      controls={true}
                      playing={currentVideo}
                      onPlay={() => setCurrentVideo(currentVideo)}
                      onEnded={() =>
                        setCurrentVideo(videos[activeIndex + 1] || videos[0])
                      }
                    />
                  </CarouselItem>
                ))}
              </Carousel>
              <div className="media-thumbnails">
                {thumbnails.map((thumbnailSource, index) => (
                    <div
                      key={index}
                      className={`media-thumbnail trans ${index === activeIndex ? "active" : ""}`}
                      onClick={() => handleClickThumbnail(index)}
                    >
                      <div className="thumbnail-square">
                        <img src={thumbnailSource} alt={`Media ${index + 1}`} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Video;
