import {React, useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "./Main.css";
import Coding from "./Coding";
import Upload from "./Upload";
import Result from "./Result";
import { v4 as uuidv4 } from 'uuid';
import "../assets/css/main.css";
import "../assets/css/noscript.css";

// import "../assets/js/jquery.min.js";
// import "../assets/js/jquery.scrollex.min.js";
// import "../assets/js/jquery.scrolly.min.js";
// import "../assets/js/browser.min.js";
// import "../assets/js/breakpoints.min.js";
// import "../assets/js/util.js";
// import "../assets/js/main.js";

const Main = (props) => {
    const [resultFilePath, setResultFilePath] = useState('../images/default.jpg');
    const [loading, setLoading] = useState(false);
    const [loginId, setLoginId] = useState(uuidv4());

    const openTab = (tabName) => {
        let i, tabLinks, tabContents;
        tabContents = document.getElementsByClassName('tabContent');
        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName('tabLinks');
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].style.display = "none";
        }
        let clickedTabContent = tabName + 'Content';
        document.getElementById(clickedTabContent).style.display = "block";
        let clickedTabLink = tabName + 'Link';
        console.log(clickedTabLink);
        document.getElementById(clickedTabLink).classList.add('active');
    }

    return (
        <Router>
            <div id="wrapper" class="fade-in">
            {/* Header */}
                <div id="intro">
                    <h1>This is<br />
                    Logic Gate Generator</h1>
                    <p>A free react project developed by Software Studio Team 14, spring 2021<br />
                    that helps you to draw the logic gates in a smarter way.</p>
                    <ul className="actions">
                        <li><a href="/#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                    </ul>
                </div>

                <div>
                {/* Header */}
                    <header id="header">
                        <h1 className="logo">Logic Gate Generator</h1>
                    </header>
                </div>

                <nav id="nav">
                    <ul className="links">
                        <li><a className='tabLink' id='CodingLink' href='/#header' onClick={() => openTab('Coding')}>Coding Here</a></li>
                        <li><a className='tabLink' id='UploadLink' href='/#header' onClick={() => openTab('Upload')}>Upload .v file</a></li>
                        <li><a className='tabLink' id='ResultLink' href='/#header' onClick={() => openTab('Result')}>Result image</a></li>
                    </ul>
                </nav>

            {/* Component */}
                <div className='tabContent' id='CodingContent'>
                    <Coding userid={loginId} setLoading={setLoading} setResult={setResultFilePath} />
                </div>
                <div className='tabContent' id='UploadContent' >
                    <Upload userid={loginId} setLoading={setLoading} setResult={setResultFilePath} />
                </div>
                <div className='tabContent' id='ResultContent'>
                    <Result userid={loginId} resultFilePath={resultFilePath} />
                </div>
            {/* Footer */}
                <div id="copyright">
                    <ul>
                        <li>Logic Gate Generator</li>
                        <li>&copy; NTHU</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        </Router>
    );
};

export default Main;
