import "./styles/gallery.css";
import Media from "../import/media";
import Press from "../assets/press.jpg";
import GalleryContainer from "../Components/GalleryContainer";
import BodyHelmet from "../Components/BodyHelmet";
import HelmetData from "../import/BodyHelmet";
const Gallery = () => {
  return (
    <>
      <BodyHelmet
        title={HelmetData.mediaPage.title}
        description={HelmetData.mediaPage.description}
        keywords={HelmetData.mediaPage.keywords}
      />
      <div className="media__banner nav__margin">
        <img className="media__banner__img" src={Press} alt="Press" />
        <div className="media__overlay cent">
          <div className="media__banner__text">
            <h1>Media On Us</h1>
          </div>
        </div>
      </div>
      <GalleryContainer title="" Images={Media} />
    </>
  );
};

export default Gallery;
