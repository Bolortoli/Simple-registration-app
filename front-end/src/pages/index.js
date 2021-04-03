import React from "react";
import axios from "axios";

import ImageView, { Image } from "./components/image-view";
import Gallery from "./components/gallery";

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
