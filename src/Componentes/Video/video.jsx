import React, { useState, useEffect, useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Video = ({ videos, posters, thumbnails }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handleClickThumbnail = (index) => {
    if (index !== activeIndex) {
      pauseCurrentVideo();
      setActiveIndex(index); // Cambiamos el índice activo al hacer clic en un thumbnail
    } else {
      togglePlayPause();
    }
  };

  const togglePlayPause = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const pauseCurrentVideo = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(true);
  };

  const getVideoElement = (videoUrl, index) => {
    if (videoUrl.includes("youtube.com")) {
      return (
        <iframe
          title={`YouTube Video ${index}`}
          width="640"
          height="360"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      );
    } else {
      return (
        <video
          className={`d-block w-100 ${index === activeIndex ? "active" : ""}`}
          poster={posters[index]}
          src={videoUrl}
          controls
          ref={(el) => (videoRefs.current[index] = el)}
          onEnded={handleVideoEnded}
        />
      );
    }
  };

  return (
    <section id="section-video" className="bg-white py-5">
      <div className="container">
        <div className="row">
          <h1 className="RobotoBold">Videos</h1>

          <div className="col-md-12">
            <div className="video-carousel">
              <Carousel
                className="py-5 px-2"
                activeIndex={activeIndex}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}
              >
                {videos.map((video, index) => (
                  <CarouselItem key={index}>
                    {getVideoElement(video, index)}
                  </CarouselItem>
                ))}
              </Carousel>
              <div className="media-thumbnails">
                {thumbnails.map((thumbnailSource, index) => (
                  <div
                    key={index}
                    className={`media-thumbnail trans ${
                      index === activeIndex ? "active" : ""
                    }`}
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
