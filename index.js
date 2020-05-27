var express = require("express");

var app = express();

var distDir = __dirname + "/dist/"
console.log(distDir);

app.use(express.static(distDir));

var server = app.listen(process.env.PORT ||8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

var members = [
    {id:'123',name:'tester 1',email:'test@test.com',phoneNumber:'123',gender:'M',type:'standard'},
    {id:'123',name:'tester 2',email:'test2@test2.com',phoneNumber:'123',gender:'M',type:'standard'},
    {id:'456',name:'tester 456',email:'test456@test2.com',phoneNumber:'123',gender:'M',type:'standard'}

]

app.get("/api/members",function(req,res) {
 return res.status(200).json(members);
})
