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
				<section class='TypeHouse' >
				<div>
					<p> Más que un hogar </p>
					{dataSource.Items.map(item => (
						<div className="boxes" key={item.idHouse}>
							<h1>{item.detail.name}</h1>
							<h1>{item.detail.status}</h1>
							<img alt={item.detail.name} src={item.detail.img} />
							<h1>{item.detail.img}</h1>
							<h1>{item.detail.description}</h1>
							<h1>{item.detail.streetAddress}</h1>
						</div>
					))}
				</div>
				</section>
			);
		}
	}
}
export default ComponentTypeHouse;
