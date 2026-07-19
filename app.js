import  express from "express";

const app = express();

import { multiply } from "./math.js";

import Customer from "./customer.js";

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    //console.log("Server running on port 3000");
    // var result = math.subtract(10, 20);
    // console.log(result);
    // console.log('pi values is ' + math.pi);
    console.log(multiply(5, 5));
    //const c = new Customer();
    //console.log(c.getCustomerId());
    
});

