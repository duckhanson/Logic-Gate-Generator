import React, { useState, useEffect } from 'react';
import './CodeTable.css';

const CodeTable = (props) => {

    return (
        // <div className='editorContainer'>
        //     <div className='editorTitle'>
        //         Verilog
        //     </div>
        // </div>

        <div>
            <form autoComplete='on'>
                <div className='form-group'>
                    <div class="form-group">
                        <textarea class="form-control" rows='28' 
                        placeholder="What would you want to Generate ?
                        ---------------------------------------------
                        Example:
                        c=a&b
                        d=b|c
                        u=c&d
                        ---------------------------------------------
                        Press and Play !
                        "></textarea>
                    </div>
                </div>
            </form>

            {/* <Button className='submitBtn' variant="outline-dark" id='submitBtn'>Submit <ArrowForwardIosIcon /> </Button> */}
        </div>
    );
}
 
export default CodeTable;