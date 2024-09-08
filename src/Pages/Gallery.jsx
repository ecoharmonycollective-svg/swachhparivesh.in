import "./styles/gallery.css";
import GalleryImg from "../assets/gallery.jpg";
import GalleryContainer from "../Components/GalleryContainer";
import {
  Founder,
  Neem,
  Awareness,
  Relief,
  Swachta,
  Empowerment,
  Health,
  Blood,
  Environment,
  Wildlife,
  GauSeva,
  Yoga,
  Cultural,
  Computer,
} from "../import/gallery";
import BodyHelmet from "../Components/BodyHelmet";
import HelmetData from "../import/BodyHelmet";
const Gallery = () => {
  return (
    <>
      <BodyHelmet
        title={HelmetData.galleryPage.title}
        description={HelmetData.galleryPage.description}
        keywords={HelmetData.galleryPage.keywords}
      />
      <div className="gallery__container nav__margin">
        <img
          className="gallery__container__img"
          src={GalleryImg}
          alt="Swachh Parivesh gallery"
        />
        <div className="gallery__overlay cent">
          <div className="gallery__container__text">
            <h1>Gallery</h1>
          </div>
        </div>
      </div>
      <div className="spf-gallery">
        <GalleryContainer title="Founder's Day" Images={Founder} />
        <GalleryContainer title="Neem Tree Plantation" Images={Neem} />
        <GalleryContainer title="Awareness " Images={Awareness} />
        <GalleryContainer title="Relief  " Images={Relief} />
        <GalleryContainer title="Swachta " Images={Swachta} />
        <GalleryContainer title="Empowerment " Images={Empowerment} />
        <GalleryContainer title="Health " Images={Health} />
        <GalleryContainer title="Awareness " Images={Blood} />
        <GalleryContainer title="Environment " Images={Environment} />
        <GalleryContainer title="Wildlife " Images={Wildlife} />
        <GalleryContainer title="GauSeva " Images={GauSeva} />
        <GalleryContainer title="Yoga " Images={Yoga} />
        <GalleryContainer title="Cultural " Images={Cultural} />
        <GalleryContainer title="Computer " Images={Computer} />
      </div>
    </>
  );
};

export default Gallery;
