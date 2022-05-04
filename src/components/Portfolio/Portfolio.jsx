import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import React from "react";
import { useEffect, useState } from "react";
import {
  webPortfolio,
  mobilePortfolio,
  testPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([])
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "test",
      title: "Unit Test",
    },
  ];

  useEffect(()=> {

    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "test":
        setData(testPortfolio);
        break;
      default:
        setData(webPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> (
        <div className="item">
          <img
            src={d.img}
            alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
