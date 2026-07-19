const express = require("express");

const app = express();

const math = require("./math");
const customer = require("./customer");

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    //console.log("Server running on port 3000");
    // var result = math.subtract(10, 20);
    // console.log(result);
    // console.log('pi values is ' + math.pi);
    const c = new customer();
    console.log(c.getCustomerId());
    
});

