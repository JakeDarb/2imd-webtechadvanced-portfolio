const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.json({
        "status": "success",
        "message": "Getting a new message",
        "data": {
            "messages": [
                "dit is een test",
                "werkt goed zeg",
                "how you doing",
                "I'm a barbie girl"
            ]
        }
    });
});

router.get("/:id", (req, res)=>{
    res.send("get using id");
});

router.post("/", (req, res)=>{
    res.send("success");
});

router.put("/:id", (req, res)=>{
    res.send("update using id");
});

router.delete("/:id", (req, res)=>{
    res.send("delete using id");
});

module.exports = router;