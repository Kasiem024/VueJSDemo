'use strict';

console.log('main.js is alive');

window.onload = () => {

    const Counter = {
        data() {
            return {
                counter: 0
            }
        }
    }

    Vue.createApp(Counter).mount('#counter');
}