import React, { useState } from 'react'
import {Col, Row, Container} from 'reactstrap';
import Header from '../Header/Header';
import RandomChar from '../RandomChar/RandomChar';
import CharacterPage from '../pages/CharacterPage';
import BooksPage from '../pages/BooksPage';
import BooksItem from '../pages/BooksItem';
import HousesPage from '../pages/HousesPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// export default class App extends Component {
// 	state = {
// 		isVisible: true,
// 		error: false
// 	}
// 	gotService = new gotService();

// 	componentDidCatch(){
		
// 		this.setState((state)=>{
// 			return{
// 				error: true
// 			}
// 		})
// 	}

// 	onEventClick = (e)=>{
// 		this.setState(({isVisible})=>{
// 			return{
// 				isVisible: !isVisible
// 			}
// 		})
// 	}

	
// 	render() {
// 		const {isVisible} = this.state;

// 		if(this.state.error){
// 			return <ErrorMessage/>
// 		}

// 		return (
// 			<Router>
// 				<div className="app">
// 					<Container>
// 						<Header/>
// 					</Container>
// 					<Container>
// 						<Row>
// 							<Col lg={{size: 5, offset: 0}}>
// 								{isVisible ? <RandomChar/> : null}
// 								<button onClick={this.onEventClick}>Toggle</button>
// 							</Col>
// 						</Row>
// 						<Switch>
// 							<Route path="/" exact component={()=><h1>Hello to DB</h1>}/>
// 							<Route path="/characters" component={CharacterPage}/>
// 							<Route path="/houses">
// 								<HousesPage/>
// 							</Route>
// 							<Route path="/books" exact>
// 								<BooksPage/>
// 							</Route>
// 							{/* <Route path="/books/:id" render={
// 									({match})=>{
// 										const {id} = match.params;
										
// 										return <BooksItem bookId={id}/>;
// 									}
// 								}/> */}
// 								<Route path="/books/:id" component={BooksItem}/>
// 						</Switch>
						
// 					</Container>
// 				</div>
// 			</Router>
// 		)
// 	}
// }

export default function App(){
	const [isVisible, setIsVisible] = useState(true);

	function onEventClick(){
		setIsVisible(prevVisible => !prevVisible);
	}

	return (
		<Router>
			<div className="app">
				<Container>
					<Header/>
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}}> 
							{isVisible ? <RandomChar/> : null}
							<button onClick={onEventClick}>Toggle</button>
						</Col>
					</Row>
					<Switch>
						<Route path="/" exact component={()=><h1>Hello to DB</h1>}/>
						<Route path="/characters" component={CharacterPage}/>
						<Route path="/houses">
							<HousesPage/>
						</Route>
						<Route path="/books" exact>
							<BooksPage/>
						</Route>
						{/* <Route path="/books/:id" render={
								({match})=>{
									const {id} = match.params;
									
									return <BooksItem bookId={id}/>;
								}
							}/> */}
							<Route path="/books/:id" component={BooksItem}/>
					</Switch>
				</Container>
			</div>
		</Router>
	)
}