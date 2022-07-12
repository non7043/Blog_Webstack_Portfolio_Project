import React from "react";
import asmamaw from "../images/asme.jpg";
import abebe from "../images/abebe.jpg";

const About = () => {
	return (
		<div className="container">
			<p className="lead mt-10">
				Blogs are much appreciated across the internet. Blogs can be very
				valuable for businesses. Personal blogs have been made like a million
				times by Web Devs already, but user-generated blogs that have a built-in
				markdown editor, review algorithm and everything else needed to have a
				self-sustaining blog is something not many have made, yet is something
				that is a lot more valuable to businesses that want their blog to grow
				organically and bring in traffic.
			</p>
			<div class="row">
				<div class="col-12 col-md-6 col-lg-6">
					<div class="card">
						<img src={asmamaw} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">Asmamaw Yismaw</h5>
							<p className="card-text">MERN Full Stack Developer</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-6">
					<div class="card">
						<img src={abebe} className="card-img-top img-circle" />
						<div className="card-body">
							<h5 className="card-title">Abebe Tesfaye</h5>
							<p className="card-text">MERN Full Stack Developer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
