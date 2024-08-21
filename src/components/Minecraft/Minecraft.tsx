"use client";

import Image from "next/image";
import styles from "./Minecraft.module.scss";
import { createRef, MouseEventHandler, Ref, useCallback, useEffect, useState } from "react";
import anime from "animejs";
import { useMinecraftStore } from "@/app/stores/minecraft";

interface Props {}

export const Minecraft: React.FC<Props> = () => {
	const minecraftStore: any = useMinecraftStore();

	const overlay: Ref<HTMLDivElement> = createRef();
	const heartContainer: Ref<HTMLDivElement> = createRef();

	const handleClick: MouseEventHandler = useCallback(() => {
		minecraftStore.addClicks();
	}, []);

	useEffect(() => {
		if (minecraftStore.clicks > 10) {
			const heartContainers = document.querySelectorAll(`.${styles["heart-container"]}`);
			const hearts = heartContainers[1].querySelectorAll(`.${styles["heart"]}`);

			overlay.current?.classList.add(styles["overlay--active"]);
			heartContainers.forEach((container) => {
				container.classList.add(styles["heart-container--active"]);
			});

			if(!hearts.length) {
				const audio = new Audio('/audio/Да ты че.mp3');
				audio.play();

				const overlayAnime = anime({
					targets: overlay.current,
					opacity: [0, 1],
					duration: 100,
					easing: "easeOutQuad"
				});

				const heartContainerAnime = anime({
					targets: heartContainers,
					duration: 100,
					easing: "easeInOutQuad",
					keyframes: [
						{
							translateX: 10,
							translateY: anime.random(0, 5)
						},
						{
							translateX: -10,
							translateY: anime.random(0, 5)
						},
						{
							translateX: 25,
							translateY: anime.random(0, 15)
						},
						{
							translateX: -25,
							translateY: anime.random(0, 15)
						},
						{
							translateX: 0,
							translateY: 0
						},
					],
					loop: true
				});

				audio.addEventListener('ended', () => {
					anime.remove([overlayAnime, heartContainerAnime]);
					location.reload();
				});
			}

			if (hearts.length) {
				anime({
					targets: overlay.current,
					opacity: [0, 1],
					duration: 100,
					easing: "easeOutQuad",
					complete: () => {
						overlay.current?.classList.remove(styles["overlay--active"]);
					},
				});

				if (hearts.length) {
					anime({
						targets: hearts[hearts.length - 1],
						duration: 300,
						easing: "easeInOutQuad",
						scale: [1, 0],
						opacity: [1, 0],
						complete: () => {
							hearts[hearts.length - 1].remove();
						},
					});
				}

				anime({
					targets: heartContainers,
					duration: 300,
					easing: "easeInOutQuad",
					keyframes: [
						{
							translateX: 10,
						},
						{
							translateX: -10,
						},
						{
							translateX: 25,
						},
						{
							translateX: -25,
						},
						{
							translateX: 0,
						},
					],
					complete: () => {
						heartContainers.forEach((container) => {
							container.classList.remove(styles["heart-container--active"]);
						});
					},
				});
			}
		}
	}, [minecraftStore.clicks]);

	useEffect(() => {
		minecraftStore.setHandlerClick(handleClick);
	}, [handleClick]);

	return (
		<>
			<div className={styles["overlay"]} ref={overlay}></div>
			<div className={styles["heart-container"]} ref={heartContainer}>
				<Image
					src="/icons/empty-heart.svg"
					alt=""
					width={50}
					height={50}
					className={styles["heart"]}
				/>
				<Image
					src="/icons/empty-heart.svg"
					alt=""
					width={50}
					height={50}
					className={styles["heart"]}
				/>
				<Image
					src="/icons/empty-heart.svg"
					alt=""
					width={50}
					height={50}
					className={styles["heart"]}
				/>
				<Image
					src="/icons/empty-heart.svg"
					alt=""
					width={50}
					height={50}
					className={styles["heart"]}
				/>
				<Image
					src="/icons/empty-heart.svg"
					alt=""
					width={50}
					height={50}
					className={styles["heart"]}
				/>
			</div>
			<div className={styles["heart-container"]} ref={heartContainer}>
				<Image src="/icons/heart.svg" alt="" width={50} height={50} className={styles["heart"]} />
				<Image src="/icons/heart.svg" alt="" width={50} height={50} className={styles["heart"]} />
				<Image src="/icons/heart.svg" alt="" width={50} height={50} className={styles["heart"]} />
				<Image src="/icons/heart.svg" alt="" width={50} height={50} className={styles["heart"]} />
				<Image src="/icons/heart.svg" alt="" width={50} height={50} className={styles["heart"]} />
			</div>
		</>
	);
};
