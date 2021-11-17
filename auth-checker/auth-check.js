// Helper function practice exercise.
// Access should only be given to the users with the 'admin' role.

import { checkAccess, grantAccess, denyAccess } from './auth-helper.js';

function auth(user, password) {
	if (checkAccess(user, password)) {
		grantAccess(user.name);
	} else denyAccess(user.name);
}

const regularUser = {
	name: 'John',
	role: 'user',
	password: '123456',
};

const adminUser = {
	name: 'Sally',
	role: 'admin',
	password: 'BzL171a#*8!t',
};

console.log(`Authenticating ${regularUser}!`);
console.log(auth(regularUser, '123456'));

console.log(`Authenticating ${adminUser}!`);
console.log(auth(adminUser, 'BzL171a#*8!t'));
