import React from 'react';

// Player template
function PlayerItems({articles}) {
	if (articles.length) {
		return (
			<section class="player">
				{articles.map((item, i) => (
					<article key={i}>
						<h1>{item.title}</h1>
						<figure>
							<div style={{backgroundImage: `url(${item.img})` }}>&amp;</div>
							<img src={item.img} alt={item.userName} />
						</figure>
						<figcaption>
							<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//{{uri}}&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"></iframe>
							<p>{item.description}</p>

							<fieldset>
								<legend>Rating</legend>

								<input type="radio" name="rating" id="rating-0"/>
								<label for="rating-0">
									Sad! 
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
										<circle cx="32" cy="32" r="30" fill="#ef5350"/>
										<path d="m41 49.7c-5.8-4.8-12.2-4.8-18 0-.7.6-1.3-.4-.8-1.3 1.8-3.4 5.3-6.5 9.8-6.5s8.1 3.1 9.8 6.5c.5.8-.1 1.8-.8 1.3" fill="#302424"/>
										<path d="m10.2 24.9c-1.5 4.7.6 10 5.3 12.1 4.6 2.2 10 .5 12.7-3.7l-6.9-7.7-11.1-.7" fill="#fff"/>
										<g fill="#302424">
											<path d="m14.2 25.8c-1.4 2.9-.1 6.4 2.8 7.7 2.9 1.4 6.4.1 7.7-2.8 1-1.9-9.6-6.8-10.5-4.9"/>
											<path d="m10.2 24.9c1.6-1 3.5-1.5 5.4-1.5 1.9 0 3.8.5 5.6 1.3 1.7.8 3.3 2 4.6 3.4 1.2 1.5 2.2 3.2 2.4 5.1-1.3-1.3-2.6-2.4-4-3.4-1.4-1-2.8-1.8-4.2-2.4-1.5-.7-3-1.2-4.6-1.7-1.8-.3-3.4-.6-5.2-.8"/>
										</g>
										<path d="m53.8 24.9c1.5 4.7-.6 10-5.3 12.1-4.6 2.2-10 .5-12.7-3.7l6.9-7.7 11.1-.7" fill="#fff"/>
										<g fill="#302424">
											<path d="m49.8 25.8c1.4 2.9.1 6.4-2.8 7.7-2.9 1.4-6.4.1-7.7-2.8-1-1.9 9.6-6.8 10.5-4.9"/>
											<path d="m53.8 24.9c-1.6-1-3.5-1.5-5.4-1.5-1.9 0-3.8.5-5.6 1.3-1.7.8-3.3 2-4.6 3.4-1.2 1.5-2.2 3.2-2.4 5.1 1.3-1.3 2.6-2.4 4-3.4 1.4-1 2.8-1.8 4.2-2.4 1.5-.7 3-1.2 4.6-1.7 1.8-.3 3.4-.6 5.2-.8"/>
										</g>
									</svg>
								</label>

								<input type="radio" name="rating" id="rating-1"/>
								<label for="rating-1">
									Meh 
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
										<path d="m2.5 37.2c2.9 16.3 18.4 27.2 34.8 24.3 16.3-2.9 27.2-18.4 24.3-34.8-2.9-16.2-18.5-27.1-34.8-24.2-16.3 2.8-27.2 18.4-24.3 34.7" fill="#ffdd67"/>
										<g fill="#664e27">
											<circle cx="42.4" cy="24.7" r="5"/>
											<circle cx="19.7" cy="28.7" r="5"/>
											<path d="m43.3 41.8c-5.8-1.5-12-.4-16.9 3-1.2.9 1.1 4 2.3 3.2 3.2-2.3 8.4-3.8 13.7-2.4 1.3.3 2.4-3.3.9-3.8"/>
										</g>
									</svg>
								</label>

								<input type="radio" name="rating" id="rating-2" />
								<label for="rating-2">
									Nice
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
										<circle cx="32" cy="32" r="30" fill="#ffdd67"/>
										<g fill="#664e27">
											<circle cx="20.5" cy="26.6" r="5"/>
											<circle cx="43.5" cy="26.6" r="5"/>
											<path d="m44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"/>
										</g>
									</svg>
								</label>

								<input type="radio" name="rating" id="rating-3" />
								<label for="rating-3">
									Fantastic!
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
										<circle cx="32" cy="32" r="30" fill="#ffdd67"/>
										<path d="m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6" fill="#664e27"/>
										<path d="m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8 3.3 0 6-2.6 6-5.8-.1-2.8-2.7-4.5-4.3-4.6" fill="#4c3526"/>
										<path d="m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5 2.9 0 5.5-.6 7.7-1.5-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7" fill="#ff717f"/>
										<path d="m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4" fill="#fff"/>
										<g fill="#664e27">
											<circle cx="20.5" cy="23" r="5"/>
											<circle cx="43.5" cy="23" r="5"/>
										</g>
									</svg>
								</label>


							</fieldset>

							<footer>
								<a href={item.userLink}>
									<img src={item.userImg} alt={item.userName}/>
									{item.userName}
								</a>
								<a href={item.soundcloudURL}>Listen on <span>soundcloud</span></a>
								<time datetime={item.created_at}>{item.created_at}</time>
							</footer>
						</figcaption>
					</article>
				)}
			</section>
		);
	}
}

export default PlayerItems;