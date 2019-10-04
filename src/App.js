import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Room from './routes/Room';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
	return (
		<BrowserRouter>
			<Container fluid={true} className='px-0'>
				<Route exact path="/" component={Home}></Route>
				<Route path="/room/:room_id" component={Room}></Route>
			</Container>
		</BrowserRouter>
	);
}

export default App;
