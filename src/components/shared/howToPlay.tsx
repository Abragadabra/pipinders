import Image from 'next/image'
import Link from 'next/link'
import how1 from '../../../public/img/how/how1.png'
import how2 from '../../../public/img/how/how2.png'
import how3 from '../../../public/img/how/how3.png'
import how4 from '../../../public/img/how/how4.png'
import how5 from '../../../public/img/how/how5.png'
import how6 from '../../../public/img/how/how6.png'

interface Props {
	className?: string
}

export const HowToPlay: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h1 className='text-white uppercase text-4xl font-bold text-center'>
					Как играть?
				</h1>
			</div>
			<div>
			<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					ВНИМАНИЕ!!! Информация далее предназначеня для 2 сезона:
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Для игры на нашем сервере нужно правильно настроить клиент Minecraft. В частности, следует установить мод Simple Voice Chat, без
					которого игра на сервере будет невозможна. Также рекомендуется
					использовать Legacy Launcher, так как на нём реализована система
					скинов, которая позволит вам на ходу менять скин во время игры. Ниже
					приведена инструкция по его установке и настройке.
				</p>
				<ul className='lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl'>
					<li className='mb-5 text-left leading-10'>
						Скачайте{' '}
						<Link
							className='underline hover:no-underline'
							href='https://disk.yandex.ru/d/FsnXNe_eWWSGWw'
							target='_blank'
						>
							Legacy Launcher и Simple Voice Chat (вместе с зависимостями).
						</Link>
					</li>
					<li className='mb-5 text-left leading-10'>
						Запустите{' '}
						<span className='highlighting'>
							LegacyLauncher.exe
						</span>{' '}
						и установите куда вам удобно.
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее вам надо создать аккаунт на{' '}
						<Link
							className='underline hover:no-underline'
							href='https://ely.by'
							target='_blank'
						>
							ely.by
						</Link>{' '}
						(бесплатная система скинов). ВНИМАНИЕ! Регистрируйте ник на сайте
						такой, который вы указали в заявке, либо сначала настройте всё для
						игры, а потом отправляйте заявку (чтобы не создавать лишние заботы
						для админа, спасибо :3).
					</li>
					<li className='mb-5 text-left leading-10'>
						После регистрации на ely.by откройте установленный Legacy Launcher.
					</li>
					<li className='mb-5 text-left leading-10'>
						После открытия вам надо нажать на три полоски, далее{' '}
						<span className='highlighting'>
							Настройка лаунчера и игры:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how1}
								alt='скриншот'
								height={how1.height}
								width={how1.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						В настройках на вкладке Minecraft меняем 3 пукнта (указаны
						стрелками). На первой стрелке меняем на{' '}
						<span className='highlighting'>
							отдельная папка для каждой версии
						</span>
						. На втрой стрелке выставляем нужное для вас количество оперативной
						памяти. На третьей стрелке убираем галочку с{' '}
						<span className='highlighting'>
							Автодобавление серверов.
						</span>
						НЕ ЗАБУДЬТЕ НАЖАТЬ КНОПКУ СОХРАНИТЬ!!!
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how2}
								alt='скриншот'
								height={how2.height}
								width={how2.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее приступим к подключению аккаунта ely.by. Переходим обратно на
						главную страницу и в списке аккаунтов нажимаем на{' '}
						<span className='highlighting'>
							настроить аккаунты:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how3}
								alt='скриншот'
								height={how3.height}
								width={how3.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее надо выбрать ely.by в качестве аккаунта. После нажатия вас
						перекинет в браузер, где произойдет аутентификация на ely.by и ваш
						аккаунт будет добавлен:
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how4}
								alt='скриншот'
								height={how4.height}
								width={how4.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Далее мы установим майнкрафт версии{' '}
						<span className='highlighting'>
							1.21.1
						</span>{' '}
						(на такой версии сервер) и установим моды. В главном меню в списке
						версии выбирете{' '}
						<span className='highlighting'>
							Fabric 1.21.1
						</span>
						:
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how5}
								alt='скриншот'
								height={how5.height}
								width={how5.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
					</li>
					<li className='mb-5 text-left leading-10'>
						Нажмите кнопку{' '}
						<span className='highlighting'>
							установить.
						</span>
					</li>
					<li className='mb-5 text-left leading-loose'>
						Если после установки у вас открылся майнкрафт, то можете его закрыть
						(если он открылся после установки), чтобы установить моды. После
						того как вы закрыли майнкрафт, на главно нажмите на значок папки и
						затем{' '}
						<span className='highlighting'>
							Открыть папку Fabric-1.21:
						</span>
						<figure className='flex-col items-center my-5'>
							<Image
								className='m-auto'
								src={how6}
								alt='скриншот'
								height={how6.height}
								width={how6.width}
								sizes='100vw'
								style={{
									width: '100%',
									height: 'auto',
								}}
								quality={100}
								draggable='false'
							/>
						</figure>
						У вас откроется проводник с папками майнкрафт. Среди этих папок
						найдите папку{' '}
						<span className='highlighting'>
							mods
						</span>{' '}
						и скопируйте в неё ранее скачанные файлы{' '}
						<span className='highlighting'>
							fabric-api.jar
						</span>{' '}
						и{' '}
						<span className='highlighting'>
							voicechat.jar
						</span>
						.
					</li>
					<li className='mb-5 text-left leading-loose'>
						На этом и завершена настройка Legacy Launcher для игры в майнкрафт.
					</li>
				</ul>
			</div>
		</section>
	)
}
