const express = require('express');
const mysql =require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials:true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key:"userID",
    secret:"they_will_never_know_my_secret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires: 60*60*24,
    }
}))

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "root",
    port:"8080",
    database: "baza",
})

app.post("/create", (req,res)=>{
    const title = req.body.title;
    const post_text = req.body.post_text;

     db.query("INSERT INTO posts (title,post_text) VALUES (?,?);",[title,post_text],(err,result)=>{
     });
})

app.get("/get", (req,res)=>{
     db.query("SELECT * FROM baza.posts",(err,result)=>{
         if(err){   
        console.log(err);
         }
         res.send(result);
     });
})

app.get("/getId/:id", (req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM baza.posts WHERE id=?",id,(err,result)=>{
        if(err){   
       console.log(err);
        }
        res.send(result);
    });
})

app.post("/register", (req,res)=>{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;


    bcrypt.hash(password, saltRounds, (err, hash)=>{
        
    if(err){
        console.log(err);
    }
        const InsertSql= "INSERT INTO user_reg (username,email,password) VALUES (?,?,?);"
        db.query(InsertSql,[username,email,hash],(err,result)=>{
            console.log(err);
        });
    })

    
});

app.post("/like/:id", (req,res)=>{
    const id = req.params.id;
    const InsertSql= "UPDATE posts SET likes = likes + 1 WHERE id=?;"
    db.query(InsertSql,id,(err,result)=>{
        console.log(err);
    });
    
});

app.get("/user/:id", (req,res)=>{
    const id = req.params.id;
    const InsertSql= "SELECT username FROM user_reg WHERE id=?;"
    db.query(InsertSql,id,(err,result)=>{
        if(err){   
            console.log(err);
             }
             res.send(result);
    });
    
});

app.post("/disLike/:id", (req,res)=>{
    const id = req.params.id;
    const InsertSql= "UPDATE posts SET likes = likes - 1 WHERE id=?;"
    db.query(InsertSql,id,(err,result)=>{
        console.log(err);
    });
    
});


app.get("/login", (req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true, user: req.session.user})
    }
    else{
        res.send({loggedIn:false})
    }
})

app.post("/login", (req,res)=>{

    const email = req.body.email;
    const password = req.body.password;

    const InsertSql= "SELECT * FROM baza.user_reg WHERE email=?;"
    db.query(InsertSql,email,(err,result)=>{

        //  const id = result[0].id;
        //  const token = jwt.sign({id},"jwtSecret", {
        //      expiresIn: 300,
        // })

        if(err){
            res.send({err:err});
        }

        if(result.length>0){
     //      res.json({auth:true, token:token, result:result});
            bcrypt.compare(password, result[0].password,(error,response)=>{
                if(response){
                    req.session.user = result
                    res.send(result);
                } else{
                    res.send({message:"You have entered wrong password"});
                }
            });
        } else{
            res.send({message:"User doesen't exist"});
        }
    });
});


//JWT Tried

/*
const verifyJWT = (req,res,next) =>{
    const token=req.headers["x-access-token"]

    if(!token){
        res.send("There is no token")
    }
    else{
        jwt.verify(token,"jwtSecret",(err,decoded)=>{
            if(err){
                res.json({auth:false, message:"You failed to authenticate"})
            }
            else{
                req.userID =decoded.id;
                next();
            }
        })
    }
}

app.get('/isAuth', verifyJWT ,(req,res)=>{
    res.send("You are authenticated")
})
*/


app.listen(3001, () =>{
    console.log("Server runing on port 3001");
});