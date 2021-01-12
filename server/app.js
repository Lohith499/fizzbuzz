const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyparser.json())


app.post('/calculate', function (req, res, next) {
    const body = req.body;
    let x = body.data
    x = x.split(",");
    const result=[];
    for (let i = 0; i < x.length; i++) {
        if(Number(x[i])){
            let div3=x[i]%3==0;
            let div5=x[i]%5==0;
            if(div3 && div5){
              result.push("FizzBuzz")
            }else if(div3){
              result.push("Fizz")
            }else if(div5){
              result.push("Buzz")
            }else{
              result.push(`Divided ${x[i]} by 3`);
              result.push(`Divided ${x[i]} by 5`);
            }
        }else{
            result.push("Invalid Item");
        }
    }
    res.status(200).json({result: result})
})




app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 80')
})



