const PORT = process.env.PORT || 3301;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log("server is running");
});