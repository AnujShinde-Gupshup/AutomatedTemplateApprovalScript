var request = require('request');

module.exports = {
	updateTemplateStatus: updateTemplateStatus
}

function updateTemplateStatus(appID){
	return new Promise(async function (resolve, reject) {
		var options = {
	  		'method': 'GET',
	  		'url': 'http://hsmmanager.gupshup.io/hsmmanager/template/register/status?appId='+appID,
	  		'headers': {}
		};
		request(options, function (error, response) {
		  	if (error) throw new Error(error);
		  	console.log(response.body);
		  	let body = response.body
		  	if(typeof(body)=='string'){body = JSON.parse(body)}
			if(body.status=="success"){
		  		return resolve(body)
		  	}
		  	else{
		  		return reject({ "status": "Failed", "Data": body})
		  	}
		});
	})
}