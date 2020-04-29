
import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';

//routing
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

//components
import Header from './ToolBox/Header/Header.js'
import Loading from './ToolBox/Loading/Loading.js'

// Dynamic Imports 
const Home = React.lazy(() => import('./Pages/Home/Home.js'))
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard.js'))

function App() {
	
	return (
		<Router basename={process.env.PUBLIC_URL}>
			{/* constant */}
			<Header />
			{/* variable paths */}
			<Suspense fallback={<Loading />}>
				<Route exact path='/' component={Home} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/loading' component={Loading} />
			</Suspense>
		</Router>
    )
}

export default App
