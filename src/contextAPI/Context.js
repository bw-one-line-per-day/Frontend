import React from 'react';

export const StoreContext = React.createContext({});

export ContextProvider = () => {

	const [userInfo, setUserInfo] = useState({username: '', password: '' });

	const context = {userInfo, setUserInfo};

	return (
		<StoreContext.Provider value={context}>
			{props.children}
		</StoreContext.Provider>
	);

}