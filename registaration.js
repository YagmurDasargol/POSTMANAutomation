module.exports = {
  "Retrieve API (POST)": function (client) {
        var apiUrl = 'https://reqres.in/api/register;
 var postData = {'emailText':'passwordText'};
    client.apiPost(apiUrl, postData, function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      console.log(data.status);
	  client.setValue(browser.globals.registration.emailText, "eve.holt@reqres.in")
	  client.setValue(browser.globals.registration.passwordText, "pistol")
      client.assert.equal(response.statusCode, 201, "201 along with token");
	  .saveScreenshot(folderName+dateStamp+'successful registrationtion.png')
      client.end();
    });
	
	client.apiPost(apiUrl, postData, function (response) {
      console.log(response.body);
      var data = JSON.parse(response.body);
      console.log(data.status);
      client.assert.equal(response.statusCode, 400, "400 along with an error");
	  client.setValue(browser.globals.registration.emailText, "eve.holt@reqres.in")
	  .saveScreenshot(folderName+dateStamp+'unsuccessful registrationtion.png')

      client.end();
    });

  }
  
module.exports = apiGet;
module.exports = login_globals;
};