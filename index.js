//https://dev-smsinbox.gupshup.io/dashboard/metabase/question/392
//https://dev-smsinbox.gupshup.io/dashboard/metabase/question/393

// var templateList = require('./Template-Applist.json')
var templateList = require('./dummy.json')
var api = require('./api.js')
const fs = require('fs')
const app = require('express')();
const port = 8081

app.listen(port, ()=> {
    console.log("listening on port: "+ port);
    findTemplateListAndUpdate();
})

let today = new Date();
let yesterday = new Date();
let daybefore = new Date();

yesterday.setDate(today.getDate() - 1);
daybefore.setDate(today.getDate() - 2);

// console.log(today.getTime())
// console.log(yesterday.getTime())
// console.log(daybefore.getTime())

var findTemplateListAndUpdate = function() {
    let count = 0
    templateList.forEach(async(ele)=>{
        if(ele.AppID && (ele.ModifiedOn <= daybefore)){
            resp = await api.updateTemplateStatus(ele.AppID)
            if(resp == "success"){
                console.log(response)
                count = count + 1
            }
        }
    })
    console.log(count," Apps updated for template list")
}
