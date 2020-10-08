import React, { Component } from 'react';
import '../assets/css/typeHouse.css'

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
				<section className='section3'>
				<div>
					<h1> Más que un hogar </h1>
					<h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl egestas elementum pretium turpis mattis mi a vivamus laoreet. Ut suspendisse aliquet vulputate nibh habitant sed tortor. Sit gravida </h2>
					{dataSource.Items.map(item => (
						<div className='divHouse' key={item.idHouse}>
							<h1>{item.detail.streetAddress}</h1>
							<h2>{item.detail.status}</h2>
							<hr className='new1'/>
							<canvas/>
							<rect id="rect"/>
							<h3>{item.detail.name}</h3>
							<img alt={item.detail.name} src={item.detail.img} />
							<h3>{item.detail.description}</h3>
							
						</div>
						
					))}
				</div>
				</section>
			);
		}
	}
}
export default ComponentTypeHouse;
