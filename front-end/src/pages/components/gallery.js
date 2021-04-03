import React from "react";
import Tile from "./tile";

export default class Gallery extends React.Component {
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
