const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const err={ msg:null};

/* GET home page. */
const listData = [{
  item: "Watch Youtube"
},{
  item: "Learn React"
}, {
  item:"Watch Netflix"
}];
router.get('/', function(req, res) {
  res.render('todoList', {listData, err});
                });

router.post('/', function(req, res) {
  let newItem = req.body.item;
  console.log(newItem);
  if(!newItem){
    err.msg="Input empty"
    res.redirect("/");
    console.log(err.msg);
  }
  else {
    listData.push({'item':newItem});
    err.msg=null;
    res.redirect("/");
  }

});

module.exports = router;
