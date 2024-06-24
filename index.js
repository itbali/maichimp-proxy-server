const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
dotenv.config();
app.use(cors());
const apiProxy = createProxyMiddleware('/', {
    target: 'https://us7.api.mailchimp.com/3.0',
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_KEY}`).toString('base64')}`);
    }
});

app.use('/', apiProxy);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`running ${PORT}`);
});
