const express=require('express');
const mysql=require('mysql');
const path=require('path');

const app=express();
app.use('/assets', express.static('assets'))
app.use(express.static(path.join(__dirname, 'public')))

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ayush@321',
    database: 'nodejslogin'
})

db.connect((error)=>{
    if(error){
        console.log(error)
    }
    else[
        console.log('My SQL connected...')
    ]
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
  
    const insertUserSql = 'INSERT INTO registration_form (id, name, password, address, phone_no, email) VALUES (?, ?, ?)';
    db.query(insertUserSql, [id, cust_name, password, address, phone_no, email], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.send('Error registering user');
      } else {
        console.log('User registered:', result);
        res.send('User registered successfully');
      }
    });
  });

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.post('/login', (req, res)=>{
    createConnection.query('select * from registration_form where id=? and password=?', function(error, results, fields){
        if(results.length>0){
            res.redirect("/1.html");
        }
        else{
            res.redirect("/login.html");
        }
    })
})

app.get('/1.html', function(res, req){
    res.sendfile(__dirname+"/1.html")
})

app.listen(5000, ()=>{
    console.log('Server started on port 5000')
})