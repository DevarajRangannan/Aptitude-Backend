const express = require("express")
const router = express.Router()

const Q_time_and_work = require("../Questions/time-and-work.json")


router.get("/:title",(req, res)=>{
    try{
        const title = req.params.title;
        switch (title) {
            case "time-and-work":
                res.send(Q_time_and_work)
                break
            default:
                res.status(404).send("404 error")
        }
        
    }catch(e){
        console.log(e);
        res.status(505).send("Something went wrong")
    }
    
})


module.exports = router