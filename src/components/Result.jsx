import React from "react";
import InlineSVG from 'svg-inline-react';

const Result = (props) => {
    return (
        <div>
            <div id="main">
                <section className="post">
                    <InlineSVG src={props.resultFilePath} />
                </section>
            </div>
        </div>
    );
};

export default Result;
