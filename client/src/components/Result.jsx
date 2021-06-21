import React from "react";

const Result = (props) => {
    return (
        <div>
            {/* Main */}
            <div id="main">
                <section className="post">
                    {/* <img src={props.resultFilePath} alt="this is the result of logic diagram" width='500' height='500' /> */}
                    {props.resultFilePath}
                </section>
            </div>
        </div>
    );
};

export default Result;
