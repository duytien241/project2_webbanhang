import React from 'react';
import AccountManagerPage from './pages/AccountManagerPage/AccountManagerPage.jsx';
import AccountActionPage from './pages/AccountActionPage/AccountActionPage.jsx';
const routes = [
	{
		path : "/account-list",
		exact : false,
		main: () => <AccountManagerPage />
	},
	{
		path : '/account/add',
		exact : false,
		main: ({history}) => <AccountActionPage history={history}/>
	},
	{
		path : '/account/:id/edit',
		exact : false,
		main: ({match, history}) => <AccountActionPage match={match} history={history}/>
	}


];

export default routes;