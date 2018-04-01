exports.isLoggedIn = (req, res, next) => {
  if (req.user)
    next()
  else
    res.status(500).json({ 
      success: false,
      error: "need to login" 
    })
}
