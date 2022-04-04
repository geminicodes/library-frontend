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
              <h1>Library Project (Version-1)</h1>
              <ul>
                <h3>Tech-Stack</h3>
                  <li>React.js</li>
                  <li>Apollo</li>
                  <li>GraphQL</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
              </ul>
              <ul>
                <h3>Functionlity</h3>
                  <li>Add author to library</li>
                  <li>Add book to library</li>
                  <li>Scroll-through books</li>
                  <li>Get a book</li>
              </ul>
              <ul>
                <h3>Version-2 functionality...</h3>
                  <li>Dark mode</li>
                  <li>Form validation</li>
                  <li>Delete Book and Author</li>
              </ul>
              <Link to='/home'>
                <button>Demo</button>
              </Link>
            </div>
          </div>
        </div>
      );
}

export default Landing;