import React from "react";
import defaultImg from '../images/default.jpg';

const Result = (props) => {
    return (
        <div>
            {/* Main */}
            <div id="main">
                <section className="post">
                    <img src={defaultImg} alt="this is the result of logic diagram" width='500' height='500' />
                </section>
            </div>
        </div>
    );
};

export default Result;
