const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
app.use(cors((origin, callback)=>{
    if (origin.includes("vercel.app")) {
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
}));
const apiProxy = createProxyMiddleware('/api', {
    target: 'https://us7.api.mailchimp.com/3.0',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '',
    },
    onProxyReq: (proxyReq) => {
        console.log('proxyReq to '+process.env.MAILCHIMP_KEY, proxyReq);
        proxyReq.setHeader('Authorization', `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_KEY}`).toString('base64')}`);
    }
});

app.use('/api', apiProxy);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`running ${PORT}`);
});
