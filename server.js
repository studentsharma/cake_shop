require('dotenv').config();
const express = require('express');
const cors = require("cors")
const connectDB  = require('./src/db');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const authModel = require("./src/db/auth")
const cartModel = require('./src/db/cart')
const cakesModel = require('./src/db/cakes')
const cakes = require('./src/constants/cakes')
const orderModel = require('./src/db/orders')

connectDB()
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

async function insert_cakes(){

    let cnt = await cakesModel.countDocuments()
    if( cnt == 0 ){
        const updating_cakes = await cakesModel.insertMany(cakes)
    }
}

insert_cakes()


app.get('/', (req, res)=>{
    res.send(cakes)
})

app.post('/create_user', function(req,res){
    let {email,password} = req.body;

    bcrypt.genSalt(10,  function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            // console.log(hash)
            let user = await authModel.create({
                email,
                password : hash,
            })
            let token = jwt.sign({email},"secret");
            res.cookie("token",token)
            let cart_created = await cartModel.create({
                email
            })
            // res.send(user)
            // res.redirect("http://localhost:5173/Home")
            res.json({ token, user: { email: email }, redirect: "/Home" });
        });
    });
    
})

app.post('/login',async function(req,res){
    let user = await authModel.findOne({email:req.body.email});
    if( !user ) return res.send("something went wrong");
    
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if( result ) {
            let token = jwt.sign({email : user.email},"secret");
            res.cookie("token",token)

            res.json({ token, user: { email: user.email }, redirect: "/Home" });
        }
        else return res.send("something went wrong")
    });
})

app.get('http://localhost:5173/logout', function(req, res){
    res.cookie("token","");
    res.redirect("http://localhost:5173/")
})


app.post("/add-cart", async (req,res)=>{
    let {email, cake_id} = req.body
    let cart = await cartModel.findOne({email})
    cart.cakes = cake_id
    await cart.save();
    res.send(cart)
})

app.post('/order', isLogedIn, async (req, res)=>{
    let {email, cake_id} = req.body
    let documents = await cakesModel.find({cake_id: { $in: cake_id } });
    for (let doc of documents) {
        doc.users.push(email);
        await doc.save();
    }

    let orders_updating = await orderModel.create({
        email,
        cakes : cake_id
    })

    res.send(orders_updating)
} )

function isLogedIn(req, res, next){
    if( req.cookies.token === "") res.redirect("http://localhost:5173/Login")
    else{
        let data = jwt.verify(req.cookies.token, "secret")
        req.user = data
}
    next();
}



app.listen(process.env.PORT, ()=>{
    // console.log("Happing in listen part ");
})
