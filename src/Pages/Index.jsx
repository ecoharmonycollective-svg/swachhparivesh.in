import "./styles/index.css";
import "./styles/splide.css";
import "@splidejs/react-splide/css";
import FocusedCard from "../Components/FocusedCard";
import { Link } from "react-router-dom";
import { founder, secretary } from "../import/founder";
import FocusedData from "../import/focused";
import Founder from "../Components/FounderCard";
import BodyHelmet from "../Components/BodyHelmet";
import HelmetData from "../import/BodyHelmet";

// Images moved to /public/assets/ folder
// Note: Images from public folder are referenced directly without imports

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
            <img
              className="index__content__img"
              src="/assets/green_background.jpg"
              alt="Sustainable Living"
            />
          </div>
          <div className="index__content__item">
            <div className="index__content__box">
              <h1>
                Sustainable Living Starts Here - Eco-Friendly Products for Your Home & Office
              </h1>
            </div>
            <div className="index__content__small__img__container">
              <div className="index__content__small__img__overlay"></div>
              <img
                src="/assets/desk_with-laptop.jpg"
                alt="Green initiatives"
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
                  Our Story
                </div>
                <div className="border__right"></div>
              </div>
              <div className="story__content__container">
                <p>
                  EcoHarmonyCollective was founded with a simple mission: to make sustainable living accessible and affordable for everyone. We believe that small changes in our daily lives can create a significant positive impact on our planet. Our carefully curated collection of eco-friendly products combines functionality, style, and environmental responsibility. From recycled materials to energy-efficient solutions, every product we offer is selected with the earth in mind. Join us in creating a greener future, one conscious choice at a time.
                </p>
              </div>
            </div>
          </div>
          <div className="story__item story__img__container cent">
            <img
              src="/assets/EcoHarmony_Collective.jpg"
              alt="About EcoHarmonyCollective"
              className="story__img"
            />
          </div>
        </div>
      </div>
      <div className="mv__container cent">
        <div className="mv__main__container cent row">
          <div className="mv__item__container row">
            <div className="mv__item cent__col">
              <h2 className="mv__item__header">Our Mission</h2>
              <p className="mv__item__para">
                To provide high-quality, eco-friendly products that empower individuals and businesses to make sustainable choices. We're committed to reducing environmental impact through innovative, responsibly-sourced home and office solutions that don't compromise on quality or design.
              </p>
            </div>
            <div className="mv__item cent__col">
              <h2 className="mv__item__header">Our Vision</h2>
              <p className="mv__item__para">
                A world where sustainable living is the norm, not the exception. We envision homes and workplaces filled with products that harmonize with nature, promoting wellness, reducing waste, and inspiring others to join the green movement for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Team */}
      <div className="founder__container">
        <div className="founder__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            Our Team
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
      {/* Team */}
      <div className="focused__container">
        <div className="focused__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            Product Categories
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
      {/* Product Benefits */}
      <div className="objective__container">
        <div className="objective__header__container row">
          <div className="border__left"></div>
          <div className="border__center">
            Why Choose Eco-Friendly Products?
          </div>
          <div className="border__right"></div>
        </div>
        <div className="objective__main__container cent">
          <div className="objective__content">
            <p>
              Choosing eco-friendly products isn't just good for the planet—it's good for you too. Our products are made from sustainable, non-toxic materials that are safer for your family and workspace. By using recycled and renewable resources, we help reduce landfill waste and carbon emissions. Energy-efficient solutions lower your utility bills while minimizing environmental impact. Each purchase supports ethical manufacturing practices and fair labor standards. Our biodegradable and compostable options break down naturally, leaving no harmful residue. From bamboo office supplies to solar-powered accessories, organic textiles to zero-waste packaging—every item is thoughtfully designed to enhance your life while protecting our planet. Make the switch to sustainable living and experience the perfect harmony between modern convenience and environmental responsibility.
            </p>
          </div>
        </div>
      </div>
      <div className="index__gallery__container">
        <div className="index__main__gallery__container">
          <div className="gallery__main__header row">
            <div className="border__right"></div>
            <div className="border__center">
              Product Gallery
            </div>
            <div className="border__left"></div>
          </div>
          <div className="index__gallery__card__container row">
            <img
              src="/assets/worker_carry.jpg"
              alt="Eco Products"
              className="index__gallery__img"
            />
            <img
              src="/assets/istockphoto-2197568960-2048x2048.jpg"
              alt="Sustainable Solutions"
              className="index__gallery__img"
            />
            <img
              src="/assets/istockphoto-2175448985-2048x2048.jpg"
              alt="Green Office"
              className="index__gallery__img"
            />
            <img
              src="/assets/green_background.jpg"
              alt="Natural Materials"
              className="index__gallery__img"
            />
            <img
              src="/assets/desk_with-laptop.jpg"
              alt="Recycled Products"
              className="index__gallery__img"
            />
            <img
              src="/assets/EcoHarmony_Collective.jpg"
              alt="Energy Efficiency"
              className="index__gallery__img"
            />
          </div>
          <div className="view__more__container cent">
            <Link onClick={windowTop} to="/gallery">
              <button className="view__more__btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="journey cent">
        <div className="journey__item">
          <img
            src="/assets/desk_with-laptop.jpg"
            alt="Join our green movement"
            className="journey__img"
          />
          <div className="journey__overlay col cent">
            <h1 className="journey__overlay__heading">
              Start Your Sustainable Journey Today - Shop Eco-Friendly Now
            </h1>
            <Link to="/donation">
              <button className="journey__donate">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
