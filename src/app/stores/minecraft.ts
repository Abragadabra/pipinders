import { MouseEventHandler } from "react";
// import { createStore } from "zustand/vanilla";
import { create } from "zustand";

// export type MinecraftClickHandler = {
// 	handlerClick: MouseEventHandler;
// };

// export type MinecraftActions = {
// 	setHandlerClick: (handler: MouseEventHandler) => void;
// };

// export type MinecraftStore = MinecraftClickHandler & MinecraftActions;

// export const defaultInitState: MinecraftClickHandler = {
// 	handlerClick: () => {},
// };

// export const useMinecraftStore = (initState: MinecraftClickHandler = defaultInitState) => {
// 	return createStore<MinecraftStore>()((set) => ({
//         ...initState,
// 		setHandlerClick: () => set((state) => ({ handlerClick: state.handlerClick })),
// 	}));
// };


export const useMinecraftStore = create((set) => ({
    handlerClick: () => {},
    setHandlerClick: (handler: MouseEventHandler) => {
        set({ handlerClick: handler })
    },
    clicks: 0,
    addClicks: () => set((state: any) => ({ clicks: state.clicks + 1 })),
}));