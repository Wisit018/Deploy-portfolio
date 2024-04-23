import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiSqllite } from "react-icons/di";
import {
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiExpress ,
} from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaWordpress, } from "react-icons/fa";
import "./TechStack.css";
import { TbBrandVite, TbBrandPython } from "react-icons/tb";



function Techstack() {
  return (
<Row className="justify-content-center align-items-center" style={{ paddingBottom: "50px" }}>
      <hr className="horizontal-line-top" />
      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <FaHtml5 />
        <hr className="horizontal-line" />
        <p className="techstack-text">Html</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <FaCss3Alt />
        <hr className="horizontal-line" />
        <p className="techstack-text">css</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <DiJavascript1 />
        <hr className="horizontal-line" />
        <p className="techstack-text">JavaScript</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiTypescript />
        <hr className="horizontal-line" />
        <p className="techstack-text">TypeScript ( basic )</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <DiReact />
        <hr className="horizontal-line" />
        <p className="techstack-text">React</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <TbBrandVite />
        <hr className="horizontal-line" />
        <p className="techstack-text">Vite</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiNextdotjs />
        <hr className="horizontal-line" />
        <p className="techstack-text">Next js</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <DiNodejs />
        <hr className="horizontal-line" />
        <p className="techstack-text">Node js</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiExpress  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Express</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiBootstrap  />
        <hr className="horizontal-line" />
        <p className="techstack-text">Bootstrap</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiTailwindcss   />
        <hr className="horizontal-line" />
        <p className="techstack-text">Tailwind CSS</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiMongodb />
        <hr className="horizontal-line" />
        <p className="techstack-text">MongoDB</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiMysql />
        <hr className="horizontal-line" />
        <p className="techstack-text">MySQL</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <DiSqllite />
        <hr className="horizontal-line" />
        <p className="techstack-text">SQLite</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <SiPostgresql />
        <hr className="horizontal-line" />
        <p className="techstack-text">PostgreSQL</p>
      </Col>



      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <TbBrandPython />
        <hr className="horizontal-line" />
        <p className="techstack-text">Python ( basic )</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <FaWordpress />
        <hr className="horizontal-line" />
        <p className="techstack-text">WordPress</p>
      </Col>

      <Col xs={6} sm={6} md={3} lg={2} xl={2} className="tech-icons">
        <TbSeo />
        <hr className="horizontal-line" />
        <p className="techstack-text">SEO WordPress </p>
      </Col>


    </Row>
  );
}

export default Techstack;
