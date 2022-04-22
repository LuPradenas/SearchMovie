import React from 'react';

import { Link } from 'react-router-dom';

export const ButtonBack = () => (
	<Link to="/" className="btn btn-lg " style={{   background: '#333', color:'white' }}>Volver al inicio</Link>
)