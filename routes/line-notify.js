var express = require('express');
var request = require('request');
var fs = require('fs');


var router = express.Router();
router.post('/', function(req, res, next) {
    var token = req.body.token;
    var message = req.body.message;
 
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        formData: {
            'message': message,
            'imageFile': fs.createReadStream('/Users/9werayut/Pictures/Photos Library.photoslibrary/Masters/2017/07/02/20170702-014049/IMG_4873.JPG')
        }
    }, (err, httpResponse, body) => {
        if(err){
            console.log(err);
        } else {
            res.json({
                httpResponse: httpResponse,
                body: body,
                file: fs.createReadStream('test.jpg')
            });
        }
    });

});

module.exports = router;