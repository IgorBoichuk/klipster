'use client';

import { RecommendedProducts } from '@/shared/RecommendedProducts';
import Bolt from '../../public/images/bolts.png';
import { AboutUs } from '@/shared/AboutUs';
import { Categories } from '@/shared/Categories';
import { useEffect, useState } from 'react';

interface Product {
	id: number;
	name: string;
	price: number;
	// Додайте інші поля за необхідністю
}

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('/api/getData');

				// Вивести відповідь в консоль перед парсингом
				// const text = await response.text; // Отримаємо відповідь як текст
				// console.log(text); // Перевірте, чи немає HTML чи помилки замість JSON

				// Перевірка статусу відповіді
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				// Спочатку спробуємо парсити JSON
				const data = await response.json();
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<div>
			<Categories />
			<RecommendedProducts image={Bolt} title={'Рекомендовані товари'} />
			<AboutUs />
		</div>
	);
}
