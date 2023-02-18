const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createTeacher = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("teacher").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateTeacher = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("teacher")
                        .findOneAndUpdate({_id:ObjectId(req.params.teacherId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getTeacher = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("teacher").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteTeacher = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("teacher").remove({_id: ObjectId(req.params.teacherId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}