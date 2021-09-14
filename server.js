const express= require('express');
const app = express ();
const mongoose= require('./database/mongoose');

const Enseignant=require('./database/models/enseignant');
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



    // Pass to next layer of middleware
    next();
});
// example of middleware
app.use(express.json());

//Routes or Rest API EndPoints or WebServices Endpoints
/*
Enseignant - Create , Update , ReadEnseignatById , ReadAllEnseignants
*/
//Routes or  API EndPoints for Enseignat Model
//Get all Enseignats
//http://localhost:3000/Enseignants => [{Enseignant} , {Enseignant}]



app.get('/enseignants', (req, res) =>{

    Enseignant.find({})
        .then(lists => {res.status(200).send (lists)})
        .catch((error) => {console.log(error);
            res.status(500);});


});
//rOUTES OR Endpoint for creating TaskList
app.post('/enseignants', (req, res) => {
    // console.log("hello i'm inside post method");
    console.log(req.body);
    let enseignatObject= {'name':req.body.name , 'email':req.body.email ,'password':req.body.password ,'phone':req.body.phone};
    Enseignant(enseignatObject).save()
        .then((enseignant)=>{res.status(201).send (enseignant)})
        .catch((error) => {console.log (error);
            res.status(500);});

} );

//endpoint to get one enseignat by enseignantId
app.get('/enseignants/:enseignantId', (req, res) => {
    let enseignantId= req.params.enseignantId;
    Enseignant.find({ _id: enseignantId})
        .then((enseignant) => {
            res.status(200).send(enseignant)
        })
        .catch((error) => console.log(error))
});

//put is a full update of object
app.put('/enseignants/:enseignantId', (req , res) =>{
    Enseignant.findOneAndUpdate({_id: req.params.enseignantId} , {$set : req.body})
        .then((enseignant)=>{res.status(200).send (enseignant)})
        .catch((error) => {console.log (error);
        });


});
// patch is partial update of one field of an object
app.patch('/enseignants/:enseignantId', (req , res) =>{
    Enseignant.findOneAndUpdate({_id: req.params.enseignantId} , {$set : req.body})
        .then((enseignant)=>{res.status(200).send (enseignant)})
        .catch((error) => {console.log (error);
        });


});

// delete a tasklist  with id
app.delete('/enseignants/:enseignantId', (req , res) =>{

    Enseignant.findByIdAndDelete({_id :  req.params.enseignantId} ,err =>{
        if(err){
            res.status(500).json({
                message:"user is not deleted" +err ,
                data: null,
            });
        }else {
            res.status(200).json({
                message:"user is successfully deleted" ,
                data: null,
            });
        }
    });
});


app.listen(3000 , function(){console.log("server started on port 3000 great ")});
