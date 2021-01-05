import React from 'react'
import gotService from '../../services/gotService';
import CharDetails, {Field} from '../CharDetails/CharDetails';

// export default class BooksItem extends Component {
// 	gotService = new gotService();
	
// 	render() {
// 		const {id} = this.props.match.params;
// 		return (
// 			<div>
// 				<CharDetails 
// 				getData={this.gotService.getBook}
// 				charId={id}>
// 					<Field
// 						field="name"
// 						label="Name"
// 					/>
// 					<Field
// 						field="numberOfPages"
// 						label="Number of pages"
// 					/>
// 					<Field
// 						field="publisher"
// 						label="Publisher"
// 					/>
// 					<Field
// 						field="released"
// 						label="Released"
// 					/>
// 				</CharDetails>
// 			</div>
// 		)
// 	}
// }

export default function BooksItem(props){
	const service = new gotService();

	const {id} = props.match.params;
		return (
			<div>
				<CharDetails 
				getData={service.getBook}
				charId={id}>
					<Field
						field="name"
						label="Name"
					/>
					<Field
						field="numberOfPages"
						label="Number of pages"
					/>
					<Field
						field="publisher"
						label="Publisher"
					/>
					<Field
						field="released"
						label="Released"
					/>
				</CharDetails>
			</div>
		)
}