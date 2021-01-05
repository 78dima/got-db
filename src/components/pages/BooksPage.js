import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

class BooksPage extends Component {

	state = {
		error: false
	}

	gotService = new gotService();
 
	componentDidCatch(){
		this.setState((state)=>{
			return{
				error: true
			}
		})
	}

	renderItem(item){
		return item.name;
	}

	render() {
		if(this.state.error){
			return <ErrorMessage/>
		}

		return (
			
			<ItemList
				getData={this.gotService.getAllBooks}
				onItemSelected={(itemId)=>{
					this.props.history.push(itemId)
				}}
				renderItem={this.renderItem}
			/>
			
		)
	}
}
export default withRouter(BooksPage);