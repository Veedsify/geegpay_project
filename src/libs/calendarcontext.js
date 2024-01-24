import { create } from 'zustand';

export const useCalendarContext = create((set) => ({
    selectedDate: new Date("2023-11-15"),
    setSelectedDate: (date) => set(() => ({ selectedDate: date })),
}));