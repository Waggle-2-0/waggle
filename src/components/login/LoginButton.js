import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
	const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		!isAuthenticated && (
			<button onClick={() =>
				{
					
					loginWithRedirect();
					
					
				}
			}>
				Log In
			</button>
		)
	)
}

export default LoginButton
