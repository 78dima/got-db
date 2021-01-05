import React, { useState,useEffect } from 'react'
import Spiner from '../spinner/Spinner';
import PropTypes from 'prop-types';

// export default class ItemList extends Component {
// 	state = {
// 		data: null
// 	}

// 	componentDidMount() {
// 		const {getData} = this.props;

// 		getData()
// 			.then((data)=>{
// 				this.setState((state)=>{
// 					return {
// 						data: data
// 					}
// 				})
// 			})
// 	}

// 	renderItems(arr){
// 		return arr.map((item)=>{
// 			const {id} = item;
// 			const label = this.props.renderItem(item);
// 			return (
// 				<li 
// 					onClick={()=>this.props.onItemSelected(id)}
// 					key={id} 
// 					className="list-group-item">
// 					{label}
// 				</li>
// 			)
// 		})
// 	}
 
// 	render() {
// 		const {data} = this.state;
// 		if(!data){
// 			return <Spiner/>
// 		}
// 		const items = this.renderItems(data);
			
// 		return (
// 			<ul className='item-list list-group'>
// 				{items}
// 			</ul>
// 		)
// 	}
// }

export default function ItemList({getData, renderItem, onItemSelected}){
	const [data, setData] = useState(null);

	useEffect(()=>{
		getData()
			.then((data)=>{
				setData(data);
			})
	},[getData]);

	function renderItems(arr){
		return arr.map((item)=>{
			const {id} = item;
			const label = renderItem(item);
			return (
				<li 
					onClick={()=>onItemSelected(id)}
					key={id} 
					className="list-group-item">
					{label}
				</li>
			)
		})
	}

	if(!data){
		return <Spiner/>
	}

	const items = renderItems(data);
		
	return (
		<ul className='item-list list-group'>
			{items}
		</ul>
	)
}

ItemList.defaultProps = {
	onItemSelected: ()=>{
	}
}

ItemList.propTypes = {
	onItemSelected: PropTypes.func
}
