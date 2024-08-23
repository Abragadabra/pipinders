import { HowToPlay } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Как играть? • PIPINDERS',
	openGraph: {
		title: 'Как играть? • PIPINDERS',
		description:
			'Наш сервер объединяет ванильное выживание и взаимодействие игроков, предлагая уютное и дружелюбное комьюнити, где вы сможете провести приятный вечер за игрой.',
		url: 'https://pipinders.ru',
		images: [
			{
				url: 'https://pipinders.vercel.app/og.png',
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: false,
		follow: false
	}
}

export default function HowToPlayPage() {
	return <HowToPlay />
}
