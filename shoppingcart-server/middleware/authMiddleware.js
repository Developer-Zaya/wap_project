const User = require("../models/users");

const middleware = ( router ) =>{
    router.use((req,res,next)=>{
        const authToken=req.get("auth");
        const user = User.auth(authToken || " , ");
        if(user){
            next();
        }else{
            res.status(401).json({ error: "not valid token" ,status:401});
        }

    })
}
module.exports = middleware;