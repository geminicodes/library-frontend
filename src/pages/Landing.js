import React from 'react';
import "../App.css";
import {Link } from "react-router-dom";


function Landing() {
      return (
        <div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
          <div id="landing">
            <div id="landing-main">
              <h1>Library Project</h1>
              <ul>
                <h3>Tech-Stack</h3>
                  <li>React.js</li>
                  <li>Apollo</li>
                  <li>GraphQL</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
              </ul>
              <Link to='/home'>
                <button>Demo</button>
              </Link>
              <div id="landing-bottom">
                <h4>portfolio project by Valentina (Val) Mekhonoshina. </h4> <br/>
                <a href="https://github.com/geminicodes/library-frontend">github code here</a>
                <a> and </a>
                <a href="https://github.com/geminicodes/library-backend">here.</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Landing;