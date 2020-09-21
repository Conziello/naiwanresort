import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Feel free to venture our hotel services with free cocktails onboard.I promise you will like it.",
      },
      {
        icon: <FaHiking />,
        title: " Nature walk",
        info:
          "Feel free to venture our hotel services with free cocktails onboard.I promise you will like it.",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Feel free to venture our hotel services with free cocktails onboard.I promise you will like it.",
      },
      {
        icon: <FaBeer />,
        title: "Tasty Drinks",
        info:
          "Feel free to venture our hotel services with free cocktails onboard.I promise you will like it.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
