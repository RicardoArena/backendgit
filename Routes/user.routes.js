const router = require("express").Router();
const data = require("../data");

const { v4: uuid } = require("uuid");

router.post("/create-user", (req, res) => {
  data.push({ ...req.body, id: uuid() });

  res.status(201).json({ message: "Criado com sucesso!", data: data });
});

router.get("/read", (req, res) => {
  return res.status(200).json(data);
});

router.get("/details/:id", (req, res) => {
  const { id } = req.params;
  const document = data.filter((currentDocument) => currentDocument.id === id);
  return res.status(200).json(document[0]);
});

module.exports = router;
