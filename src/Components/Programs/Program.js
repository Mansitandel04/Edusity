import React from "react";
import "./Program.css";
import program1 from "../../assetes/program-1.png";
import program2 from "../../assetes/program-2.png";
import program3 from "../../assetes/program-3.png";
import program_icon_1 from "../../assetes/program-icon-1.png";
import program_icon_2 from "../../assetes/program-icon-2.png";
import program_icon_3 from "../../assetes/program-icon-3.png";
import Title from "../Title/Title";

const Program = () => {
  return (
    <>
    <Title  subtitle="our program" title="What we offer"/>
    <div className="programs container">
      <div className="program">
        <img src={program1} alt="pro1" />
        <div className="caption">
          <img src={program_icon_1} alt=""/>
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program2} alt="pro2" />
        <div className="caption">
          <img src={program_icon_2} alt=""/>
          <p>Masters Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program3} alt="pro3" />
        <div className="caption">
          <img src={program_icon_3} alt=""/>
            <p>Post Graduation</p>
        </div>
      </div>
    </div></>
  );
};

export default Program;
