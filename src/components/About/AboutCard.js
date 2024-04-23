import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        Hi Everyone, I am
          <i>
            <b className="purple"> Wisit Phusakul </b>
          </i>
          <br/>
          live in
          <i>
            <b className="purple"> Thailand, Bangkok. </b>
          </i>
          <br/>
          I currently work as a 
          <i>
            <b className="purple"> programmer and web developer. </b>
          </i>
          <br/>
          I graduated Faculty of Science and Technology, Department of
           
          <i>
            <b className="purple">  Information Technology from Suan Sunandha Rajabhat University Mesra. </b>
          </i>
          <br/>
          Apart from coding, some other activities that 
           
          <i>
            <b className="purple">  I love to do! </b>
          </i>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar And Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Read manga comics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is worth if you are not happy!"{" "}
          </p>

          
         
          <footer className="blockquote-footer">Wisit Phusakul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
