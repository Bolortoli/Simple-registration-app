const Header = () => {
	return (
		<div>
			<Menu />
			<Title title="Adopt A Dog Today" />
			{/* <Video
				className="video"
				videoUrl={this.state.videoUrl}
				type={this.state.type}
			/> */}
			<div className="container">
				<div className="row" style={{ marginTop: "60px" }}>
					<div className="col-md-6">
						<p className="text-center text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
							quae earum inventore quo unde, tempora a laudantium assumenda quis
							minus praesentium rerum eaque itaque recusandae natus dicta iusto
							non aperiam.
						</p>
					</div>
					<div className="col-md-6">
						<p className="text-center text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
							quae earum inventore quo unde, tempora a laudantium assumenda quis
							minus praesentium rerum eaque itaque recusandae natus dicta iusto
							non aperiam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Menu = (props) => {
	return (
		<ul className="nav">
			<li>Home</li>
			<li>Blog</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	);
};

const Title = (props) => {
	return <h1 className="text">{props.title}</h1>;
};

export default Header;
