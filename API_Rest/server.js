import app from "./app";

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Servidor na porta ${port}`);
  console.log(`CTRL + Clique em http://127.0.0.1:${port}`);
});
