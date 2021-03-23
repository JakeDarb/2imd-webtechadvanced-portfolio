const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("get basic");
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