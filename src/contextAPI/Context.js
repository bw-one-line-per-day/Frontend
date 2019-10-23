import React,{useState} from 'react';

export const StoreContext = React.createContext({});

export const ContextProvider = (props) => {

	const [userInfo, setUserInfo] = useState({username: 'chineek', password: '123344' });

	const context = {userInfo, setUserInfo};
	

	return (
		<StoreContext.Provider value={context}>
			{props.children}
		</StoreContext.Provider>
	);

}