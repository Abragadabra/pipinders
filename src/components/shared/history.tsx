import Image from 'next/image'
import Link from 'next/link'
import h1 from '../../../public/history/h1.png'
import h10 from '../../../public/history/h10.png'
import h11 from '../../../public/history/h11.png'
import h12 from '../../../public/history/h12.png'
import h13 from '../../../public/history/h13.png'
import h14 from '../../../public/history/h14.png'
import h15 from '../../../public/history/h15.png'
import h16 from '../../../public/history/h16.png'
import h17 from '../../../public/history/h17.png'
import h18 from '../../../public/history/h18.png'
import h19 from '../../../public/history/h19.png'
import h2 from '../../../public/history/h2.png'
import h3 from '../../../public/history/h3.png'
import h4 from '../../../public/history/h4.png'
import h5 from '../../../public/history/h5.png'
import h6 from '../../../public/history/h6.png'
import h7 from '../../../public/history/h7.png'
import h8 from '../../../public/history/h8.png'
import h9 from '../../../public/history/h9.png'

interface Props {
	className?: string
}

export const History: React.FC<Props> = ({ className }) => {
	return (
		<section>
			<div>
				<h2 className='text-white uppercase text-4xl font-bold text-center'>
					История
				</h2>
			</div>
			<div>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					С самого появления человечества, люди стремились к творчеству. По сей
					день находят наскальные рисунки и разные статуэтки. В наше время для
					всего этого существуют видеоигры, и в первую очередь MINECRAFT.
					Появление нашего сервера позволило множеству людей раскрыть свои
					спрятанные качества. И сейчас мы расскажем интересный путь становления
					нашего сервера.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Изначально у нас была идея объединения людей в одно маленькое, но
					уютное комьюнити. Для этих целей был арендован хостинг, который
					позволил подключаться к игре в удобное для каждого человека время. Мы
					собрали небольшое количество людей и открыли для себя новый и
					неизведанный мир этой игры.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					С самого начала начался поиск приятного места для основания домов,
					идея заключалась в том, что все должны быть рядом и контактировать
					друг с другом. После поисков были выбраны небольшие острова,
					разделенные большой рекой:
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h1}
						alt='MIKKUT и столб грязи'
						height={h1.height}
						width={h1.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						MIKKUT и столб грязи
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					После чего пошёл процесс облагораживания окружающей среды, была
					освобождена большая территория и были построены дома. В процессе
					постройки домов к нам подключались новые игроки, которые тоже начинали
					обустраиваться. Далее представлены примеры построенных домов на
					сервере:
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h2}
						alt='Дома с высоты птичьего полёта (в майнкрафте ведь нет птичек, которые так высоко летают?)'
						height={h2.height}
						width={h2.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Дома с высоты птичьего полёта
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					А теперь поподробнее о каждой территории игроков:
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h3}
						alt='Территория игроков MIKKUT и Armoryx'
						height={h3.height}
						width={h3.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Территория игроков MIKKUT и Armoryx
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Эту территорию с лёгкостью можно было увидеть благодаря высокой и
					кривой крыше игрока MIKKUT. Когда ты зайдешь на ту территорию, твои
					фпс упадут в ноль, скажем спасибо фермам Armoryx.
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h4}
						alt='Территория игроков Konstantin_mogg и Nurkaev'
						height={h4.height}
						width={h4.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Территория игроков Konstantin_mogg и Nurkaev
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					От такого количества коров все пк хотели взлетать в стратосферу, а вид
					на этот дворец… Сразу видно богатых людей, опытных фермеров. (Коровы в
					итоге все сбежали, что повлекло за собой нашествие коров на сервере).
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h5}
						alt='Территория игрока MrAbragadabra'
						height={h5.height}
						width={h5.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Территория игрока MrAbragadabra
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					На этой территории была начата стройка дома, которая шла до конца
					сезона, а также эта территория подверглась МАССОВОЙ вырубке деревьев
					(тут был сто проц лес).
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h6}
						alt='Территория игрока Steiden'
						height={h6.height}
						width={h6.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Территория игрока Steiden
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Изначально было самой высокой башней на сервере. Этот огонь виден даже
					если ты в аду.
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h7}
						alt='Территория игрока SharkPop'
						height={h7.height}
						width={h7.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Территория игрока SharkPop
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					На этой территории SharkPop построил дом, но так и не использовал его
					по назначению, но зато с радостью принял надпись SVO перед своим
					выходом!).
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					После того как мы рассмотрели дома игроков, естесно нужно узнать
					игроков поподробнее:
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					MrAbragadabra – Игрок, который был основателем этой территории, именно
					благодаря ему мы видим дома именно здесь. Приложил руку к основым
					событиям на сервере. Ну и самое главное это МОДЕРАТОР, так что его
					нужно уважать и бояться, а то вдруг уххх. Очень многое привнёс в само
					устройство сервера, его правила и законы. Сервер избавил человека от
					дипрашн и подарил надежду.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					MIKKUT – Игрок, который строил такие невероятные сооружения как: фигня
					с большой крышей (дом), а также строил хайперлуп в нижнем мире
					(кривой). Сделал сортировку фермы мобов (сломал сортировку). Сервер
					также избавил человека от дипрашн и подарил надежду.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Armoryx – Игрок, который майн видел лет 100 назад, когда динозавры
					котельникову жрали. Быстро погрузился в игру, познал множество новых
					механик. Построил ферму, которая ломала пк всем игрокам.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					SharkPop – Игрок, который прославился своим подходом к игре, он играет
					в игру как будто у нас спидран. Начал создание долгостроя, но так и не
					достроил. Смешно помирает.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Steiden – Эта легенда настолько много времени проводил в пещерах с
					самого старта сервера, что решил, что солнце это лишняя штука.
					Построил большую башню.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Nurkaev – Вместе с Konstantin_mogg застроил большую территорию, и
					развёл настолько большое количество животных, что лаги на их
					территории преследовали до самого конца сезона.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					Konstantin_mogg – Во время игры на сервере ощутил себя
					землевладельцем, поэтому отстроил большой дворец, а самое главное
					засадил картофанчиком всё и коровами. Ходили слухи, что у него
					существовала секретная дача, которую не могли найти.
				</p>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					После знакомства с персонажами первого сезона, перейдём к событиям
					сезона, а также интересным скриншотам:
				</p>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h8}
						alt='Ферма кур Armoryx'
						height={h8.height}
						width={h8.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Ферма кур Armoryx
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h9}
						alt='Если ты это читаешь, я люблю тебя :з'
						height={h9.height}
						width={h9.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Если ты это читаешь, я люблю тебя :з
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h10}
						alt='Без комментариев…'
						height={h10.height}
						width={h10.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Без комментариев…
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h11}
						alt='Легендарные путешествия'
						height={h11.height}
						width={h11.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Легендарные путешествия
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h12}
						alt='«-5 фпс, спасибо за эти фермы»'
						height={h12.height}
						width={h12.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						«-5 фпс, спасибо за эти фермы»
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h13}
						alt='Иногда так хочется просто сесть и сидеть у костра, не думая ни о чём…'
						height={h13.height}
						width={h13.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Иногда так хочется просто сесть и сидеть у костра, не думая ни о
						чём…
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h14}
						alt='Ферма мобов (НАСТОЛЬКО КРИВОЙ МИР ЕЩЁ НЕ ВИДЕЛ)'
						height={h14.height}
						width={h14.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Ферма мобов (НАСТОЛЬКО КРИВОЙ МИР ЕЩЁ НЕ ВИДЕЛ)
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h15}
						alt='Если ваша вечеринка не похожа на эту, даже не зовите меня'
						height={h15.height}
						width={h15.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Если ваша вечеринка не похожа на эту, даже не зовите меня
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h16}
						alt='Ещё один приятный вайбик на фото :з'
						height={h16.height}
						width={h16.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Ещё один приятный вайбик на фото :з
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h17}
						alt='От этого фото отходит атмосфера горящего пк'
						height={h17.height}
						width={h17.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						От этого фото отходит атмосфера горящего пк
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h18}
						alt='Ферма опыта на эндерменах (с кучей жемчуга)'
						height={h18.height}
						width={h18.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Ферма опыта на эндерменах (с кучей жемчуга)
					</figcaption>
				</figure>
				<figure className='flex-col items-center my-5'>
					<Image
						className='m-auto'
						src={h19}
						alt='Игорь. Просто Игорь…'
						height={h19.height}
						width={h19.width}
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
						quality={90}
						draggable='false'
					/>
					<figcaption className='text-center mt-2 text-white text-2xl'>
						Игорь. Просто Игорь…
					</figcaption>
				</figure>
				<p className='text-justify text-white font-semibold mt-5 text-3xl leading-10'>
					После прочитанного вы можете понять, что наш сервер окружен приятными
					людьми, которые могут смешно шутить (надеемся), а также помогут вам в
					игре. Заходите на сервер и погрузитесь в удивительные истории, которые
					наверняка запомнятся вам надолго. А с вами был ваш любимый автор
					текста Димочка, и помните
				</p>
				<p className='text-white mt-5 text-3xl leading-10 text-center font-black'>
					<Link href='/donate'>ДАЙТЕ ДЕНЯГ</Link>
				</p>
			</div>
		</section>
	)
}
