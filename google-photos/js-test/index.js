const {google} = require('googleapis');
const {GoogleAuth} = require('google-auth-library');
const credentials = require('./manuall-photos-api-9eb2b23cf681.json')
const auth = new GoogleAuth({
  credentials: {
    apiKey: credentials.api_key,
  },
});
console.log(google)
const photos = google.photos({version: 'v1', auth});

photos.mediaItems.list({
  pageSize: 10,
  pageToken: '',
}, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  const mediaItems = res.data.mediaItems;
  if (mediaItems.length) {
    console.log('Imagens encontradas:');
    mediaItems.forEach((item) => {
      console.log(`${item.filename} (${item.mimeType}) - ${item.baseUrl}`);
    });
  } else {
    console.log('Nenhuma imagem encontrada.');
  }
});
