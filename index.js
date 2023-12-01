const express = require('express');
const cors = require('cors');

const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
app.use(cors());
const apiProxy = createProxyMiddleware('/api', {
    target: 'https://us7.api.mailchimp.com/3.0',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from('anystring:c4e00cd121be3ebf1dc0525e4a5d0c67-us7').toString('base64')}`);
    }
});

app.use('/api', apiProxy);

module.exports = app;
