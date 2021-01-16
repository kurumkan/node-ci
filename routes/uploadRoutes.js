const aws = require('aws-sdk');
const uuid = require('uuid/v1');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const s3 = new aws.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    signatureVersion: 'v4',
    region: 'eu-central-1',
    endpoint: 'https://s3.eu-central-1.amazonaws.com'
})

module.exports = app => {
    // request for the s3 url
    app.get('/api/upload', requireLogin, async (req, res) => {
        const key = `${req.user.id}/${uuid()}.jpg`;
        const params = {
            Bucket: 'advanced-node-js-image-upload',
            ContentType: 'image/jpeg',
            Key: key
        };
        s3.getSignedUrl('putObject', params, (err, url) => {
            console.log('url', url)
            res.send({ key, url });

        });
    });
};
