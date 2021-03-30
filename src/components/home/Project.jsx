import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import ProjectCard from "./ProjectCard.jsx"

const Project = ({ heading, username, length, specfic }) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div id="projects">
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/gitgood.jpeg?raw=true"} imagealt={"gitgood"} description={"A GitHub timeline app created with React, served on Webpack Devserver that proxies requests to an Express backend."} githubrepo={"https://github.com/kvnchu2/GitGood"}/>
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/homepage.png?raw=true"} imagealt={"kigogo"} description={"Group midterm project at Lighthouse Labs. 'Kigogo' is a modern buy and sell app built with Node.js, Express and PostgreSQL. Features include messaging system and admin permissions."} githubrepo={"https://github.com/kvnchu2/buy-sell-app"}/>
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/jungle-rails.jpeg?raw=true"} imagealt={"jungle-rails"} description={"Added various features to this e-commerce app built with Ruby on Rails"} githubrepo={"https://github.com/kvnchu2/jungle-rails"}/>
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/scheduler.jpg?raw=true"} imagealt={"scheduler-app"} description={"Web app that allows users to create, edit and delete interview appointments"} githubrepo={"https://github.com/kvnchu2/Scheduler"}/>
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/tinyapp.jpeg?raw=true"} imagealt={"tinyapp"} description={"Full-stack app with login feature that allows users to save and access URLs. Built with Node, Express, MongoDB."} githubrepo={"https://github.com/kvnchu2/tinyapp"}/>
          <ProjectCard screenshot={"https://github.com/kvnchu2/home/blob/master/public/tweeter.png?raw=true"} imagealt={"tweeter-app"} description={"A twitter clone project, to help students gain front-end dev chops. Starter (incomplete) code."} githubrepo={"https://github.com/kvnchu2/tweeter"}/>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
