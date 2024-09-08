import { Link } from "react-router-dom";
import "./styles/events.css";

const Events = () => {
  return (
    <>
      <div className="event-page">
        <div className="event">
          <img src="./assets/images/Events/plantation.jpg" alt="Event 1" />
          <div className="event-content">
            <h2 className="event-title">Plantation</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/animal-rescue.jpg" alt="Event 2" />
          <div className="event-content">
            <h2 className="event-title">Resque of Animals</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/bird-rescue.jpg" alt="Event 3" />
          <div className="event-content">
            <h2 className="event-title">Resque of Birds</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/neem-ka-ped.jpg" alt="Event 1" />
          <div className="event-content">
            <h2 className="event-title">Special drive- mission नीम का पेड़</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/sanitation.jpg" alt="Event 2" />
          <div className="event-content">
            <h2 className="event-title">Sanitaion</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/save-tree.jpg" alt="Event 3" />
          <div className="event-content">
            <h2 className="event-title">Save Trees</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img
            src="./assets/images/Events/women-empowerment.jpg"
            alt="Event 1"
          />
          <div className="event-content">
            <h2 className="event-title">Women Empowerment</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
        <div className="event">
          <img src="./assets/images/Events/work-in-slums.jpg" alt="Event 2" />
          <div className="event-content">
            <h2 className="event-title">Working in Slums</h2>
            <Link to="/Gallery">View in Gallery&#8594;</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
