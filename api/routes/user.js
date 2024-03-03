const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router =require("express").Router();

//Update 

router.put("/:id",verifyTokenAndAuthorization,(req,res)=>{
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString();
    }
    try{

    }catch(err){
        console.log(first)
    }
});

module.exports = router;
