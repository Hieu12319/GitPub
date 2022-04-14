require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")


app.get("/",(req, res) => {
    res.send("Welcome to the Gitpub App!")
});

app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks})

})

app.get("/drinks/:id", (req, res) => {
    res.render('drinks_show.ejs', {drinks: drinks[req.params.id]})
});

app.get("/food", (req, res)=> {
    res.render('food_index.ejs', {allFoods: food})
})
app.get("/food/:id",(req, res) => {
    res.render('food_show.ejs', {food: food[req.params.id]})
})

app.listen(PORT, () => {
    console.log(`We are listening to port ${PORT}`)
});