import React from "react";

export default function ProjectCard(props) {


  return (
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
                <img class="project-screenshot" src={props.screenshot} alt={props.imagealt}></img>
                <a href={props.githubrepo}>
                  <div class="project-window__hover">
                    <i class="fas fa-external-link-alt fa-2x" aria-hidden="true"></i>
                    <span>View GitHub Repo</span>
                  </div>
                </a>
              </div>
            </div>
            <p class="project-description">{props.description}</p>
    </div>
  );
};