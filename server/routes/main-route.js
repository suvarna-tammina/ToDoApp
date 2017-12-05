var app = require('express');
var router = app.Router();
var fs=require('fs');
var filePath="./data/itemsList.json";


// This responds a GET request for the /getCall page.
router.get('/getList', function (req, res) {
	try{
      // console.log("req pram:"+JSON.stringify(req));
      console.log('filePath:'+filePath);
       fs.exists(filePath, function(exists){
        console.log('exists:'+exists);
        if(exists){ // results true
           fs.readFile(filePath, {encoding: "utf8"}, function(err, data){
              if(err){
                 console.log('err:'+err)
              }              
              console.log('success:'+data);
              res.send({"result":"success","data":data});
           })
        }
     });
   
        
	 }catch(e){
	 	console.log("exception in index.js app.getCall==>"+JSON.stringify(e));
	 }

 })

 router.get('/deleteItem/:userId', function (req, res) {
	try{
       console.log("req pram:"+JSON.stringify(req.params.userId));
      console.log('filePath:'+filePath);
       fs.exists(filePath, function(exists){
        console.log('exists:'+exists);
        if(exists){ // results true
           fs.readFile(filePath, {encoding: "utf8"}, function(err, data){
              if(err){
                 console.log('err:'+err)
              }              
              console.log('success:'+data);
             // function remove(array, element) {
           //     return 

             var dataExist=JSON.parse(data),newData=[];

             if(dataExist){
                 console.log('JSON.parse:'+JSON.stringify(dataExist));
               
                     //:{};
                     newData=JSON.stringify(dataExist.filter(e => 
                        e.userId !== parseInt(req.params.userId)))
                        console.log('after filter:'+newData );
            }
              fs.writeFile(filePath,(newData),function(err,res){
                console.log("result is err::"+err+" res:"+res);
                })
              res.send({"result":"success","data":newData});
           })
        }
     });
   
        
	 }catch(e){
	 	console.log("exception in index.js app.getCall==>"+JSON.stringify(e));
	 }

 })
// This responds a POST request for the /postCall page.
router.get('/addItem', function (req, res) {
	try{
                 
                var jsArr=JSON.parse(req.query.data);//[{"chickenId":"bbbb","weight":"2","eggs":"2","grains":"2","water":"2","date":"9/24/2016, 1:01:28 AM"},{"chickenId":"cccc","weight":"3","eggs":"3","grains":"3","water":"3","date":"9/24/2016, 1:02:26 AM"},{"chickenId":"1111","weight":"3","eggs":"4","grains":"3","water":"4","date":"9/24/2016, 11:59:36 PM"},{"chickenId":"bbbb","weight":"3","eggs":"3","grains":"3","water":"3","date":"9/25/2016, 12:04:02 AM"},{"chickenId":"bbbb","weight":"4","eggs":"4","grains":"4","water":"4","date":"9/25/2016, 12:06:19 AM"}];
      console.log("post req pram:"+JSON.stringify(req.query.data));
      fs.exists(filePath, function(exists){
        console.log('exists:'+exists);
        if(exists){ // results true
           fs.readFile(filePath, {encoding: "utf8"}, function(err, data){
              if(err){
                 console.log('err:'+err)
              }              
              console.log('success:'+data);
             // function remove(array, element) {
           //     return 

             var dataExist=JSON.parse(data),newData=[];

             if(dataExist){
                 console.log('JSON.parse:'+JSON.stringify(dataExist));
                 console.log('jsArr:'+JSON.stringify(jsArr));
                 jsArr['userId']=Math.floor(Math.random()*10000);
                    dataExist.push(jsArr);
                     //:{};
                     newData=JSON.stringify(dataExist)
                        console.log('after filter:'+newData );
            }
              fs.writeFile(filePath,(newData),function(err,res){
                console.log("result is err::"+err+" res:"+res);
                })
              res.send({"result":"success","data":newData});
           })
        }
     })
	}catch(e){
		console.log("exception in index.js app.postCall==>"+JSON.stringify(e))
	}
           })

router.get('/updateItem', function (req, res) {
            try{
                         
                        var jsArr=JSON.parse(req.query.data);//[{"chickenId":"bbbb","weight":"2","eggs":"2","grains":"2","water":"2","date":"9/24/2016, 1:01:28 AM"},{"chickenId":"cccc","weight":"3","eggs":"3","grains":"3","water":"3","date":"9/24/2016, 1:02:26 AM"},{"chickenId":"1111","weight":"3","eggs":"4","grains":"3","water":"4","date":"9/24/2016, 11:59:36 PM"},{"chickenId":"bbbb","weight":"3","eggs":"3","grains":"3","water":"3","date":"9/25/2016, 12:04:02 AM"},{"chickenId":"bbbb","weight":"4","eggs":"4","grains":"4","water":"4","date":"9/25/2016, 12:06:19 AM"}];
              console.log("post req pram:"+JSON.stringify(req.query.data));
              fs.exists(filePath, function(exists){
                console.log('exists:'+exists);
                if(exists){ // results true
                   fs.readFile(filePath, {encoding: "utf8"}, function(err, data){
                      if(err){
                         console.log('err:'+err)
                      }              
                      console.log('success:'+data);
                     // function remove(array, element) {
                   //     return 
        
                     var dataExist=JSON.parse(data),newData=[];
        
                     if(dataExist){
                         console.log('JSON.parse:'+JSON.stringify(dataExist));
                         console.log('jsArr:'+JSON.stringify(jsArr));
                         //jsArr['userId']=Math.floor(Math.random()*10000);
                          //  dataExist.push(jsArr);
                             //:{};
                            dataExist.forEach((element,inx) => {
                                
                                if(element.userId == parseInt(jsArr.userId)){
                                    dataExist[inx]=jsArr;
                                }
                            })
                                console.log('after filter:'+dataExist );
                             newData=JSON.stringify(dataExist)
                                console.log('after filter:'+newData );
                    }
                      fs.writeFile(filePath,(newData),function(err,res){
                        console.log("result is err::"+err+" res:"+res);
                        })
                      res.send({"result":"success","data":newData});
                   })
                }
             })
            }catch(e){
                console.log("exception in index.js app.postCall==>"+JSON.stringify(e))
            }
                   })
module.exports = router;