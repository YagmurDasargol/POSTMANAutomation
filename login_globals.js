var login = {
	
	// xpathler
	signinButton:  '*[@id="header"]/div[2]/div/div/nav/div[1]/a',
	emailTextbox: '//*[@id="email"]',
	passwordTextbox: '//*[@id="passwd"]',
	loginButton: '//*[@id="SubmitLogin"]/span'
	
};

var registration= {
	registerSuccessfulPOSButton: '//*[@id="console"]/div[1]/ul/li[11]',
	emailText: '//*[@id="console"]/div[2]/div[1]/pre/span[2]',
	passwordText:'//*[@id="console"]/div[2]/div[1]/pre/span[3]'
	
}

var getUserList= {
	registerUnSuccessfulPOSButton: '//*[@id="console"]/div[1]/ul/li[12]/a',
	email: '//*[@id="console"]/div[2]/div[1]/pre/span[1]'
}


module.exports = {
	login: login,
	registration: registration,
	getUserList: getUserList

}


