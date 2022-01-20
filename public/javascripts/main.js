'use strict';

console.log('main.js is alive');

window.onload = () => {

    const Counter = {
        data() {
            return {
                counter: new Date().toLocaleString()
            }
        }
    }

    Vue.createApp(Counter).mount('#counter');

    const AttributeBinding = {
        data() {
            return {
                message: 'You loaded this page on ' + new Date().toLocaleString()
            }
        }
    }

    Vue.createApp(AttributeBinding).mount('#bind-attribute');

    const EventHandling = {
        data() {
            return {
                message: 'Hello Vue.js!'
            }
        },
        methods: {
            reverseMessage() {
                this.message = this.message
                    .split('')
                    .reverse()
                    .join('')
            }
        }
    }

    Vue.createApp(EventHandling).mount('#event-handling');

    const TwoWayBinding = {
        data() {
            return {
                message: 'Hello Vue!'
            }
        }
    }

    Vue.createApp(TwoWayBinding).mount('#two-way-binding');

    const ConditionalRendering = {
        data() {
            return {
                seen: true
            }
        }
    }

    Vue.createApp(ConditionalRendering).mount('#conditional-rendering');

    const ListRendering = {
        data() {
            return {
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
                ]
            }
        }
    }

    Vue.createApp(ListRendering).mount('#list-rendering');

    const TodoItem = {
        props: ['todo'],
        template: `<li>{{ todo.text }}</li>`
    }

    const TodoList = {
        data() {
            return {
                groceryList: [
                    { id: 0, text: 'Vegetables' },
                    { id: 1, text: 'Cheese' },
                    { id: 2, text: 'Whatever else humans are supposed to eat' }
                ]
            }
        },
        components: {
            TodoItem
        }
    }
    const app = Vue.createApp(TodoList);

    app.mount('#todo-list-app');


    const funcTest = {
        data() {
            return {
                messageTest: 'Testing good'
            }
        }
    }

    Vue.createApp(funcTest).mount('#divTest');

    const TwoWayBindingCars = {
        data() {
            return {
                car: 'Hello Cars!'
            }
        }
    }

    Vue.createApp(TwoWayBindingCars).mount('body');
}