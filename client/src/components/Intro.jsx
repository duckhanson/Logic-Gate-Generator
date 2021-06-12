import { React } from "react";


const Intro = (props) => {
    return (
        <div id="intro">
            <h1>This is<br />
            Logic Gate Generator</h1>
            <p>A free react project developed by Software Studio Team 14, spring 2021<br />
            that helps you to draw the logic gates in a smarter way.</p>
            <ul className="actions">
                <li><a href="/Coding#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
        </div>
    );
};

export default Intro;
