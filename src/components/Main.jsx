import {React, useEffect, useState} from "react";
import Coding from "./Coding";
import Upload from "./Upload";
import Result from "./Result";
import { v4 as uuidv4 } from 'uuid';
import "../assets/css/main.css";
import "../assets/css/noscript.css";
const defaultImg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:s="https://github.com/nturley/netlistsvg" width="390" height="369"><style>svg {stroke:#000;fill:none;}text {  fill:#000;  stroke:none;  font-size:10px;  font-weight: bold;  font-family: "Courier New", monospace;}.nodelabel {  text-anchor: middle;}.inputPortLabel {  text-anchor: end;}.splitjoinBody {  fill:#000;}</style><g s:type="and" transform="translate(210,34.5)" s:width="30" s:height="25" id="cell_$and$../data/0.v:0$4">  <s:alias val="$and"/>  <s:alias val="$logic_and"/>  <s:alias val="$_AND_"/>  <path d="M0,0 L0,25 L15,25 A15 12.5 0 0 0 15,0 Z" className="cell_$and$../data/0.v:0$4"/>  <g s:x="0" s:y="5" s:pid="A"/>  <g s:x="0" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="and" transform="translate(143,27)" s:width="30" s:height="25" id="cell_$and$../data/0.v:6$2">  <s:alias val="$and"/>  <s:alias val="$logic_and"/>  <s:alias val="$_AND_"/>  <path d="M0,0 L0,25 L15,25 A15 12.5 0 0 0 15,0 Z" className="cell_$and$../data/0.v:6$2"/>  <g s:x="0" s:y="5" s:pid="A"/>  <g s:x="0" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="not" transform="translate(77,77)" s:width="30" s:height="20" id="cell_$logic_not$../data/0.v:5$1">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" className="cell_$logic_not$../data/0.v:5$1"/>  <circle cx="23" cy="10" r="3" className="cell_$logic_not$../data/0.v:5$1"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="not" transform="translate(279,157)" s:width="30" s:height="20" id="cell_$not$../data/0.v:10$8">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" className="cell_$not$../data/0.v:10$8"/>  <circle cx="23" cy="10" r="3" className="cell_$not$../data/0.v:10$8"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="not" transform="translate(279,37)" s:width="30" s:height="20" id="cell_$not$../data/0.v:8$5">  <s:alias val="$_NOT_"/>  <s:alias val="$not"/>  <s:alias val="$logic_not"/>  <path d="M0,0 L0,20 L20,10 Z" className="cell_$not$../data/0.v:8$5"/>  <circle cx="23" cy="10" r="3" className="cell_$not$../data/0.v:8$5"/>  <g s:x="0" s:y="10" s:pid="A"/>  <g s:x="25" s:y="10" s:pid="Y"/></g><g s:type="or" transform="translate(210,154.5)" s:width="30" s:height="25" id="cell_$or$../data/0.v:0$7">  <s:alias val="$or"/>  <s:alias val="$logic_or"/>  <s:alias val="$_OR_"/>  <path d="M0,25 L0,25 L15,25 A15 12.5 0 0 0 15,0 L0,0" className="cell_$or$../data/0.v:0$7"/>  <path d="M0,0 A30 25 0 0 1 0,25" className="cell_$or$../data/0.v:0$7"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="or" transform="translate(143,147)" s:width="30" s:height="25" id="cell_$or$../data/0.v:7$3">  <s:alias val="$or"/>  <s:alias val="$logic_or"/>  <s:alias val="$_OR_"/>  <path d="M0,25 L0,25 L15,25 A15 12.5 0 0 0 15,0 L0,0" className="cell_$or$../data/0.v:7$3"/>  <path d="M0,0 A30 25 0 0 1 0,25" className="cell_$or$../data/0.v:7$3"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="30" s:y="12.5" s:pid="Y"/></g><g s:type="reduce_nxor" transform="translate(275,307)" s:width="33" s:height="25" id="cell_$xnor$../data/0.v:11$9">  <s:alias val="$xnor"/>  <s:alias val="$reduce_xnor"/>  <s:alias val="$_XNOR_"/>  <path d="M3,0 A30 25 0 0 1 3,25 A30 25 0 0 0 33,12.5 A30 25 0 0 0 3,0" className="cell_$xnor$../data/0.v:11$9"/>  <path d="M0,0 A30 25 0 0 1 0,25" className="cell_$xnor$../data/0.v:11$9"/>  <circle cx="35" cy="12.5" r="3" className="cell_$xnor$../data/0.v:11$9"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="38" s:y="12.5" s:pid="Y"/></g><g s:type="reduce_xor" transform="translate(142,277)" s:width="33" s:height="25" id="cell_$xor$../data/0.v:9$6">  <s:alias val="$xor"/>  <s:alias val="$reduce_xor"/>  <s:alias val="$_XOR_"/>  <path d="M3,0 A30 25 0 0 1 3,25 A30 25 0 0 0 33,12.5 A30 25 0 0 0 3,0" className="cell_$xor$../data/0.v:9$6"/>  <path d="M0,0 A30 25 0 0 1 0,25" className="cell_$xor$../data/0.v:9$6"/>  <g s:x="3" s:y="5" s:pid="A"/>  <g s:x="3" s:y="20" s:pid="B"/>  <g s:x="33" s:y="12.5" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,22)" s:width="30" s:height="20" id="cell_a">  <text x="15" y="-4" className="nodelabel cell_a" s:attribute="ref">a</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_a"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(12,77)" s:width="30" s:height="20" id="cell_b">  <text x="15" y="-4" className="nodelabel cell_b" s:attribute="ref">b</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_b"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,142)" s:width="30" s:height="20" id="cell_c">  <text x="15" y="-4" className="nodelabel cell_c" s:attribute="ref">c</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_c"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,207)" s:width="30" s:height="20" id="cell_d">  <text x="15" y="-4" className="nodelabel cell_d" s:attribute="ref">d</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_d"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,272)" s:width="30" s:height="20" id="cell_e">  <text x="15" y="-4" className="nodelabel cell_e" s:attribute="ref">e</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_e"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="inputExt" transform="translate(77,337)" s:width="30" s:height="20" id="cell_f">  <text x="15" y="-4" className="nodelabel cell_f" s:attribute="ref">f</text>  <s:alias val="$_inputExt_"/>  <path d="M0,0 L0,20 L15,20 L30,10 L15,0 Z" className="cell_f"/>  <g s:x="28" s:y="10" s:pid="Y"/></g><g s:type="outputExt" transform="translate(348,157)" s:width="30" s:height="20" id="cell_out1">  <text x="15" y="-4" className="nodelabel cell_out1" s:attribute="ref">out1</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" className="cell_out1"/>  <g s:x="0" s:y="10" s:pid="A"/></g><g s:type="outputExt" transform="translate(348,309.5)" s:width="30" s:height="20" id="cell_out2">  <text x="15" y="-4" className="nodelabel cell_out2" s:attribute="ref">out2</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" className="cell_out2"/>  <g s:x="0" s:y="10" s:pid="A"/></g><g s:type="outputExt" transform="translate(348,37)" s:width="30" s:height="20" id="cell_tmp4">  <text x="15" y="-4" className="nodelabel cell_tmp4" s:attribute="ref">tmp4</text>  <s:alias val="$_outputExt_"/>  <path d="M30,0 L30,20 L15,20 L0,10 L15,0 Z" className="cell_tmp4"/>  <g s:x="0" s:y="10" s:pid="A"/></g><line x1="173" x2="210" y1="39.5" y2="39.5" className="net_11"/><line x1="173" x2="185" y1="159.5" y2="159.5" className="net_12"/><line x1="185" x2="185" y1="159.5" y2="54.5" className="net_12"/><circle cx="185" cy="159.5" r="2" style="fill:#000" className="net_12"/><line x1="185" x2="210" y1="54.5" y2="54.5" className="net_12"/><line x1="173" x2="213" y1="159.5" y2="159.5" className="net_12"/><line x1="105" x2="143" y1="32" y2="32" className="net_2"/><line x1="102" x2="117" y1="87" y2="87" className="net_14"/><line x1="117" x2="117" y1="87" y2="47" className="net_14"/><line x1="117" x2="143" y1="47" y2="47" className="net_14"/><line x1="40" x2="77" y1="87" y2="87" className="net_3"/><line x1="240" x2="279" y1="167" y2="167" className="net_15"/><line x1="240" x2="279" y1="47" y2="47" className="net_13"/><line x1="175" x2="185" y1="289.5" y2="289.5" className="net_16"/><line x1="185" x2="185" y1="289.5" y2="174.5" className="net_16"/><line x1="185" x2="213" y1="174.5" y2="174.5" className="net_16"/><line x1="105" x2="146" y1="152" y2="152" className="net_4"/><line x1="105" x2="117" y1="217" y2="217" className="net_5"/><line x1="117" x2="117" y1="217" y2="167" className="net_5"/><line x1="117" x2="146" y1="167" y2="167" className="net_5"/><line x1="105" x2="127" y1="282" y2="282" className="net_6"/><line x1="127" x2="127" y1="282" y2="312" className="net_6"/><circle cx="127" cy="282" r="2" style="fill:#000" className="net_6"/><line x1="127" x2="278" y1="312" y2="312" className="net_6"/><line x1="105" x2="145" y1="282" y2="282" className="net_6"/><line x1="105" x2="250" y1="347" y2="347" className="net_7"/><line x1="250" x2="250" y1="347" y2="327" className="net_7"/><line x1="250" x2="278" y1="327" y2="327" className="net_7"/><line x1="105" x2="117" y1="347" y2="347" className="net_7"/><line x1="117" x2="117" y1="347" y2="297" className="net_7"/><circle cx="117" cy="347" r="2" style="fill:#000" className="net_7"/><line x1="117" x2="145" y1="297" y2="297" className="net_7"/><line x1="304" x2="348" y1="167" y2="167" className="net_8"/><line x1="313" x2="348" y1="319.5" y2="319.5" className="net_9"/><line x1="304" x2="348" y1="47" y2="47" className="net_10"/></svg>';


const Main = (props) => {
    const [resultFilePath, setResultFilePath] = useState(defaultImg);
    const [loading, setLoading] = useState(false);
    const [loginId, setLoginId] = useState(uuidv4());
    const [curTab, setCurTab] = useState('Coding');
    useEffect(()=> {
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
            <div id="wrapper" className="fade-in">
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
                    {/* <Result userid={loginId} resultFilePath={resultFilePath} /> */}
                </div>
            {/* Footer */}

                <div id="copyright">
                    <ul>
                        <li>Logic Gate Generator</li>
                        <li>&copy; NTHU</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
