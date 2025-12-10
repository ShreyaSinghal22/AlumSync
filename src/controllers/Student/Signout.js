const express = require('express');



const studentSignout = ("/signout", (req, res) => {
  return res.json({
    message: "Signed out successfully",
    token: null
  });
});

module.exports = {
    studentSignout
}