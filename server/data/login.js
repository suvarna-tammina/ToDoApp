

exports.loginData = function (req, res) {
   var reqObj=JSON.parse(req.query.data);
  
    return Object.assign({}, defaultData, actualData.find(x => (x.username ==reqObj.username && x.password ==reqObj.password)))
 

}

var defaultData = 
    {
        "username":"",
        "password":"",
        "valid":false
    }
;
var actualData= [{
    "username":"admin",
    "password":"admin",
    "valid":true
},
{
    "username":"admin1",
    "password":"admin1",
    "valid":true
},
{
    "username":"admin2",
    "password":"admin2",
    "valid":true
}
];


