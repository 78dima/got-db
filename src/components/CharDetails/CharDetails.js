import React, { useState, useMemo, useCallback, useEffect} from 'react'
const Field = (props)=>{
	const {field, data,label} = props;
	return(
		<li className="list-group-item d-flex justify-content-between">
			<span className="term">{label} </span>
			<span>{data[field]}</span>
		</li>
	)
}

export {
	Field
}

// export default class CharDetails extends Component {
// 	state = {
// 		char: null
// 	}

// 	componentDidMount(){
// 		this.updateChar();
// 	}
// 	componentDidUpdate(prevProps){
// 		if(this.props.charId !== prevProps.charId){
// 			this.updateChar();
// 		}
// 	}

// 	updateChar(){
// 		const {charId, getData} = this.props;

// 		if(!charId){
// 			return;
// 		}

// 		getData(charId)
// 			.then((char)=>{
// 				this.setState((state)=>{
// 					return{
// 						char: char
// 					}
// 				})
// 			})
// 	}
	
// 	render() {
// 		if(!this.state.char){
// 			return <span className="select-error">Please select a character</span>
// 		}
		
// 		const {char: {name}} = this.state;
		
// 		return (
// 			<div className="char-details rounded">
// 				<h4>{name}</h4>
// 				<ul className="list-group list-group-flush">
// 					{
// 						React.Children.map(this.props.children, (child)=>{
// 							return React.cloneElement(child, this.state)
// 						})
// 					}
// 				</ul>
// 			</div>
// 		)
// 	}
// }

export default function CharDetails({charId, getData, children}, props) {
	const [char, setChar] = useState(null);
	const fetchData = useCallback(()=>{
		if(!charId){
			return;
		}
		getData(charId)
			.then((char)=>{
				setChar(char)
			})
	},[charId,getData]);

	// useMemo(()=>{
	// 	fetchData();
	// 	console.log('fetching');
	// },[fetchData]);

	useEffect(()=>{
		fetchData();
		console.log('fetching');
	},[charId]);


	if(!char){
		return <span className="select-error">Please select a character</span>
	}
	
	return (
		<div className="char-details rounded">
			<h4>{char.name}</h4>
			<ul className="list-group list-group-flush">
				{
					React.Children.map(children, (child)=>{
						return React.cloneElement(child, {data: char})
					})
					
				}
			</ul>
		</div>
	)
}
