require('dotenv').config();
const express = require('express');
const app = express();  
const db = require(__dirname + '/db_connect');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', function(req,res){
    res.send('<h2>Hello Soundar 5566</h2>');
});

app.get('/try-activity',(req, res)=>{
    db.query('SELECT * FROM activity LIMIT 10')
    .then(([results])=>{
        res.json(results);
    })
});

app.get('/try-studio',(req, res)=>{
    db.query('SELECT * FROM studio LIMIT 5')
    .then(([results])=>{
        res.json(results);
    })
});

app.use('/activity',require(__dirname + '/routes/activity'));
app.use('/studio',require(__dirname + '/routes/studio'));

app.use(express.static(__dirname + '/../public'));

app.use((req,res)=>{
    res.type('text/plain');
    res.status(404);
    res.send('404-找不到網頁');
});
app.listen(5566, function(){
    console.log('啟動Node server 偵聽埠號5566');
})