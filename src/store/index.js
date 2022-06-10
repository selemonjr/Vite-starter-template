import { defineStore } from "pinia";
export const useStore = defineStore("main", {
    state: () => ({
        counter:0,
    }),

    getters: {

    },

    actions: {
        increment() {
            return this.counter++
        },
        decrement() {
            return this.counter--
        },
        reset() {
            return this.counter = 0
        }
    }
})