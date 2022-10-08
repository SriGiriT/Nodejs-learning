const authorize = (req, res, next)=>{
  const {user} = req.query
  console.log(user, req.query)
  if(user === "giri"){
    req.user = {name:"giri", id:137}
    next()
  }else{
    res.status(401).send("Unauthorize")
  }
}

module.exports = authorize