import Contact from '@/shared/Contact';
import { SectionTitle } from '@/shared/SectionTitle';
import { SingleProductCrad } from '@/shared/SingleProductCrad';
import React from 'react';

const Contacts = () => {
	return (
		<div>
			<SectionTitle title='Contacts' />
			<Contact/>
			<SingleProductCrad />
		</div>
	);
};
export default Contacts;
