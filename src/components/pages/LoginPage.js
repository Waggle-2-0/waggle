import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginForm from '../login/LoginForm';

const LoginPage = () =>
{
	const { isLoading } = useAuth0();

	if (isLoading) return <div>Loading...</div>

	return (
	<div>
		<LoginForm />
	</div>
	);
}

export default LoginPage;