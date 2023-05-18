const express = require("express");
const cors = require('cors')
require("./DB/Config");
const User = require("./DB/Users");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  let user = new User(request.body);
  let result = await user.save();
  response.send(result);
});
app.post('/login', async (request,response)=>{
  let user =  await User.findOne(request.body).select("-password")
  if(user){
  response.send(user)}else{
    response.send({result:'user not found'})
  }
})
app.listen(5000);


// cors issue in react after hitting the backend ;
