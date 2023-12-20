/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ImaginAI- An application for converting CT-Scans of brain to MRI",
    description:
      "An application based on the idea of converting CT-Scans of patients to MRI using Generative AI, to prevent harmful exposure of X-rays,Magnetic waves, and reducing machinery cost",
    url: "https://github.com/arpitmathur2412",
  },
  {
    title: "StockWise- A Stock Prediction and Suggestion Application",
    description:
      "Created a Stock suggestion web-application on MERN stack, deployed on Google Cloud Platform and Docker.",
    url: "https://github.com/arpitmathur2412/GFG-HACK",
  },
  {
    title: "Network Intrusion Detection",
    description:
      "An application that detects network intrusion using Machine Learning and Deep Learning algorithms in real-time using wireshark.",
    url: "https://github.com/arpitmathur2412/Network-Intrusion-Detection",
  },
  {
    title: "Digital Disesease Detection",
    description:
      "This application identifies general 42 categories of disease in patients from their symptoms",
    url: "https://github.com/arpitmathur2412/Disease_Detection",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
