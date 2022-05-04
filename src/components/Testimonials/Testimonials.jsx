import "./testimonials.scss";
import React from "react";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Clark Kent",
      title: "Reporter at Daily Planet",
      img:
        "https://www.eightieskids.com/wp-content/uploads/2018/11/INTRO1.png",
      icon: "assets/twitter.png",
      desc:
        "Nam vitae sapien eleifend, gravida mi ut, mattis elit. Vestibulum vulputate, nisi non porttitor rhoncus, lacus nunc facilisis sem, in dapibus magna ligula vel enim. Nullam arcu est, tincidunt ac ligula convallis, euismod blandit odio. Donec ut rutrum metus.",
    },
    {
      id: 2,
      name: "Bruce Wayne",
      title: "CEO at Wayne Enterprises, Inc.",
      img:
        "https://i.pinimg.com/originals/a8/b7/85/a8b785087dfb5dd449fd4794d3c1a176.jpg",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum ligula ipsum, a pharetra orci eleifend at. Vivamus placerat ex in dapibus pulvinar. In ac volutpat massa.",
      featured: true
    },
    {
      id: 3,
      name: "Selyna Kyle",
      title: "Actor",
      img:
        "https://i0.wp.com/www.respectability.org/wp-content/uploads/2018/02/Halle-Berry-800x1200.jpg?ssl=1",
      icon: "assets/linkedin.png",
      desc:
        "Maecenas tincidunt mauris sem, sed consectetur nunc commodo id. Suspendisse pretium convallis dictum. Proin eget dictum nulla. Suspendisse venenatis mauris ut magna auctor, semper sollicitudin tellus elementum.",
    }
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=> (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/arrow-right.png" className="left" alt="" />
              <img className="user"
                src={d.img}
                alt=""
              />
              <img className="right"
                src={d.icon}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))};
      </div>
    </div>
  )
}
