const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Student = require("./models/students");
const router = require("./routers/router");
require("./db/conn");

app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`listen from ${port}`);
});