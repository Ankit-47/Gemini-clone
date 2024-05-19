const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://generativelanguage.googleapis.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix when forwarding to target
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('Authorization', `Bearer AIzaSyB-quvQwr2hZ-8iN9vaZfmjaKRg7Za98aw`);
    proxyReq.setHeader('Content-Type', 'application/json');
  }
}));

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});
