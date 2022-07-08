const express = require('express');
const axios = require('axios');
const cors = require('cors');


const app = express();
// const contactAddress = '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91';
const contactAddress = '0x19818f44Faf5A217F619AFF0FD487CB2a55cCa65'

app.use(cors({
  origin: ['http://localhost:9528'],
}));

// GET: Assets List
app.get('/api/assets&offset=:offset', (req, res) => {
  const offset = req.params.before;
  const apiUrl = 'https://testnets-api.opensea.io/api/v1/assets';
  const params = {
    format: 'json',
    owner: contactAddress,
    offset: offset,
    limit: 20,
  };

  return axios.get(apiUrl, { ...params })
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(err);
    });
});

// GET: Assets Detail
app.get('/api/assets&token=:token', (req, res) => {
  const token = req.params.token;
  const apiUrl = `https://testnets-api.opensea.io/api/v1/asset/${contactAddress}/${token}`

  return axios.get(apiUrl)
    .then(({ status, statusText, headers, data }) => {
      if (status === 200) {
        return res.json(data);
      } else {
        return '';
      }
    }).catch((err) => {
      res.send(err);
    });
});

app.listen(9527, () => {
  console.log('CORS-enabled web server listening on port 9527');
});