import { Rules } from '@/components/shared'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Правила сервера • PIPINDERS',
	openGraph: {
		title: 'Правила сервера • PIPINDERS',
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
}

export default function RulesPage() {
	return (
		<>
			<Rules />
		</>
	)
}
