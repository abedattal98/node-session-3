var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get("/items", function(req, res) {
    var id = req.query.id;
    //const {id, since, fields, anotherField} = req.query;
    console.log(req.query);
   //console.log(id);
   res.send('your selected type '+req.query.shoe.type+' color '+req.query.shoe.color)
});

app.get('/', (req, res) => {
    console.log(req.baseUrl);
    res.send('Hello World');
});

app.post('/login',(req,res)=>{

    var credentials = {user:"abed",password:"attal"}


    console.log(req.body)

    var user = req.body.user
    var password = req.body.password
    console.log(user + 'your password '+password)

    if(user === credentials.user && password===credentials.password )
    res.json('done')

    else{
    res.status(401)
    res.json('your password or username is incorrect')}
}


)

app.listen(3000);