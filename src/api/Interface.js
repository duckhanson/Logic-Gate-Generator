import axios from 'axios';

// Develop server URL
const logicGateBaseUrl = 'http://34.81.29.121:8080/api';

// Production server URL
// const logicGateBaseUrl = "http://logic-gate-generator.us-east-1.elasticbeanstalk.com/api";

export function sendVerilogText(id = 0, topmoduleName = '',text = '') {
    let url = `${logicGateBaseUrl}/send/verilogText`;
    console.log(`Making POST request to: ${url}`);
    let usrId = Math.random().toString(36).substring(7);
    console.log(usrId);
    return axios.post(url, {
        topmoduleName,
        text,
        usrId
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function sendUserDefinedText(id = 0, text = '') {
    let url = `${logicGateBaseUrl}/send/userDefinedText`;
    console.log(`Making POST request to: ${url}`);
    let usrId = Math.random().toString(36).substring(7);
    console.log(usrId);
    return axios.post(url, {
        text,
        usrId
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function receiveData(id = 0) {
    let url = `${logicGateBaseUrl}/receive?id=${id}`;
    
    console.log(`Making GET request to: ${url}`);

    return axios.get(url, {id}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
} 