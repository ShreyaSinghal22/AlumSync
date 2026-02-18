const express = require('express');
const { AlumniSchema } = require('@models/Alumni');



const alumniSignout = ("/signout", (req, res) => {
  return res.json({
    message: "Signed out successfully",
    token: null
  });
});


module.exports = {
    alumniSignout
}