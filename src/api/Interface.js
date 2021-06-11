import axios from 'axios';

// Develop server URL
const logicGateBaseUrl = 'http://localhost:3000/api';

// Production server URL
// const logicGateBaseUrl = "http://logic-gate-generator.us-east-1.elasticbeanstalk.com/api";

// TODO
export function sendVerilogTextToBackEnd(text = '', id = 0) {
    let url = `${logicGateBaseUrl}/send/verilogText`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        text
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function sendVerilogFileToBackEnd(file = '', id = 0) {
    let url = `${logicGateBaseUrl}/send/verilogFile`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        file,
        id
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function sendUserDefinedTextToBackEnd(text = '', id = 0) {
    let url = `${logicGateBaseUrl}/send/userDefinedText`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        text,
        id
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}


// TODO
// receiveDataFromBackEnd() 
export function receiveDataFromBackEnd(id = 0) {
    let url = `${logicGateBaseUrl}/receive?id=${id}`;
    
    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
} 