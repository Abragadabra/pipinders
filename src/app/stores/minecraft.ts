import { MouseEventHandler } from 'react'
import { create } from 'zustand'

export const useMinecraftStore = create(set => ({
	handlerClick: () => {},
	setHandlerClick: (handler: MouseEventHandler) => {
		set({ handlerClick: handler })
	},
	clicks: 0,
	addClicks: () => set((state: any) => ({ clicks: state.clicks + 1 })),
}))
