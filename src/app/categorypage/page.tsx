import { Articles } from '@/shared/Articles';
import BreadCrumb from '@/shared/BreadCrumb';
import { RecommendedProducts } from '@/shared/RecommendedProducts';
import React from 'react';

const Categorypage = () => {
	return (
		<div>
			<BreadCrumb />
			<Articles />
		</div>
	);
};

export default Categorypage;