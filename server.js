// import express from 'express';
const express = require('express');

//import { data } from './api/mock_data/userData.json'; // Not allowed
const data = require('./api/mock_data/userData.json'); // Mock data

let app = express();
let port = process.env.PORT || 5000;

// Example
app.get('/api/hello', (req, res) => {
    res.send({ express: `Hello ${data.personal_info.name}` });
  });

// Services
app.get('/api/personal_info', (req, res) => {
    res.send(data.personal_info);
});

app.get('/api/languages', (req, res) => {
    res.send(data.languages);
});

app.get('/api/qualifications', (req, res) => {
    res.send(data.qualifications);
});

app.get('/api/geographicalCover', (req, res) => {
    res.send(data.geographicalCover);
});

app.get('/api/bankAccount', (req, res) => {
    res.send(data.bankAccount);
});

app.get('/api/services', (req, res) => {
    res.send(data.all_services);
});


// -----------

app.listen(port);

console.log('Listening on port: ' + port);
