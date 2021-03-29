import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div id="projects">

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-typecraft">
                <img class="project-screenshot" src="https://github.com/kvnchu2/home/blob/master/public/gitgood.jpeg?raw=true" alt="gitgood"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">A typing speed game built using React and Bootstrap on the frontend, and ExpressJS on the backend. The database used is PostgreSQL. The game has live chat functionality between online users. It uses the Google Maps API to show top user locations on a map, and uses a random text generator API to display sentences for the game in realtime.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-jungle">
                <img class="project-screenshot" src="https://github.com/kvnchu2/home/blob/master/public/homepage.png?raw=true" alt="kigogo"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">An online ecommerce store built with Ruby on Rails, using the Model-View-Controller, RESTful design patterns, OOP design principles, and Active Record. SQLite was used as the RDBMS, and user authentication functionality was implemented.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-tinyapp">
                <img class="project-screenshot" src="./public/images/tiny-app-pic.png" alt="tiny-app"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">A full stack web application built with Node and Express that allows users to
              shorten long URLs. This application creates and utilizes cookies using cookie-session, as well as password
              encryption using bcrypt. The frontend was designed using Bootstrap.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-scheduler">
                <img class="project-screenshot" src="./public/images/scheduler-app-pic.png" alt="scheduler-app"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">A React based web application that allows users to book/modify/delete appointments
              with an interviewer of their choice. Storybook was used to create components. Jest and Cypress were used for
              unit and integration testing. Deployed using Netlify.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-amazon">
                <img class="project-screenshot" src="./public/images/amazon-app-pic.png" alt="amazon-app"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">Front-end of Amazon built using React. Deployed using Google Firebase.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-tweeter">
                <img class="project-screenshot" src="./public/images/tweeter-app-pic.png" alt="tweeter-app"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">A single-page Twitter clone that allows users to create and post new tweets. HTML,
              CSS, JS, jQuery and AJAX used for a responsive frontend design, with Node, Express and MongoDB used for the
              backend.</p>
          </div>

          <div class="each-project-top-container">
            <div class="project-window">
              <div class="top-row">
                <div class="top-row__circles">
                  <i class="fas fa-circle fa-sm" style={{color: "red"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "yellow"}} aria-hidden="true"></i>
                  <i class="fas fa-circle fa-sm" style={{color: "green"}} aria-hidden="true"></i>
                </div>
                <div class="top-row__search">
                </div>
                <div class="top-row__menu">
                  <i class="fas fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              <div class="project-window__content project-link-sneek">
                <img class="project-screenshot" src="./public/images/sneek-pic.png" alt="sneek-app"></img>
                <div class="project-window__hover">
                  <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                  <span>View GitHub Repo</span>
                </div>
              </div>
            </div>
            <p class="project-description">A sneaker store site that allows users to buy different sneakers and send messages
              to the seller. PostgreSQL was used as the RDBMS with Node.js for the backend. The frontend was created using
              Javascript, jQuery, ejs, and CSS.</p>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Project;
