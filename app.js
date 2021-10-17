let express = require("express");
let app = express();

app.use(express.json()); //enable post data

app.get("/sayHello",(req,res)=>{
    res.send("Welcome to Express js with Docker Test")
})

app.get("/user/:name",(req,res)=>{
    let name = req.params.name;
    res.send("Welcome usser "+name);
})

app.post("/checkLogin",(req,res)=>{
    let login = req.login;
    if(login.user == "Parna" && login.pass=="123"){
        res.send("Successful Login")
    }
    else{
        res.send("Failure to login. Try once again");
    }
})

app.listen(9090,()=> console.log("Server running on the port numbere 9090"))