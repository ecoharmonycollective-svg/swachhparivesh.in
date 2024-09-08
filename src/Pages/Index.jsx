import "./styles/index.css";
import "./styles/splide.css";
import "@splidejs/react-splide/css";
import FocusedCard from "../Components/FocusedCard";
import { Link } from "react-router-dom";
import { founder, secretary } from "../import/founder";
import FocusedData from "../import/focused";
import Founder from "../Components/FounderCard";
import AboutImg from "../assets/aboutimg.jpg";
import Slum from "../assets/Events/work-in-slums.jpg";
import Plantation from "../assets/Events/plantation.jpg";
import Empowerment from "../assets/Gallery/Empowerment/empowerment3.jpg";
import Health from "../assets/Gallery/Health/health2.jpg";
import Relief from "../assets/Gallery/Relief/relief1.jpg";
import Awareness from "../assets/Gallery/Awareness/awareness1.jpg";
import BodyHelmet from "../Components/BodyHelmet";
import GirlsImg from "../assets/girls.jpg";
import SmallChildImg from "../assets/smallChild.jpg";
import JoinTeamImg from "../assets/Gallery/Swachta/swachta2.jpg";
import HelmetData from "../import/BodyHelmet";
export default function Home() {
  function windowTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <BodyHelmet
        title={HelmetData.indexPage.title}
        description={HelmetData.indexPage.description}
        keywords={HelmetData.indexPage.keywords}
      />
      <div className="index__container cent">
        <div className="index__content__container row">
          <div className="index__content__img__item index__img__1">
            <div className="index__content__img__overlay"></div>
            <img className="index__content__img" src={GirlsImg} alt="" />
          </div>
          <div className="index__content__item">
            <div className="index__content__box">
              <h1>
                Help us to make a difference in the lives of underprivileged
              </h1>
            </div>
            <div className="index__content__small__img__container">
              <div className="index__content__small__img__overlay"></div>
              <img
                src={SmallChildImg}
                alt="small children"
                className="index__content__small__img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="story__container cent">
        <div className="story__item__box row">
          <div className="story__item story__item__content__container cent">
            <div className="story__item__content">
              <div className="story__item__header row">
                <div className="border__left"></div>
                <div className="border__center">
                  <p>Our Story</p>
                </div>
                <div className="border__right"></div>
              </div>
              <div className="story__content__container">
                <p>
                  Swachh Parivesh Foundation is a registered trust established
                  in 2018 for the welfare of the community. The trust is a young
                  organization run by enthusiastic persons who have come
                  together for a common goal. They are from all field of life
                  and some of them are volunteering for the love of the hills.
                  The involvement implemented by the Foundation range from grass
                  root level projects to national-level programs. The trust
                  works towards empowering lives and serving to the needs of all
                  sectors of the society.
                </p>
              </div>
            </div>
          </div>
          <div className="story__item story__img__container cent">
            <img className="story__img" src={AboutImg} alt="About Img" />
          </div>
        </div>
      </div>
      <div className="mv__container cent">
        <div className="mv__main__container cent row">
          <div className="mv__item__container row">
            <div className="mv__item cent__col">
              <h2 className="mv__item__header">Our Mission</h2>
              <p className="mv__item__para">
                Our mission is to provide comprehensive education and support
                for underprivileged children/women, promote environmental
                conservation, enhance community health and livelihoods, and
                preserve national heritage, art, and culture through diverse
                initiatives and programs.
              </p>
            </div>
            <div className="mv__item cent__col">
              <h2 className="mv__item__header">Our Vision</h2>
              <p className="mv__item__para">
                Trust works towards the empowerment of the community, health,
                sanitation, environment, education, and sustainable livelihood
                to enhance the quality of life of individuals residing in our
                country.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Founder */}
      <div className="founder__container">
        <div className="founder__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Founders</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="founder__main__container cent">
          <div className="founder__items row">
            <div className="founder__card__container">
              <Founder
                name={founder.name}
                image={founder.img}
                desc={founder.desc}
                about={founder.about}
              />
            </div>
            <div className="founder__card__container">
              <Founder
                name={secretary.name}
                image={secretary.img}
                desc={secretary.desc}
                about={secretary.about}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Founder */}
      <div className="focused__container">
        <div className="focused__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Focus</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="focused__card__container row">
          {FocusedData.map((item, index) => {
            return (
              <FocusedCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
      {/* The Objective */}
      <div className="objective__container">
        <div className="objective__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            <p>Our Objectives</p>
          </div>
          <div className="border__right"></div>
        </div>
        <div className="objective__main__container cent">
          <div className="objective__content">
            <p>
              The objectives of the trust are focused on various aspects of
              education, vocational training, and environmental conservation. It
              aims to establish and maintain centers for technical, formal, and
              non-formal education, as well as provide vocational training
              opportunities, especially for women and those in need.
              Additionally, the trust is dedicated to promoting cottage
              industries, Khadi, Gaushala, and traditional handicrafts. Its
              primary focus lies in conserving ecology, wildlife, and natural
              resources, while also raising awareness about sanitation and
              providing health and medical relief where necessary. Moreover, the
              trust engages in publishing educational materials for income
              generation and managing higher and professional education
              institutes. Finally, it&apos;s committed to safeguarding national
              heritage, art, and culture, operating solely for public and
              charitable purposes.
            </p>
          </div>
        </div>
      </div>
      <div className="index__gallery__container">
        <div className="index__main__gallery__container">
          <div className="gallery__main__header row">
            <div className="border__right"></div>
            <div className="border__center">
              <p>Gallery</p>
            </div>
            <div className="border__left"></div>
          </div>
          <div className="index__gallery__card__container row">
            <img className="index__gallery__img" src={Empowerment} alt="" />
            <img className="index__gallery__img" src={Health} alt="" />
            <img className="index__gallery__img" src={Slum} alt="" />
            <img className="index__gallery__img" src={Awareness} alt="" />
            <img className="index__gallery__img" src={Relief} alt="" />
            <img className="index__gallery__img" src={Plantation} alt="" />
          </div>
          <div className="view__more__container cent">
            <Link to="/gallery" onClick={windowTop}>
              <button className="view__more__btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="journey cent">
        <div className="journey__item">
          <img className="journey__img" src={JoinTeamImg} alt="" />
          <div className="journey__overlay col cent">
            <h1 className="journey__overlay__heading">
              You Can Make A Difference <br /> In Someone&apos;s Life Donate Now
            </h1>
            <Link to="/donation">
              <button className="journey__donate">Donate Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
