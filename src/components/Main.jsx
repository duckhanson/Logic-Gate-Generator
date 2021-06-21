import {React, useEffect, useState} from "react";
import Coding from "./Coding";
import Upload from "./Upload";
import Result from "./Result";
import { v4 as uuidv4 } from 'uuid';
import "../assets/css/main.css";
import "../assets/css/noscript.css";
// import defaultImg from '../images/0.svg';
// const defaultImg = <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:s="https://github.com/nturley/netlistsvg" width="390" height="369"><style>svg {stroke:#000;fill:none;}text {  fill:#000;  stroke:none;  font-size:10px;  font-weight: bold;  font-family: "Courier New", monospace;}.nodelabel {  text-anchor: middle;}.inputPortLabel {  text-anchor: end;}.splitjoinBody {  fill:#000;}</style><g s:type="and" transform="translate(210,34.5)" s:width="30" s:height="25" id="cell_$and$../data/0.v:0$4">  <s:alias val="$and"/>  <s:alias val="$logic_and"/>  <s:alias val="$_AND_"/>  <path d="M0,0 L0,25 L15,25 A15 12.5 0 0 0 15,0 Z" class="cell_$and$../data/0.v:0$4"/>  <g s:x="0" s:y="5" s:pid="A"/>  <g s:x="0" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="and" transform="translate(143,27)" s:width="30" s:height="25" id="cell_$and$../data/0.v:6$2">  <s:alias val="$and"/>  <s:alias val="$logic_and"/>  <s:alias val="$_AND_"/>  <path d="M0,0 L0,25 L15,25 A15 12.5 0 0 0 15,0 Z" class="cell_$and$../data/0.v:6$2"/>  <g s:x="0" s:y="5" s:pid="A"/>  <g s:x="0" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="not" transform="translate(77,77)" s:width="30" s:height="20" id="cell_$logic_not$../data/0.v:5$1">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" class="cell_$logic_not$../data/0.v:5$1"/>  <circle cx="23" cy="10" r="3" class="cell_$logic_not$../data/0.v:5$1"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="not" transform="translate(279,157)" s:width="30" s:height="20" id="cell_$not$../data/0.v:10$8">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" class="cell_$not$../data/0.v:10$8"/>  <circle cx="23" cy="10" r="3" class="cell_$not$../data/0.v:10$8"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="not" transform="translate(279,37)" s:width="30" s:height="20" id="cell_$not$../data/0.v:8$5">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" class="cell_$not$../data/0.v:8$5"/>  <circle cx="23" cy="10" r="3" class="cell_$not$../data/0.v:8$5"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="or" transform="translate(210,154.5)" s:width="30" s:height="25" id="cell_$or$../data/0.v:0$7">  <s:alias val="$or"/>  <s:alias val="$logic_or"/>  <s:alias val="$_OR_"/>  <path d="M0,25 L0,25 L15,25 A15 12.5 0 0 0 15,0 L0,0" class="cell_$or$../data/0.v:0$7"/>  <path d="M0,0 A30 25 0 0 1 0,25" class="cell_$or$../data/0.v:0$7"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="or" transform="translate(143,147)" s:width="30" s:height="25" id="cell_$or$../data/0.v:7$3">  <s:alias val="$or"/>  <s:alias val="$logic_or"/>  <s:alias val="$_OR_"/>  <path d="M0,25 L0,25 L15,25 A15 12.5 0 0 0 15,0 L0,0" class="cell_$or$../data/0.v:7$3"/>  <path d="M0,0 A30 25 0 0 1 0,25" class="cell_$or$../data/0.v:7$3"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="reduce_nxor" transform="translate(275,307)" s:width="33" s:height="25" id="cell_$xnor$../data/0.v:11$9">  <s:alias val="$xnor"/>  <s:alias val="$reduce_xnor"/>  <s:alias val="$_XNOR_"/>  <path d="M3,0 A30 25 0 0 1 3,25 A30 25 0 0 0 33,12.5 A30 25 0 0 0 3,0" class="cell_$xnor$../data/0.v:11$9"/>  <path d="M0,0 A30 25 0 0 1 0,25" class="cell_$xnor$../data/0.v:11$9"/>  <circle cx="35" cy="12.5" r="3" class="cell_$xnor$../data/0.v:11$9"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="38" s:y="12.5" s:pid="Y"/></g><g s:type="reduce_xor" transform="translate(142,277)" s:width="33" s:height="25" id="cell_$xor$../data/0.v:9$6">  <s:alias val="$xor"/>  <s:alias val="$reduce_xor"/>  <s:alias val="$_XOR_"/>  <path d="M3,0 A30 25 0 0 1 3,25 A30 25 0 0 0 33,12.5 A30 25 0 0 0 3,0" class="cell_$xor$../data/0.v:9$6"/>  <path d="M0,0 A30 25 0 0 1 0,25" class="cell_$xor$../data/0.v:9$6"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="33" s:y="12.5" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,22)" s:width="30" s:height="20" id="cell_a">  <text x="15" y="-4" class="nodelabel cell_a" s:attribute="ref">a</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_a"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(12,77)" s:width="30" s:height="20" id="cell_b">  <text x="15" y="-4" class="nodelabel cell_b" s:attribute="ref">b</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_b"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,142)" s:width="30" s:height="20" id="cell_c">  <text x="15" y="-4" class="nodelabel cell_c" s:attribute="ref">c</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_c"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,207)" s:width="30" s:height="20" id="cell_d">  <text x="15" y="-4" class="nodelabel cell_d" s:attribute="ref">d</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_d"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,272)" s:width="30" s:height="20" id="cell_e">  <text x="15" y="-4" class="nodelabel cell_e" s:attribute="ref">e</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_e"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,337)" s:width="30" s:height="20" id="cell_f">  <text x="15" y="-4" class="nodelabel cell_f" s:attribute="ref">f</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" class="cell_f"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="outputExt" transform="translate(348,157)" s:width="30" s:height="20" id="cell_out1">  <text x="15" y="-4" class="nodelabel cell_out1" s:attribute="ref">out1</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" class="cell_out1"/>  <g s:x="0" s:y="10" s:pid="A"/></g><g s:type="outputExt" transform="translate(348,309.5)" s:width="30" s:height="20" id="cell_out2">  <text x="15" y="-4" class="nodelabel cell_out2" s:attribute="ref">out2</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" class="cell_out2"/>  <g s:x="0" s:y="10" s:pid="A"/></g><g s:type="outputExt" transform="translate(348,37)" s:width="30" s:height="20" id="cell_tmp4">  <text x="15" y="-4" class="nodelabel cell_tmp4" s:attribute="ref">tmp4</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" class="cell_tmp4"/>  <g s:x="0" s:y="10" s:pid="A"/></g><line x1="173" x2="210" y1="39.5" y2="39.5" class="net_11"/><line x1="173" x2="185" y1="159.5" y2="159.5" class="net_12"/><line x1="185" x2="185" y1="159.5" y2="54.5" class="net_12"/><circle cx="185" cy="159.5" r="2" style="fill:#000" class="net_12"/><line x1="185" x2="210" y1="54.5" y2="54.5" class="net_12"/><line x1="173" x2="213" y1="159.5" y2="159.5" class="net_12"/><line x1="105" x2="143" y1="32" y2="32" class="net_2"/><line x1="102" x2="117" y1="87" y2="87" class="net_14"/><line x1="117" x2="117" y1="87" y2="47" class="net_14"/><line x1="117" x2="143" y1="47" y2="47" class="net_14"/><line x1="40" x2="77" y1="87" y2="87" class="net_3"/><line x1="240" x2="279" y1="167" y2="167" class="net_15"/><line x1="240" x2="279" y1="47" y2="47" class="net_13"/><line x1="175" x2="185" y1="289.5" y2="289.5" class="net_16"/><line x1="185" x2="185" y1="289.5" y2="174.5" class="net_16"/><line x1="185" x2="213" y1="174.5" y2="174.5" class="net_16"/><line x1="105" x2="146" y1="152" y2="152" class="net_4"/><line x1="105" x2="117" y1="217" y2="217" class="net_5"/><line x1="117" x2="117" y1="217" y2="167" class="net_5"/><line x1="117" x2="146" y1="167" y2="167" class="net_5"/><line x1="105" x2="127" y1="282" y2="282" class="net_6"/><line x1="127" x2="127" y1="282" y2="312" class="net_6"/><circle cx="127" cy="282" r="2" style="fill:#000" class="net_6"/><line x1="127" x2="278" y1="312" y2="312" class="net_6"/><line x1="105" x2="145" y1="282" y2="282" class="net_6"/><line x1="105" x2="250" y1="347" y2="347" class="net_7"/><line x1="250" x2="250" y1="347" y2="327" class="net_7"/><line x1="250" x2="278" y1="327" y2="327" class="net_7"/><line x1="105" x2="117" y1="347" y2="347" class="net_7"/><line x1="117" x2="117" y1="347" y2="297" class="net_7"/><circle cx="117" cy="347" r="2" style="fill:#000" class="net_7"/><line x1="117" x2="145" y1="297" y2="297" class="net_7"/><line x1="304" x2="348" y1="167" y2="167" class="net_8"/><line x1="313" x2="348" y1="319.5" y2="319.5" class="net_9"/><line x1="304" x2="348" y1="47" y2="47" class="net_10"/></svg>;
const defaultImg = '';
// const fakeImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px"><g>  <path d="M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3   c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z"/>  <path d="M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z"/>  <path d="M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z"/>  <path d="M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6   c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z"/>  <path d="M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z"/>  <path d="M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7   c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z"/>  <path d="M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7   C20.6,84.2,23.2,86.3,26.2,88.2z"/>  <path d="M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6   c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z"/></g></svg>';
// import "../assets/js/jquery.min.js";
// import "../assets/js/jquery.scrollex.min.js";
// import "../assets/js/jquery.scrolly.min.js";
// import "../assets/js/browser.min.js";
// import "../assets/js/breakpoints.min.js";
// import "../assets/js/util.js";
// import "../assets/js/main.js";

const Main = (props) => {
    // const [resultFilePath, setResultFilePath] = useState("data:image/svg+xml;utf8,"+fakeImg);
    const [resultFilePath, setResultFilePath] = useState(defaultImg);
    const [loading, setLoading] = useState(false);
    const [loginId, setLoginId] = useState(uuidv4());
    const [curTab, setCurTab] = useState('Coding');

    useEffect(()=> {
        console.log(typeof(resultFilePath));
        console.log(resultFilePath);
    }, [resultFilePath])

    useEffect(()=> {
        let i, tabLinks, tabContents;
        tabContents = document.getElementsByClassName('tabContent');
        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }
        
        tabLinks = document.getElementsByClassName('tabLinks');
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].style.display = "none";
        }
        let clickedTabContent = curTab + 'Content';
        document.getElementById(clickedTabContent).style.display = "block";
        let clickedTabLink = curTab + 'Link';
        console.log(clickedTabLink);
        document.getElementById(clickedTabLink).classList.add('active');
    }, [curTab]);

    return (
        <div>
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
                        <li><a className='tabLink' id='CodingLink' href='/#header' onClick={() => setCurTab('Coding')}>Coding Here</a></li>
                        <li><a className='tabLink' id='UploadLink' href='/#header' onClick={() => setCurTab('Upload')}>Upload .v file</a></li>
                        <li><a className='tabLink' id='ResultLink' href='/#header' onClick={() => setCurTab('Result')}>Result image</a></li>
                    </ul>
                </nav>

            {/* Component */}
                <div className='tabContent' id='CodingContent'>
                    <Coding userid={loginId} setLoading={setLoading} setResult={setResultFilePath} setCurTab={setCurTab} />
                </div>
                <div className='tabContent' id='UploadContent' >
                    <Upload userid={loginId} setLoading={setLoading} setResult={setResultFilePath} setCurTab={setCurTab} />
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
        </div>
    );
};

export default Main;
