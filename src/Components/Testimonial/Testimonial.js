import React, { useRef } from "react";
import Title from "../Title/Title";
import "./Testimonial.css";
import next_icon from "../../assetes/next-icon.png";
import back_icon from "../../assetes/back-icon.png";
import user_1 from "../../assetes/user-1.png";
import user_2 from "../../assetes/user-2.png";
import user_3 from "../../assetes/user-3.png";
import user_4 from "../../assetes/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx <0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="container">
      <Title subtitle="TESTIMONIALS" title="What Student Says" />
      <div className="testimonials ">
        <img
          src={next_icon}
          alt="nexticon"
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={back_icon}
          alt="backicon"
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="user1" />
                  <div>
                    <h3>William Jackson 1</h3>
                    <span>Edusity ,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="user2" />
                  <div>
                    <h3>William Jackson 2</h3>
                    <span>Edusity ,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="user3" />
                  <div>
                    <h3>William Jackson 3</h3>
                    <span>Edusity ,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="user4" />
                  <div>
                    <h3>William Jackson 4</h3>
                    <span>Edusity ,USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
