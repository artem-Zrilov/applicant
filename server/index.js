const express = require('express');
const next = require('next');
var bodyParser = require('body-parser')
const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
   .then(() => {
     const server = express();
     const apiRoutes = require("./router/index.js");

     server.use(bodyParser.urlencoded({ extended: true }));
     server.use("/api", apiRoutes);
     server.use('/uploads', express.static(__dirname + '/uploads'));

     server.get("*", (req, res) => {
       return handle(req, res)
     })

     server.listen(PORT, err => {
       if (err) throw err;
       console.log(`>>>> Ready on http://localhost:${PORT}`)
     })
   })