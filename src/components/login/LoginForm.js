import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

import { useAuth0 } from '@auth0/auth0-react';


const LoginForm = () =>
{
	
	const { isLoading } = useAuth0();

	if (isLoading) return <div>Loading...</div>
	
	return (
		<form>
			<div className='welcome'>
				<h2>Welcome to Waggle</h2>
				<div className='form-buttons'>
					<LoginButton />
					<LogoutButton />
					<Profile />
				</div>
			</div>
		</form>
	)
}

export default LoginForm
