import React from 'react';

const Card = ({ name, email, id }) => {
	///const { name, email, id } = props; we can do destructuring and put { name, email, id } in the parameters instead of 'props'
	return (

		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=300x300`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>

		</div>
		);
}
export default Card;