
export const isValidEmail = (email: string) => {
	return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
}

export const isValidURL = (url: string) => {
	const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
		'(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i');
		
	return pattern.test(url)
}


export const isValidPassword = (password: string) => {
	return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(password);
}

