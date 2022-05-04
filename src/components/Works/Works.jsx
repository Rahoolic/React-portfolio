import "./works.scss"
import React from "react";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "https://img.icons8.com/color/344/hand-with-smartphone.png",
      title: "Mobile Application",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img:
        ""
    },
    {
      id: "2",
      icon: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/344/external-design-creative-kiranshastry-lineal-color-kiranshastry.png",
      title: "Web Design",
      desc:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      img:
        ""
    },
    {
      id: "3",
      icon: "https://img.icons8.com/external-filled-outline-wichaiwi/344/external-brand-business-process-outsourcing-filled-outline-wichaiwi.png",
      title: "Branding",
      desc:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      img:
        ""
    }
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d=> (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://cdn.tutsplus.com/cdn-cgi/image/width=360/net/uploads/legacy/307_designSite/62.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=> handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()}/>
    </div>
  );
}
