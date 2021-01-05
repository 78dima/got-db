import React from 'react'
import './ErrorMessage.sass'
import img from './logo512.png'
export default function ErrorMessage() {
	return (
		<div>
			<img src={img} alt="error"/>
			<span>Something error</span>
		</div>
	)
}
