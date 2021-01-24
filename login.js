/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to http://automationpractice.com/ and do scenarious for login this site.
 *   
 */
function XmlProcessor(xmlDocument){
	var self = this;
	var profiles =  xmlDocument.root.children[0].children[0].children;
	var credentials =[];
	
	this.getCredentialsByCapability = function(){
		var capabilityList = arguments;

		if(arguments.length===0){
			console.error('Provide at least one capability in call to "getCredentialsByCapability" to use this feature');
			return;
		}
		
	    profiles.forEach(function(node){
			var childNodes = node.children;
			self.allCredentials(childNodes,capabilityList);
		});
		return credentials;				    

	};
	
	this.allCredentials = function(childNodes,capabilityList){
		childNodes.forEach(function(item){       
				if(item.name === 'capability'){
					var nodeCapabilities = item.content.split(',');
					var searchConditionMet = true;
					for(var i=0;i<capabilityList.length;i++){
						searchConditionMet = searchConditionMet && (nodeCapabilities.indexOf(capabilityList[i]) >= 0);
					}
					if(searchConditionMet){
						var credential = {};
						childNodes.forEach(function(childNodeItem){
							credential[childNodeItem.name] = childNodeItem.content;
						});
						credentials.push(credential);
						
 					}
				}  				
			});
	};
} 

 function TestController(){
	//var date = new Date();
	//var dateStamp = date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()+'_'+date.getHours()+'.'+date.getMinutes();
	var folderName = 'C:/dev/nightwatch/node_modules/nightwatch/examples/tests/AutomationPractice/screenshots/'	
	
		//xml parser initialization

 	//var fs = require('fs');
	var parse = require('xml-parser');
	var xml = fs.readFileSync('examples/Tests/AutomationPractice/TestDataXmlFile.xml', 'utf8');
	//var inspect = require('util').inspect;
    //var xmlDocument = parse(xml);
	//var xmlProcessor = new XmlProcessor(xmlDocument); 	
	/*
		this.switchWindow = function(browser, windowIndex){ //windowIndex starts from 0
				browser.windowHandles(function(result){
					this.switchWindow(result.value[windowIndex]);
				});	
				return browser;
		};
		
	//define test data needs-- bu senaryoda username password olmadığı için bazı alanlar devre dışı kalmıştır.
 	var result = xmlProcessor.getCredentialsByCapability('hasQuantity');
	console.log(result[0].username);
	console.log(result[0].password);*/
	
	tags': [login] //yazılan test caselerde google tag test caselerde özellikle bu adımı koşmak istiyorsan kullanılır.

	//Signin with no credentials - ensure error message is displayed
	this.login = function(browser){
			browser	
				.useXpath()
				.url('http://automationpractice.com/index.php')
				.click(browser.globals.loginPage.signinButton)
				.waitForElementVisible(browser.globals.login.signinButton,10000)
				.setValue(browser.globals.login.emailTextbox, "")
				.setValue(browser.globals.login.passwordTextbox, "")
				.pause(2000)
				.click(browser.globals.login.loginButton)
				.waitForElementVisible(browser.globals.login.signinButton,10000)
				.assert.equal(response.'An email address required')
				.saveScreenshot(folderName+dateStamp+'loginwithoutcredentials-An email address required.png')		
	}
	
	
	//Signin with email and empty password.Ensure the correct message displayed
			this.login = function(browser){
			browser	
				.useXpath()
				.url('http://automationpractice.com/index.php')
				.waitForElementVisible(browser.globals.login.emailTextbox,10000)
				.setValue(browser.globals.login.emailTextbox, "yagmurdasargol@gmail.com")
				.setValue(browser.globals.login.passwordTextbox, "")
				.pause(2000)
				.click(browser.globals.login.loginButton)
				.assert.equal(response.'An email address required')
				.saveScreenshot(folderName+dateStamp+'loginwithemptypassword.png')		
	}
	
		//Signin with password and empty email.Ensure the correct message displayed
			this.login = function(browser){
			browser	
				.useXpath()
				.url('http://automationpractice.com/index.php')
				.waitForElementVisible(browser.globals.login.emailTextbox,10000)
				.setValue(browser.globals.login.emailTextbox, "")
				.setValue(browser.globals.login.passwordTextbox, "1213")
				.pause(2000)
				.click(browser.globals.login.loginButton)
				.assert.equal(response.'An email address required')
				.saveScreenshot(folderName+dateStamp+'loginwithemptyemail.png')		
	}
	
			//Signin with incorrect credentials.Ensure the correct message displayed
			this.login = function(browser){
			browser	
				.useXpath()
				.url('http://automationpractice.com/index.php')
				.waitForElementVisible(browser.globals.login.emailTextbox,10000)
				.setValue(browser.globals.login.emailTextbox, "test")
				.setValue(browser.globals.login.passwordTextbox, "1213")
				.pause(2000)
				.click(browser.globals.login.loginButton)
				.assert.equal(response.'An email address required')
				.saveScreenshot(folderName+dateStamp+'loginwithincorrectcredentials.png')		
	}

 
};

  var testController = new TestController();

	module.exports = {
			1-	loginPage..' : testController.login,
				
		};