const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./Routes/user.routes");
app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000.");
});
