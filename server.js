const PORT = process.env.PORT || 3301;

server.use(middlewares);
serve.use(router);

server.listen(PORT, () => {
    console.log('server start')
})