import axios from 'axios';

// Develop server URL
const logicGateBaseUrl = 'http://localhost:8080/api';

// Production server URL
// const logicGateBaseUrl = "http://logic-gate-generator.us-east-1.elasticbeanstalk.com/api";

export function sendVerilogText(id = 0, text = '') {
    let url = `${logicGateBaseUrl}/send/verilogText`;

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

export function sendVerilogFile(id = 0, file = null) {
    let url = `${logicGateBaseUrl}/send/verilogFile`;

    console.log(`Making POST request to: ${url}`);

    return axios.post(url, {
        file,
        id
    }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}

export function sendUserDefinedText(id = 0, text = '') {
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

export function receiveData(id = 0) {
    let url = `${logicGateBaseUrl}/receive?id=${id}`;
    
    console.log(`Making GET request to: ${url}`);

    return axios.get(url, {id}).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);

        return res.data;
    });
} 