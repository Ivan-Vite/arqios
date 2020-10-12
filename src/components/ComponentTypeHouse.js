import React, { Component } from 'react';
import '../assets/css/typeHouse.css'
// import styled from "@emotion/styled/macro";

// const Hover = styled.div({
//   opacity: 0,
//   transition: "opacity 350ms ease",
// });

// const DisplayOver = styled.div({
//   height: "100%",
//   left: "0",
//   position: "absolute",
//   top: "0",
//   width: "100%",
//   zIndex: 2,
//   transition: "background-color 350ms ease",
//   backgroundColor: "transparent",
//   padding: "20px 20px 0 20px",
//   boxSizing: "border-box",
// });

// const BigTitle = styled.h2({
//   textTransform: "uppercase",
//   fontFamily: "Helvetica",
// });

// const SubTitle = styled.h4({
//   fontFamily: "Helvetica",
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
// });

// const Paragraph = styled.p({
//   transform: "translate3d(0,50px,0)",
//   transition: "transform 350ms ease",
// });

// const Background = styled.div({
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   color: "#FFF",
//   position: "relative",
//   width: "500px",
//   height: "350px",
//   cursor: "pointer",
//   backgroundImage: "url(/bg.jpg)",
//   [`:hover ${DisplayOver}`]: {
//     backgroundColor: "rgba(0,0,0,.5)",
//   },
//   [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
//     transform: "translate3d(0,0,0)",
//   },
//   [`:hover ${Hover}`]: {
//     opacity: 1,
//   },
// });

// const CTA = styled.a({
//   position: "absolute",
//   bottom: "20px",
//   left: "20px",
// });

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
		// let { dataSource } = this.state;
		// if (this.state.isLoading) {
			return <div>Loading...</div>;
	// 	} else {
	// 		return (
	// 			<section className='section3'>
	// 			<div>
	// 				<h1> Más que un hogar </h1>
	// 				<h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl egestas elementum pretium turpis mattis mi a vivamus laoreet. Ut suspendisse aliquet vulputate nibh habitant sed tortor. Sit gravida </h2>
	// 				{dataSource.Items.map(item => (
	// 					<div className='divHouse' key={item.idHouse}>
	// 						<h1>{item.detail.streetAddress}</h1>
	// 						<h2>{item.detail.status}</h2>
	// 						<hr className='new1'/>
	// 						<canvas/>
	// 						<rect id="rect"/>
	// 						<h3>{item.detail.name}</h3>
	// 						<img alt={item.detail.name} src={item.detail.img} />
	// 						<h3>{item.detail.description}</h3>
							
	// 					</div>
						
	// 				))}
	// 			</div>
	// 			<div className="App">
	// 			<Background>
	// 			<DisplayOver>
	// 				<BigTitle>Really Cool Title!</BigTitle>
	// 				<Hover>
	// 				<SubTitle>You could vacation here!</SubTitle>
	// 				<Paragraph>
	// 					More description about this really cool random desert photo from unsplash!
	// 				</Paragraph>
	// 				<CTA>View More +</CTA>
	// 				</Hover>
	// 			</DisplayOver>
	// 			</Background>
    //   </div>
	// 			</section>
	// 		);
	// 	}
	}
}
export default ComponentTypeHouse;
