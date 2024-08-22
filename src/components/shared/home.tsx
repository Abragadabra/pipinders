import { Button } from '@/components/ui'
import { ArrowUpRight } from 'lucide-react'

interface Props {
	className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					Pipinders Server
				</h2>
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
					<form
						action='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
						target='_blank'
					>
						<Button
							type='submit'
							className='font-bold text-3xl p-7 bg-lime-700 hover:bg-lime-800 gap-2'
						>
							Оставить заявку
							<ArrowUpRight color='#ffffff' strokeWidth={2.5} size={28} />
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}
