import React from 'react';
interface SectionTitleProps {
	title: string | null;
	custom?: string;
}

export const SectionTitle = ({ title, custom }: SectionTitleProps) => {
	return <h2 className={`text-left text-xl py-6 font-medium 	${custom ? custom : ' '}`}>{title}</h2>;
};
