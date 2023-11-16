const fileSystem = require("./fileSystem");
const express = require("express");
const app = express();
const port = 8000;

fileSystem.createFile("hello.txt", "Hello world!");

fileSystem.readFile("hello.txt");

app.get("/", (req, res) => {
  res.send("Hello, this is homepage");
});

app.listen(port, () => {
  console.log(`load http://localhost:${port}/ in a browser to see the output.`);
});
