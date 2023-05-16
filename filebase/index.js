const {
  S3
} = require("@aws-sdk/client-s3");

const s3 = new S3({
  apiVersion: '2006-03-01',
  accessKeyId: '',
  secretAccessKey: '',
  endpoint: 'https://s3.filebase.com',
  region: 'us-east-1',
  s3ForcePathStyle: true
});

const params = {
  Bucket: "manuall-sia",
  MaxKeys: 20
};

s3.listObjectsV2(params, function (err, data) {
  if (err) {
    console.log("Error when listing objects", err);
  } else {
    console.log("Success when listing objects", data);
  }
});