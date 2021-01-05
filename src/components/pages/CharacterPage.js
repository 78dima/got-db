import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import CharDetails, {Field} from '../CharDetails/CharDetails';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../RowBlock/RowBlock'

export default class CharacterPage extends Component {

	state = {
		selectedChar: 130,
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
		return `${item.name} (${item.gender})`;
	}

	render() {
		if(this.state.error){
			return <ErrorMessage/>
		}

		const itemList = (
			<ItemList
				getData={this.gotService.getAllCharacters}
				onItemSelected={this.onItemSelected}
				renderItem={this.renderItem}
			/>
		);
		const charDetails = (
			<CharDetails 
				getData={this.gotService.getCharacter}
				charId={this.state.selectedChar}>
				<Field
					field="gender"
					label="Gender"
				/>
				<Field
					field="born"
					label="Born"
				/>
				<Field
					field="died"
					label="Died"
				/>
				<Field
					field="culture"
					label="Cultire"
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
