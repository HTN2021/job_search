const firebase = require('./firebase_connect');

module.exports = {
    saveData: (req, callback) => {
    let username = req.username;

    firebase.database().ref("users/"+username).set({
        username: req.username,
        email: req.email
    });
    callback(null, {"statuscode": 200, "message": "Inserted successfully!"});
    }
}