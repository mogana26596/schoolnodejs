const { ObjectId } = require('mongodb');
const mongo = require('../connect');

module.exports.createStudent = async (req,res,next) => {
    try{
        const insertedResponse = await mongo.selectedDb.collection("student").insertOne(req.body);
        res.send(insertedResponse);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateStudent = async (req,res,next) => {
    try{
        const updatedData = await mongo.selectedDb.collection("student")
                        .findOneAndUpdate({_id:ObjectId(req.params.studentId)}, 
                                          {$set: {...req.body}}, 
                                          {returnOriginal : true});
        res.send(updatedData);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getStudent = async (req,res,next) => {
   try{
       const productData = await mongo.selectedDb.collection("student").find().toArray();
       res.send(productData);
   } catch(err) {
    console.error(err);
    res.status(500).send(err);
   }
}

module.exports.deleteStudent = async (req,res,next) => {
    try{
        const deletedData = await mongo.selectedDb.collection("student").remove({_id: ObjectId(req.params.studentId)});
        res.send(deletedData);
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}