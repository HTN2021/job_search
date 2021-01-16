const firebase = require('firebase');
const app = firebase.initializeApp({
    apiKey: "AIzaSyAskuQAzgsUYzi0dtX2bFGWiphaRE7gvNQ",
    authDomain: "htn2021-jobsearch.firebaseapp.com",
    databaseURL: "https://htn2021-jobsearch-default-rtdb.firebaseio.com",
    projectId: "htn2021-jobsearch",
    storageBucket: "htn2021-jobsearch.appspot.com",
    messagingSenderId: "612649812409",
    appId: "1:612649812409:web:b231f9a6ec2d94cd67f668",
    measurementId: "G-6FC44VEKTZ"
});


module.exports = app;