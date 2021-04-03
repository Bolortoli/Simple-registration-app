import React from "react";

export default class ImageView extends React.Component {
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

export const Image = (props) => (
	<img className={props.CSSClass} src={props.src} alt={props.name} />
);
