import React, { Component } from 'react';
import '../assets/css/typeHouse.css';
import '../assets/css/cards.scss';
import { BiStreetView } from 'react-icons/bi';
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
				<div class="row">
					<BiStreetView/>
					<div class="col-md-12 offset-md-3 card__collection clear-fix">
						{dataSource.Items.map(item => (
								<div class="cards cards--three">
									<img src={item.detail.img}/>
									<span class="cards--three__rect-1">
										<span class="shadow-1"></span>
											<p>{item.detail.price}<br/>Recorrido virtual</p>
									</span>
									<span class="shadow-2"></span>
										<p>{item.detail.streetAddress}</p>
									<span class="cards--three__rect-2">
										<span class="shadow-2"></span>
									</span>
									<span class="cards--three__circle"></span>
									<ul class="cards--three__list">
									<li><i class="fab fa-facebook-f">Instalaciones inteligentes</i></li>
									<li><i class="fab fa-facebook-f">Conectividad completa</i></li>
									<li><i class="fab fa-twitter">Baños {item.detail.bathrooms}</i></li>
									<li><i class="fab fa-linkedin-in">Habitaciones</i></li>
									</ul>
								</div>		
							))}
					</div>
					</div>
				
			);
		}
	}
}
export default ComponentTypeHouse;
