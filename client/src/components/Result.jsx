import React, { useState, useEffect } from "react";
// import './ResultTable.css';
import { Paper } from "@material-ui/core";

const Result = (props) => {
    return (
        <div>
            {/* Main */}
            <div id="main">
                <section className="post">
                    <Paper className='Result'>
                        <h1>I'm ResultTable</h1> 
                    </Paper> 
                </section>
            </div>
        </div>
    );
};

export default Result;
