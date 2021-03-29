import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <div class="skills-icons">
          <img src="https://github.com/kvnchu2/home/blob/master/public/html.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/css.png?raw=true" alt="css"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/javascript.png?raw=true" alt="javascript"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/mongoDB.png?raw=true" alt="mongoDB"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/psql.jpg?raw=true" alt="psql"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/rails.png?raw=true" alt="rails"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/ruby.png?raw=true" alt="ruby"></img>
          <img src="https://github.com/kvnchu2/home/blob/master/public/sass.png?raw=true" alt="sass"></img>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
