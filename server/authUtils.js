exports.isLoggedIn = (req, res, next) => {
  if (req.user)
    res.status(200).json({
      user
    })
  else
    res.status(500).json({ 
      success: false,
      error: "need to login" 
    })
}
    