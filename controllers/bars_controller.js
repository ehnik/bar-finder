const request = require('request')

exports.bars_get = function(req, res) {
    res.render("index", {pageData: {results : [] }} );
};

exports.bars_post = function(req, res) {


  if(req.body.zip){

    let url = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"

    let options = {
      'url': url,
      'headers': {
      'Authorization': 'Bearer r_-bgGtf5XsJOnljQMAUOL_Poca5ItxKlQrIrIgZsANTx_GhhspMn1onvjTE8O67W7xij0VZjuk3cc-1cna8n0gAaXSKepAHKs8aHeHQWAHiBZQICOWb1lSkco1vWnYx'
      }
    }

    let yelp = request.get(options, (error,response,body)=>{
      body = JSON.parse(body)
      console.log(body.businesses.length)
      return res.render("index", {pageData: {results : body.businesses}});
    })
  }
  else{
    return res.render("index", {pageData: {results : [] }});
  }
}
