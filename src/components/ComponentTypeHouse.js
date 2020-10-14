import React, { Component } from 'react';
import '../assets/css/typeHouse.css'
import styled from "@emotion/styled/macro";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class ComponentTypeHouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			dataSource: {}
		};
	}
	async componentDidMount() {
		try {
			const response = await fetch('https://7lno3l4yn9.execute-api.us-east-2.amazonaws.com/Test');
			let responseJson = await response.json();
			this.setState(
				{
					isLoading: false,
					dataSource: responseJson
				},
				function() {}
			);
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		let { dataSource } = this.state;
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className='section3'>
					<div class="row">
						<div class="col-md-6 offset-md-3">
							<h1> Más que un hogar </h1>
						</div>
					</div>
				<CardDeck>
					{dataSource.Items.map(item => (
						<Card key={item.idHouse}>
							<Card.Img variant="top" src={item.detail.img} />
							<Card.Title>{item.detail.streetAddress}</Card.Title>			
						</Card>						
					))}
				</CardDeck>
				</div>
			);
		}
	}
}
export default ComponentTypeHouse;
