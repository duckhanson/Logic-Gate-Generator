import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { Button, Hidden } from '@material-ui/core'
import { Route } from "react-router";


import './WorkPage.css';
import ResultTable from './ResultTable';
import FloatingActionButtonZoom from './Tabs';

const WorkPage = (props) => {
    
    

    return (
        <div className='WorkPage'>
            <div className='Header'>
                <Button id='HomeBtn' variant="outlined" className='HomeIcon' component={Link} to="/"><h1><FontAwesomeIcon icon={faDove} /></h1></Button> 
                <h1 className='HeaderName RWD-Height-L'>Logic Gate Generator</h1>
                <h1 className='HeaderName RWD-Height-S'>Logic Gate Gen</h1>
                <hr className='Headerline'/>
            </div>
            <div className='CodeArea'>
                <Route exact path="/WorkPage" component={FloatingActionButtonZoom} />
            </div>
            <Hidden smDown='true'>
                <ResultTable className='ResultTable' />
            </Hidden>
            <div className='Footer'>
                <hr />
                <footer>@NTHU Logic Gate Generator.</footer>
            </div>
        </div>
    );
}
 
export default WorkPage;