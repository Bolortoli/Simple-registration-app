import React from "react";
import axios from "axios";

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
			activeID: 0,
			imageView: false,
		};
	}
	componentWillMount() {
		this._loadData("http://127.0.0.1:8000/ideas/");
	}
	// componentWillUnmount() {
	// 	this._loadData.abort();
	// }
	// Fetch data, then clone it to state using destructuring
	// XHR Fallback
	_loadData(url) {
		axios({
			url: url,
			method: "GET",
		})
			.then((res) => {
				this.setState({ data: [...res.data] });
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		// fetch(url, { method: "GET" })
		// 	.then((response) => response.json())
		// 	.then((json) => this.setState({ data: [...json.gallery] }))
	}
	_openImageView(id) {
		this.setState({
			activeID: id - 1,
			imageView: true,
		});
	}
	_closeImageView() {
		this.setState({
			imageView: false,
		});
	}
	render() {
		return (
			<div className="wrapper">
				{this.state.imageView ? (
					<ImageView
						{...this.state.data[this.state.activeID]}
						_closeImageView={this._closeImageView.bind(this)}
					/>
				) : (
					<Gallery
						data={this.state.data}
						_openImageView={this._openImageView.bind(this)}
					/>
				)}
			</div>
		);
	}
}

class ImageView extends React.Component {
	render() {
		return (
			<div className="imageview-wrapper fadeIn">
				<div className="imageview">
					<Image
						CSSClass="imageview-image"
						src={this.props.idea_picture}
						alt={this.props.idea_title}
					/>
					<div className="imageview-info">
						<button
							className="imageview-close"
							onClick={this.props._closeImageView}
						>
							x
						</button>
						<h2>{this.props.idea_title}</h2>
						<p>{this.props.idea_description}</p>
						{/* <h3>Tags</h3> */}
						{/* <ul>
							{this.props.tags.map((tag) => (
								<li>{tag}</li>
							))}
						</ul> */}
					</div>
				</div>
			</div>
		);
	}
}

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery fadeIn">
				{this.props.data.map((data) => (
					<Tile
						key={data.id}
						id={data.id}
						src={data.idea_picture}
						name={data.idea_title}
						desc={data.idea_title}
						_openImageView={this.props._openImageView}
					/>
				))}
			</div>
		);
	}
}

class Tile extends React.Component {
	_handleClick() {
		console.log(this.props);
		this.props._openImageView(this.props.id);
	}
	render() {
		return (
			<div className="gallery-tile" onClick={this._handleClick.bind(this)}>
				<div className="picture-info">
					<h2>{this.props.name}</h2>
					{/*<p>{this.props.desc}</p>*/}
				</div>
				<Image
					CSSClass="tile-image"
					src={this.props.src}
					alt={this.props.name}
				/>
			</div>
		);
	}
}

const Image = (props) => (
	<img className={props.CSSClass} src={props.src} alt={props.name} />
);
