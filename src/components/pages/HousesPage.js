import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import CharDetails, {Field} from '../CharDetails/CharDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock/RowBlock'

export default class BooksPage extends Component {

	state = {
		selectedChar: 1,
		error: false
	}

	gotService = new gotService();
 
	onItemSelected = (id)=>{
		this.setState((state)=>{
			return{
				selectedChar: id
			}
		})
	}
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

		const itemList = (
			<ItemList
				getData={this.gotService.getAllHouses}
				onItemSelected={this.onItemSelected}
				renderItem={this.renderItem}
			/>
		);
		const charDetails = (
			<CharDetails 
				getData={this.gotService.getHouse}
				charId={this.state.selectedChar}>
				<Field
					field="name"
					label="Name"
				/>
				<Field
					field="region"
					label="Region"
				/>
				<Field
					field="words"
					label="Words"
				/>
			</CharDetails>
		);
		
		return (
			<>
				<RowBlock 
					left={itemList} 
					right={charDetails}/>
			</>
		)
	}
}
