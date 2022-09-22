const path = require("path")

// GET
exports.getHTML= (req, res)=>{
    res.sendFile(path.join(__dirname,'..', 'views', 'triangulo.html'))
}

// POST
exports.isExamen = (req, res)=>{
    
    console.log(req.body);
    var inputAngulos = String(req.body.inputAngulos);
    var triangulo = true;

    let arr = inputAngulos.split(' ');
    //parseInt(arr[0], 10);
    
    if (parseInt(arr[0], 10) + parseInt(arr[1], 10) + parseInt(arr[2], 10) == 180 && parseInt(arr[0], 10) != 0 && parseInt(arr[1], 10) != 0 && parseInt(arr[2], 10) != 0){
        if(parseInt(arr[0], 10) == 90 ||parseInt(arr[1], 10) == 90 ||parseInt(arr[2], 10) == 90 ){
            triangulo = true;
        }
        
    }
        
    else{
        triangulo = false;
    }

    if(triangulo==true){
        res.send("Si es un tríangulo rectángulo")
    } else {
        res.send("No es :'V")
       }

      // console.log(arr[0]+arr[1]);

    
}

