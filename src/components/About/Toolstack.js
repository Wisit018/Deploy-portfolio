import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiDiscord ,
  SiVercel,
  SiWindows,
  SiGooglesheets,
  SiGoogleforms,
  SiGoogleappsscript,
  SiGooglebard,
  SiFigma,
  SiPlesk ,
  SiGoogleslides ,
  SiDialogflow ,
} from "react-icons/si";
import "./Toolstack.css";
import { IoNotificationsCircle } from "react-icons/io5";
import { VscCopilot } from "react-icons/vsc";
import { FaGithub,FaUbuntu  } from "react-icons/fa";



function Toolstack() {
  const logo = require('../../Assets/chatgpt.png'); 
  return (
<Row className="justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
        <hr className="horizontal-line-top" />
      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiWindows  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Windows</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiVisualstudiocode />
        <hr className="horizontal-line" />
        <p className="techstack-text">Visual Studio Code</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiPostman />
        <hr className="horizontal-line" />
        <p className="techstack-text">Postman</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiDiscord  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Discord</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiVercel/>
        <hr className="horizontal-line" />
        <p className="techstack-text">Vercel</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <FaGithub />
        <hr className="horizontal-line" />
        <p className="techstack-text">GitHub</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiGooglesheets />
        <hr className="horizontal-line" />
        <p className="techstack-text">Google Sheet <br></br> ( App Script )</p>
        
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
      <SiGoogleforms />
        <hr className="horizontal-line" />
        <p className="techstack-text">Google Form <br></br> ( App Script ) </p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
      <SiGoogleslides  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Google Slide <br></br> ( App Script )</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
      <SiGoogleappsscript />
        <hr className="horizontal-line" />
        <p className="techstack-text">Google Apps Script</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <IoNotificationsCircle />
        <hr className="horizontal-line" />
        <p className="techstack-text">LINE Notify</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiDialogflow  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Dialogflow</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        {/* <img src="{logo_chatgpt}"></img> */}
        <img src={logo} width={'70px'} height={'70px'} alt="chatgpt"/>
        <hr className="horizontal-line" />
        <p className="techstack-text">ChatGPT</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiGooglebard  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Bard | Gemini</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiFigma />
        <hr className="horizontal-line" />
        <p className="techstack-text">Figma</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <VscCopilot />
        <hr className="horizontal-line" />
        <p className="techstack-text">GitHub Copilot</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiPlesk  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Plesk Panel</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <FaUbuntu />
        <hr className="horizontal-line" />
        <p className="techstack-text">Ubuntu OS</p>
      </Col>


      
    </Row>
  );
}

export default Toolstack;
