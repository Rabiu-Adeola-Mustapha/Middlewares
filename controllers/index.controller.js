const res = require("express/lib/response");

const Welcome = (req, res) => {
    res.send("Welcome!");
};

const greet = (req , res) => {
    res.send("Plesase greet");
};

const protected = (req, res) => {
    res.send("You can see this because you are authenticated")
};


module.exports = {
    Welcome,
    greet,
    protected
};