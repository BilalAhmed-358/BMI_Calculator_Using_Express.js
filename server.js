const express = require("Express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", (req, res) => {

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    console.log(height);
    console.log(weight);

    var bmi = weight / (height * height);
    res.send("Your BMI is " + bmi.toFixed(3));
})

app.listen(3000, () => {
    console.log("Server started.")
})