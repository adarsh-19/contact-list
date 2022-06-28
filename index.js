const express=require('express');
const path =require('path');

const port= process.env.PORT || 8000;
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
   {
     name: "Adarsh Tiwari",
     phone: "123567890"
   },
   {
    name : "Manglam Tiwari",
    phone : "1213123451"
  }

]

app.get('/',function(req,res){
    
    return res.render('home',
    {
      title : 'ye h aaj',
       contact_li:contactList
  
    });

});
app.post('/create-contact',function(req,res){
  // console.log(req);
    contactList.push(req.body); 
   return res.redirect('back');
});
app.get('/delete-contact/',function(req,res){
  let phone =req.query.phone;
  let contactIndex = contactList.findIndex(contact => contact.phone==phone);
  //console.log(contactIndex);
   if(contactIndex!=-1){
       contactList.splice(contactIndex,1);
   }
   return res.redirect('back');

});
app.listen(port,function(err){
  if(err){
      console.log("Error",err);
  }
  console.log("Working Fine");
});