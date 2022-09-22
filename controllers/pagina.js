const path = require("path")

// GET
exports.getHTML= (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'views', 'info.html'))
}

// POST
exports.isExamen = (req, res)=>{
    console.log(req.body);
    //res.json({estado:"exitoo"});
}
