const { createProxyMiddleware } = require('http-proxy-middleware');

// '/api'로 요청을 보내면 Spring 서버로 요청이 도착하게 된다.
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};