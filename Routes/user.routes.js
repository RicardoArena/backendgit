const router = require("express").Router();
const data = require("../data");

const { v4: uuid } = require("uuid");
const { application } = require("express");

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

router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  data.forEach((currentDocument, i) => {
    if (currentDocument.id === id) {
      data[i] = { ...req.body, id: currentDocument.id };
    }
  });

  const newDocument = data.filter(
    (currentDOcument) => currentDOcument.id === id
  );
  return res.status(200).json(newDocument[0]);
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const document = data.filter((currentDocument) => currentDocument.id === id);

  const index = data.indexOf(document[0]);
  data.splice(index, 1);

  return res.status(200).json(data);
});

module.exports = router;
