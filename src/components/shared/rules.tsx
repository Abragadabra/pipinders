"use client";

import { createRef, MouseEventHandler, Ref, useEffect, useState } from "react";
import { Minecraft } from "../Minecraft/Minecraft";
import { useMinecraftStore } from "@/app/stores/minecraft";

interface Props {
	className?: string;
}

export const Rules: React.FC<Props> = ({ className }) => {
	const minecraftStore: any = useMinecraftStore();

	return (
		<>
			<section>
				<div>
					<h2 className="text-white uppercase text-4xl font-bold text-center">Правила</h2>
				</div>
				<div>
					<ul className="lg:px-20 px-10 list-decimal text-white font-semibold mt-5 text-3xl">
						<li
							className="mb-5 text-left leading-10 sword-cursor"
							style={{ cursor: 'url("/icons/sword.svg") 25 10, auto' }}
							onClick={minecraftStore.handlerClick}
						>
							Не гриферить.
						</li>
						<li className="mb-5 text-left leading-10">Не убивать кого-либо для какой-то выгоды.</li>
						<li className="mb-5 text-left leading-10">Не нарушать законы Российской Федерации.</li>
						<li className="mb-5 text-left leading-10">Лаг машины категорически запрещены.</li>
						<li className="mb-5 text-left leading-10">
							Большие и нагружающие сервер фермы обсуждать с админом (adminchik@pipinders.ru).
						</li>
						<li className="mb-5 text-left leading-10">
							Мы доверяем нашим игрокам, но очень сильно осуждаем использование читов любого формата
							(xray в том числе).
						</li>
						<li className="mb-5 text-left leading-10">
							Не берите чужие вещи без разрешения владельца! Если вам очень хочется что-то взять,
							обязательно оставьте табличку с ником игрока, который взял эту вещь, что он взял и
							когда вернёт.
						</li>
					</ul>
				</div>
			</section>

			<Minecraft />
		</>
	);
};
