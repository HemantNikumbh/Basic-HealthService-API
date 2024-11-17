const express = require('express');
const router = express.Router();
const Service = require('../model/service-model');
const signUpSchema = require("../service-validation")
const validate = require("../middleware/service-middleware")


// Add a new service
router.post('/services',validate(signUpSchema), async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//read data from database

router.get("/allservices",async(req,res)=>{
  try{
    const alldata = await Service.find({})
    res.send(alldata)
  }catch(e){
    res.status(400).send(e)
}
})

// update data

router.patch("/update/:id",async(req,res)=>{
try{
  const _id = req.params.id;
  const updatedata = await Service.findByIdAndUpdate(_id,req.body,{
    new:true
  });
  res.send(updatedata)
}catch(e){
  res.status(400).send(e)
}

})

// delete data
// Delete a service
router.delete('/services/:id', async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.status(200).json({ message: "Service deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router