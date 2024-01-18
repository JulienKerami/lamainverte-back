const jwt = require('jsonwebtoken');


const verify = (req, res, next) => {
  const token = req.header('Authorization');

  if(!token) return res.status(400).send('Access denied');

  const tokenValue = token.split(' ')[1];

  try{
    const verified = jwt.verify(tokenValue, process.env.SECRET_KEY);
    req.user = verified;
    next();
  }

  catch(err){
    res.json(err);
  }
};

module.exports = verify;