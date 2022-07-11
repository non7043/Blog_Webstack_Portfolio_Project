import React from "react";
import asmamaw from "../imgaes/asme.jpg";

const About = () => {
	return (
		<div>
			<p className="lead mt-10">
				Blogs are much appreciated across the internet. Blogs can be very
				valuable for businesses. Personal blogs have been made like a million
				times by Web Devs already, but user-generated blogs that have a built-in
				markdown editor, review algorithm and everything else needed to have a
				self-sustaining blog is something not many have made, yet is something
				that is a lot more valuable to businesses that want their blog to grow
				organically and bring in traffic.
			</p>
			<div class="row colspan-10">
				<div class="col-sm-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Asmamaw Yismaw</h5>
							<p class="card-text">
								Some Text About Asmamaw Yismaw
							</p>
							<a href="#" class="btn btn-primary">
								Read more
							</a>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">Abebe Tesfaye</h5>
							<p class="card-text">
                            Some Text About Abebe Tesfaye
							</p>
							<a href="#" class="btn btn-primary">
								Read more
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
