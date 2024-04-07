import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// cer
import cer1 from "../../Assets/Projects/cer/cer1.png";
import cer2 from "../../Assets/Projects/cer/cer2.png";
import cer3 from "../../Assets/Projects/cer/cer3.png";
import cer4 from "../../Assets/Projects/cer/cer4.png";
import cer5 from "../../Assets/Projects/cer/cer5.png";
import cer6 from "../../Assets/Projects/cer/cer6.png";
import cer7 from "../../Assets/Projects/cer/cer7.png";
import cer8 from "../../Assets/Projects/cer/cer8.png";
import cer9 from "../../Assets/Projects/cer/cer9.png";
import cer10 from "../../Assets/Projects/cer/cer10.png";
import cer11 from "../../Assets/Projects/cer/cer11.png";
import cer12 from "../../Assets/Projects/cer/cer12.jpg";
import cer13 from "../../Assets/Projects/cer/cer13.jpg";

// project
import project1 from "../../Assets/Projects/project/Accordion-learnReact.png";
import atlux168 from "../../Assets/Projects/project/atlux168.png";
import atluxerp from "../../Assets/Projects/project/atlux-erp.png";
import BlogApp from "../../Assets/Projects/project/Blog-App.png";
import bmijs from "../../Assets/Projects/project/BMI-Javascript.png";
import BMINode from "../../Assets/Projects/project/BMI-Nodejs-1.png";
import calcultorApp from "../../Assets/Projects/project/calcultor-app.png";
import Currency from "../../Assets/Projects/project/Currency-converter-API.png";
import denfah from "../../Assets/Projects/project/denfah.png";
import denfah1 from "../../Assets/Projects/project/denfah-1.png";
import denfah2 from "../../Assets/Projects/project/denfah-2.png";
import denfah3 from "../../Assets/Projects/project/denfah-3.png";
import denfahnoti from "../../Assets/Projects/project/denfah-line-noti.png";
import Dynamic from "../../Assets/Projects/project/Dynamic-dropdown-app.png";
import validation from "../../Assets/Projects/project/Form-validation-app.png";
import Learn from "../../Assets/Projects/project/html-css-javascript-LearnBorntodev.png";
import Learn1 from "../../Assets/Projects/project/html-css-js-api.png";
import hybridsport from "../../Assets/Projects/project/hybrid_sport.png";
import Carousel from "../../Assets/Projects/project/Image-Carousel-React.png";
import scroll from "../../Assets/Projects/project/Infinite-scroll-app.png";
import Learn2 from "../../Assets/Projects/project/Learn NodeJS,Express,EJS.png";
import Learn3 from "../../Assets/Projects/project/Light-Dark-Mode.png";
import Learn4 from "../../Assets/Projects/project/Light-Dark-Mode-2.png";
import Linebot from "../../Assets/Projects/project/line-chatbot.png";
import mixprint from "../../Assets/Projects/project/mixprint.png";
import Navigationapp from "../../Assets/Projects/project/Navigation-app.png";
import Paginationapp from "../../Assets/Projects/project/Pagination-app.png";
import polonext from "../../Assets/Projects/project/polonext.png";
import QuizApp from "../../Assets/Projects/project/Quiz-App.png";
import ReactVite from "../../Assets/Projects/project/React+Vite.png";
import ReactBasic from "../../Assets/Projects/project/React-Basic-1.png";
import Searchfilter from "../../Assets/Projects/project/Search-filter-app.png";
import ShoppingApp from "../../Assets/Projects/project/Shopping-app.png";
import taskApp from "../../Assets/Projects/project/task-app.png";
import TodolistApp from "../../Assets/Projects/project/Todolist-App.png";
import ViteSearch from "../../Assets/Projects/project/Vite-Search-Img-API.png";
import WeatherAPI from "../../Assets/Projects/project/Weather-API-App.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My 
          <strong className="purple">Certificate </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer1}
              isBlog={false}
              title="Basic computer skills 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: Course gathers fundamental knowledge that should be acquired before learning programming for beginners who have little to no experience using computers, up to those who are accustomed to using computers in their daily lives, both Windows and macOS users."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer2}
              isBlog={false}
              title="Intro to Expert Programming 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】 : 
              This course focuses on teaching basic programming using easily understandable languages such as JavaScript. Students will learn about variables, data manipulation, program flow control, and how to create basic programs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer3}
              isBlog={false}
              title="ChatGPT for Developers🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】 : 
              This course aims to unlock your abilities in utilizing ChatGPT in various formats, whether it's for problem-solving, bug/error resolution, documentation writing, or even team management and task organization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer4}
              isBlog={false}
              title="Modern store chatbot with Kaojao🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: In this course, we will introduce you to the use of Social Media to create work. up to your own store and setting up the Chatbot to be able to respond to customers both via Inbox and various posts, up to order management, payment notifications, and keyword analysis and various statistics that are provided completely."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer7}
              isBlog={false}
              title="Essential SQL for Everyone 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: 
              This course will introduce you to the SQL language, which is used for managing data in relational database management systems (RDBMS) and some NoSQL database systems as well. SQL is a crucial part of all data-related work, including querying data, updating data, managing database structures, and database administration. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer9}
              isBlog={false}
              title="Introduction to JavaScript 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: 
              The fundamentals of JavaScript have evolved significantly, allowing for leaps in technology. JavaScript has extended far beyond our initial perceptions, enabling the creation of innovative works across various domains, including web applications on both the front-end and back-end, as well as mobile applications. These advancements play a crucial role in global development. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer5}
              isBlog={false}
              title="Fundamental Web Dev with HTML5 & CSS3 🌻" 
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: 
              In the ( Fundamental Web Dev with HTML5 & CSS3 ) course, you will learn essential basics of HTML5 and CSS3, including introductory usage of Bootstrap."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer6}
              isBlog={false}
              title="Command Prompt 101 🌻"              
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              description="【 Details 📖】: Learn the fundamentals to become comfortable transitioning from GUI to Command Line on both Windows and macOS. This will help upgrade your skills, speed, and efficiency in your work. "
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer8}
              isBlog={false}
              title="GitHub for Developer 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: 
              Covering all the essential basics of using Git and GitHub, this course aims to open up a new world of learning in programming and version control."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer10}
              isBlog={false}
              title="Introduction to Web App with Node.js Express 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: 
              Begin developing your web application with Node.js and Express. Set up your development environment on the Cloud using tools like PROEN Cloud. Learn about template engines, routing, and how to connect to a database, such as MongoDB.
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer12}
              isBlog={false}
              title="Developing websites with React 15 Workshop (Building 15 Projects). 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer13}
              isBlog={false}
              title="Developing web applications with React (Real-World Projects). 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: Learn to develop web applications with React 18, React Router V6, and React Hooks, from beginner to real-world usage, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cer11}
              isBlog={false}
              title="Verified Certificate Of Participation 🌻"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Details 📖】: Congratulations on joining the DevLab 3 Open Access Program with rank 4764 out of 25971 participants!"
            />
          </Col>

          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
{/* project1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Accordion-learnReact 📂"              
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>
{/* project2  */}
          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={atlux168}
              isBlog={false}
              title="Website atlux168 📂" 
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Wordpress , Plesk , PHP (basic) , HTML , CSS , Elementor pro , SEO Ranking "
              description1="【 Details 📖】: Atlux 168 product trading website"
            />
          </Col>
{/* project3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atluxerp}
              isBlog={false}
              title="Atlux168-ERP 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】:  HTML , CSS , JavaScript , ReactJS , ReactIcons , NodeJS , ExpressJS , MongoDB , Mongoose , JWT , Bcrypt , Axios , Bootstrap , React-Bootstrap , React-Router-Dom , React-Icons "
              description1="【 Details 📖】: Internal management system website, login system, user level, document system, send documents, open bills, send mail, notifications"
            />
          </Col>
{/* project4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BlogApp}
              isBlog={false}
              title="BlogApp-LearnReact 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , ReactJS , ReactIcons , Bootstrap , React-Bootstarp"
              description1="【 Details 📖】: Learn to develop web applications with React 18, React Router V6, React Hook from start to actual use, Step by Step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmijs}
              isBlog={false}
              title="Website Calculator BMI-Learn Html CSS JS 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 📖】: This website helps you easily calculate your body mass index (BMI). Just enter your personal information such as gender, age, weight and height and the website will calculate your BMI and display the results along with relevant recommendations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BMINode}
              isBlog={false}
              title="Website Calculator BMI-Learn NodeJS ExpressJS 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , NodeJS , ExpressJS , Nodemon " 
              description1="【 Details 📖】: This website helps you easily calculate your body mass index (BMI). Just enter your personal information such as gender, age, weight and height and the website will calculate your BMI and display the results along with relevant recommendations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calcultorApp}
              isBlog={false}
              title="Website Calculator App React 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons"
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Currency}
              isBlog={false}
              title="Website Currency-converter-API 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons , React fetch API "
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah}
              isBlog={false}
              title="Website Denfah Printing 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Wordpress , Plesk , PHP (basic) , HTML , CSS , Elementor pro , SEO Ranking"
              description1="【 Details 📖】: Denfah printing website, website about printing media Printing business"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah1}
              isBlog={false}
              title="App Sheet : Equipment disbursement # 1 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Google Sheets , Google Form , AppSheet , AppScript , Line-notify"
              description1="【 Details 📖】: An app about disbursing loans, repaying incoming loans Internal equipment"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah3}
              isBlog={false}
              title="App Sheet : Equipment disbursement # 2 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Google Sheets , Google Form , AppSheet , AppScript , Line-notify"
              description1="【 Details 📖】: An app about disbursing loans, repaying incoming loans Internal equipment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfah2}
              isBlog={false}
              title="System for calculating the amount of leave, remaining leave days 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Google Sheets , Google Form , AppSheet , AppScript , Line-notify"
              description1="【 Details 📖】: App to check various rights Check past rights exercise history"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={denfahnoti}
              isBlog={false}
              title="AppScript : Notification job application form 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Google Sheets , Google Form  , AppScript , Line-notify"
              description1="【 Details 📖】: Job application notification system Ready to measure scores after filling out the form."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dynamic}
              isBlog={false}
              title="Learn React : Dynamic-dropdown-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons"
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={validation}
              isBlog={false}
              title="Learn-React : Form-validation-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons"
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn}
              isBlog={false}
              title="Learn : HTML CSS JavaScipt 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 📖】: Portfolio website for passing studies"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn1}
              isBlog={false}
              title="Learn : HTML CSS JavaScipt Search With API 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , Fetch API"
              description1="【 Details 📖】: Image search website with API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hybridsport}
              isBlog={false}
              title="Website : Hybrid Sport 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Wordpress , Plesk , PHP (basic) , HTML , CSS , Elementor pro , SEO Ranking "
              description1="【 Details 📖】: Website selling shirts, producing and designing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Carousel}
              isBlog={false}
              title="Learn React : Image-Carousel-React 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons , React fetch API "
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scroll}
              isBlog={false}
              title="Learn React : Infinite-scroll-API 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons , React fetch API "
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn2}
              isBlog={false}
              title="Learn : NodeJS,Express,EJS 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , NodeJS , Express , EJS"
              description1="【 Details 📖】: Web application with NodeJS and Express framework"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn3}
              isBlog={false}
              title="Learn React : Light-Dark-Mode # 1 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons  "
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Learn4}
              isBlog={false}
              title="Learn React : Light-Dark-Mode # 2 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap , ReactJS , ReactIcons  "
              description1="【 Details 📖】: Developing frontend web applications with React version 17 and React Hooks, step by step."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Linebot}
              isBlog={false}
              title="Line Chatbot : With Dialogflow 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mixprint}
              isBlog={false}
              title="Website : MixPrint 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Wordpress , Plesk , PHP (basic) , HTML , CSS , Elementor pro , SEO Ranking "
              description1="【 Details 📖】: Website selling shirts, producing and designing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Navigationapp}
              isBlog={false}
              title="Learn React : Navigation-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Paginationapp}
              isBlog={false}
              title="Learn React : Pagination-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={polonext}
              isBlog={false}
              title="Website : Polonext 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: Wordpress , Plesk , PHP (basic) , HTML , CSS , Elementor pro , SEO Ranking "
              description1="【 Details 📖】: Website selling shirts, producing and designing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="Learn React : Quiz-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactVite}
              isBlog={false}
              title="Learn : React+Vite 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactBasic}
              isBlog={false}
              title="Learn React : Basic-React 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Searchfilter}
              isBlog={false}
              title="Learn React : Search-filter With API 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingApp}
              isBlog={false}
              title="Learn React : Shopping-App 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskApp}
              isBlog={false}
              title="Learn React : Task-app 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodolistApp}
              isBlog={false}
              title="Learn React : Todolist-App 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ViteSearch}
              isBlog={false}
              title="Learn React+Vite : Search-Img-With API 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherAPI}
              isBlog={false}
              title="Learn React : Weather-API-App 📂"
              ghLink="https://github.com/Wisit018?tab=repositories"
              description="【 Tool ⚙️】: HTML , CSS , JavaScript , Bootstrap"
              description1="【 Details 】: HTML , CSS , JavaScript , ReactJS , ReactIcons"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
