import React from "react";
import { Image } from "./image-view";

export default class Tile extends React.Component {
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
