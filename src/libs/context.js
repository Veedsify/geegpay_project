import { create } from 'zustand';

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