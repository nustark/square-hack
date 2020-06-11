var express = require('express');
var router = express.Router();

var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

defaultClient.basePath = 'https://connect.squareupsandbox.com';
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];

// Set sandbox access token
oauth2.accessToken = "EAAAEPeGC_MYQI7kwWxR9V0u3Z_DZaL0UVch1-K5Q0dAW0pDIN8XFXGFBOMD-F3F";

// Pass client to API
var apiInstance = new SquareConnect.OrdersApi();

var locationId = '8P9KZXQ0S5DV2';

var body = new SquareConnect.BatchRetrieveOrdersRequest(['rYMfVsyRLWH9QKF9g4LW3CurLuLZY', '1flRulKv0namRJkg7pqTHiqecyVZY']);

router.get('/', function(req, res, next) {
  // res.send('API is working properly!');
  try {
    apiInstance.batchRetrieveOrders(locationId, body).then(function(data) {
      // console.log('API called successfully. Returned data: ' + data);
      res.json(data);
    }, function(error) {
      console.error(error);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;