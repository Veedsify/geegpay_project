import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSideBarContext = create((set) => ({
    active: false,
    setActive: () => set((state) => ({ active: !state.active })),
}));

export const useSearchBarContext = create((set) => ({
    searchActive: false,
    setSearchActive: (toggle) => set(() => ({ searchActive: toggle })),
}));

export const useInvoiceContext = create((set) => ({
    invoiceActive: false,
    setInvoiceActive: (toggle) => set(() => ({ invoiceActive: toggle })),
}));

export const useModeContext = create(persist((set) => ({
    mode: 'light',
    setMode: (mode) => set(() => ({ mode })),
}), {
    name: 'mode-storage', // Name for the localStorage key
}));
