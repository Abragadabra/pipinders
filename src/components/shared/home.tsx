'use client'

import { ArrowUpRight, ClipboardCopy } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface Props {
	className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
	const [copied, setCopied] = useState<string | null>(null)

	const handleCopy = (command: string) => {
		navigator.clipboard.writeText(command).then(() => {
			setCopied(command)
			setTimeout(() => setCopied(null), 2000)
		})
	}

	return (
		<section>
			<div>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					Pipinders Server
				</h1>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Наш сервер - уникальный проект, который совмещает в себе ванильное
					выживание, а также взаимодействие между игроками. После того как вы
					попадаете на наш сервер, вы окунаетесь в ламповое и дружелюбное
					комьюнити игроков, которые всегда смогут провести с вами приятный
					вечер за игрой.
				</p>
				<div className='flex items-center justify-center mt-5'>
					<Button
					onClick={() => handleCopy('season1.pipinders.ru')}
						type='submit'
						className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 w-[355px]'
					>
						Адрес 1 сезона
						<ClipboardCopy color='#ffffff' strokeWidth={2.5} size={28} />
					</Button>
				</div>
				<div className='flex items-center justify-center mt-5'>
					<form
						action='https://forms.yandex.ru/u/66cec1f443f74f2ba636df9a/'
						target='_blank'
					>
						<Button
							type='submit'
							className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 w-[355px]'
						>
							Заявка на 2 сезон
							<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
						</Button>
					</form>
				</div>
				
				<div className='flex items-center justify-center mt-5'>
					<form
						action='https://t.me/pipinders_news'
						target='_blank'
					>
						<Button
							type='submit'
							className='font-bold text-3xl p-7 bg-teal-700 hover:bg-teal-800 gap-2 w-[355px]'
						>
							Наш Telegram
							<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
						</Button>
					</form>
				</div>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10 '>
					<span className='font-black'>28.08.2024</span> - начало приёма заявок на 2 сезон
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10 '>
					<span className='font-black'>28.08.2024</span> - открытие 1 сезона для прощания
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>02.09.2024</span> - официальное закрытие 1 сезона
				</p>
				<p className='text-center text-white font-semibold mt-5 text-3xl leading-10'>
					<span className='font-black'>03.09.2024</span> - открытие 2 сезона
					(версия 1.21.1)
				</p>
			</div>
			{copied && (
				<div
					className={`max-w-[80%] w-max fixed top-20 left-1/2 -translate-x-1/2 bg-lime-900 text-white py-2 px-4 rounded text-xl z-50 std-toast ${
						copied !== null ? 'std-toast--active' : ''
					}`}
				>
					Адрес успешно скопирован!
				</div>
			)}
		</section>
	)
}
