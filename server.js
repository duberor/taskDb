const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // або your-file.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Якщо Render задає PORT, беремо його; інакше локально буде 5050
const PORT = process.env.PORT || 5050;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
