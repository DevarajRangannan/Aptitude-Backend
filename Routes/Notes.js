const express = require("express")
const router = express.Router()

router.get("/time-and-work",async(req, res)=>{
    try{
        res.send("time-and-work")
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
    
})

module.exports = router