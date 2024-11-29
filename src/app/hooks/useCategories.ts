import { useEffect, useState } from 'react';
import { Product } from '@/types';
import fetchCategoriesFromAPI from '../helpers/fetchCategories';

interface Section {
	section_ua: string;
	section_en: string;
}

const useCategories = (sectionFromUrl: string | null) => {
	const [categories, setCategories] = useState<Product[]>([]);
	const [filteredCategories, setFilteredCategories] = useState<Product[]>([]);
	const [sections, setSections] = useState<Section[]>([]);
	const [selectedSection, setSelectedSection] = useState<string | null>(sectionFromUrl);

	useEffect(() => {
		const getCategories = async () => {
			const data: Product[] = (await fetchCategoriesFromAPI()) || [];
			if (data) {
				setCategories(data);
				const uniqueSections = Array.from(
					new Map(
						data.map(item => [item.section_ua, { section_ua: item.section_ua, section_en: item.section_en }])
					).values()
				);
				setSections(uniqueSections);

				// setSections(Array.from(new Set(data.map(item => item.section_ua))));

				setFilteredCategories(sectionFromUrl ? data.filter(item => item.section_en === sectionFromUrl) : data);
				if (sectionFromUrl) setSelectedSection(sectionFromUrl);
			}
		};

		getCategories();
	}, [sectionFromUrl]);

	const handleSectionChange = (section: string) => {
		setSelectedSection(section);
		setFilteredCategories(categories.filter(item => item.section_ua === section));
		console.log(categories);
	};

	return { categories, filteredCategories, sections, selectedSection, handleSectionChange, sectionFromUrl };
};

export default useCategories;
