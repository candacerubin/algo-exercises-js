export const checkAccess = (user, password) => {
	if (user.password === password) {
		if (user.role === 'admin') {
			return true;
		} else return false;
	} else return false;
};

export const grantAccess = (name) => {
	console.log(`Congratulations, ${name}. Access granted.`);
};

export const denyAccess = (name) => {
	console.log(`Sorry, ${name}. Access denied.`);
};

module.exports = { checkAccess, grantAccess, denyAccess };
