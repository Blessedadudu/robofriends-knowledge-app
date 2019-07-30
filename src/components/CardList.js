import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div>
		  {
				robots.map((user, ij) => {
					return (
						<Card 
						key={ij} 
						id={robots[ij].id} 
						name={robots[ij].name}
						email={robots[ij].email}
						/> 
					);
  			})
  		  };
	    </div>
    ); 
}  

export default CardList