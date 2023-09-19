const express = require("express")
const router = express.Router()

const time_and_work = require("../Notes/time-and-work.json")
const problems_on_trains = require("../Notes/problems-on-trains.json")
const time_and_distance = require("../Notes/time-and-distance")

router.get("/:title",async(req, res)=>{
    try{
        const title = req.params.title;
        switch (title) {
            case "time-and-work":
                res.send(time_and_work)
                break

            case "problems-on-trains":
                res.send(problems_on_trains)
                break
                
            case "time-and-distance":
                res.send(time_and_distance)
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