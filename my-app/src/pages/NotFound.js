import React from 'react';

import {ButtonBack} from '../components/ButtonBack';


const NotFound = () => {
    return (
	<>
    <div className="container">
		<h2 className="text-center p-5 font-weight-bold">404 - page not found</h2>
	</div>
	<div>
        <ButtonBack/>
	</div>
	</>
    )
}
export default NotFound;