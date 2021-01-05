import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import gotService from '../../services/gotService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './RandomChar.sass';

const service = new gotService();

export default function RandomChar({interval}){
	const [char, setChar] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(()=>{
		function updateChar(){
			const id = Math.floor(Math.random()*140 + 25); // 25 - 140
			service.getCharacter(id)
			.then(onCharLoaded)
			.catch(onError)
		}
		updateChar();

		let timerId = setInterval(updateChar, interval);
		return()=>{
			clearInterval(timerId);
		}
	},[interval]);

	function onCharLoaded(char){
		setChar(char);
		setLoading(false);
	}

	function onError(){
		setError(true);
		setLoading(false);
	}

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error) ? <View char={char}/> : null;
	return (
		<>
			<div className="random-block rounded">
				{errorMessage}
				{spinner}
				{content}
			</div>
		</>
	)
	
}
// export default class RandomChar extends Component {

// 	componentDidMount(){
// 		this.updateChar();
// 		this.timerId = setInterval(this.updateChar, this.props.interval);
// 	}
// 	componentWillUnmount() {
// 		clearInterval(this.timerId);
// 	}

// 	gotService = new gotService();

// 	state = {
// 		char: {},
// 		loading: true,
// 		error: false
// 	};

// 	onCharLoaded = (char)=>{
// 		this.setState((state)=>{
// 			return {
// 				char: char,
// 				loading: false
// 			}
// 		})
// 	}

// 	onError = ()=>{
// 		this.setState((state)=>{
// 			return{
// 				error: true,
// 				loading: false
// 			}
// 		})
// 	};
// 	updateChar = ()=>{
// 		const id = Math.floor(Math.random()*140 + 25); // 25 - 140
// 		this.gotService.getCharacter(id)
// 		.then(this.onCharLoaded)
// 		.catch(this.onError)
// 	}
// 	render() {
// 		const {char, loading, error} = this.state;
// 		const errorMessage = error ? <ErrorMessage/> : null;
// 		const spinner = loading ? <Spinner/> : null;
// 		const content = !(loading || error) ? <View char={char}/> : null;
// 		return (
// 			<>
// 				<div className="random-block rounded">
// 					{errorMessage}
// 					{spinner}
// 					{content}
// 				</div>
// 			</>
// 		)
// 	}
// }

RandomChar.defaultProps = {
	interval: 5000
}

RandomChar.propTypes = {
	interval: PropTypes.number
}

function View(props){
	const  {name, gender, born, died, culture} = props.char;
	return (
		<>
			<h4>Random Character: {name}</h4>
			<ul className="list-group list-group-flush">
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Gender </span>
					<span>{gender}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Born </span>
					<span>{born}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Died  </span>
					<span>{died}</span>
				</li>
				<li className="list-group-item d-flex justify-content-between">
					<span className="term">Culture </span>
					<span>{culture}</span>
				</li>
			</ul>
		</>
	)
}