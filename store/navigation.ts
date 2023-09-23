import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface NavigationStoreState {
    mobileNavOpened: boolean
    setMobileNavOpened(value?: boolean): void
}

const useNavigationStore = create<NavigationStoreState>()(((set, get: () => NavigationStoreState) => (
    {
        mobileNavOpened: false,
        setMobileNavOpened: (value) => set({ mobileNavOpened: (typeof value == 'undefined' ? !get().mobileNavOpened : value ) })
    }
)))

export default useNavigationStore