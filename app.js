const express = require("express");

const app2 = express();

app2.get("/", (req, res) => {
    res.send("Hello World");
});

app2.listen(3000, () => {
    console.log("Server running on port 3000");


    const simpleArray =
        [7, 8, 9];

    const matrix = [
        [1, 2, 3], // Row 0
        [4, 5, 6], // Row 1
        [7, 8, 9]  // Row 2
    ];

    console.log(matrix[1][2]);
});

