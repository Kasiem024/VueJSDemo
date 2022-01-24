'use strict';

let arrAllCars = [],
    arrUniqueCars = [],
    arrBases = [];

console.log('main.js is alive');

window.onload = () => {

    Vue.createApp({
        methods: {
            functionBtnClickAddCar() {
                console.log('functionBtnClickAddCar');

                const currentValue = document.getElementById('inputCar').value;

                arrAllCars.push(currentValue);

                arrUniqueCars = [];

                let arrTemp = [...new Set(arrAllCars.map(item => item))];

                arrTemp.forEach(element => {
                    arrUniqueCars.push({
                        "make": element,
                        "counter": 0
                    });
                });

                arrUniqueCars.forEach(element1 => {
                    let counterUnique = 1;

                    arrAllCars.forEach(element2 => {

                        if (element2 == element1.make) {
                            element1.counter = counterUnique;
                            counterUnique++;
                        }
                    });
                });
            },
            funcBtnClickShowCars() {
                console.log('funcBtnClickShowCars');

                document.getElementById('divShowCars').innerHTML = null;

                arrUniqueCars.forEach(element => {

                    const li = document.createElement('li');
                    li.textContent = `There are ${element.counter} ${element.make}`;
                    document.getElementById('divShowCars').appendChild(li);
                });
            },
            functionBtnClickAddBases() {
                console.log('functionBtnClickAddBases');

                const currentValue = document.getElementById('inputBases').value;

                const tempArr = currentValue.split(' ');

                tempArr.forEach(element => {

                    element *= element;
                    arrBases.push(parseInt(element));
                });

                arrBases.sort((first, second) => first - second);
            },
            functionBtnClickCalcBases() {
                console.log('functionBtnClickCalcBases');

                document.getElementById('divShowBases').innerHTML = null;

                arrBases.forEach(element => {

                    const li = document.createElement('li');
                    li.textContent = `${Math.sqrt(element)} (${element})`;
                    document.getElementById('divShowBases').appendChild(li);
                });
            },
        }
    }).mount('#content');

    const TwoWayBinding = {
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        methods: {
            eventTest() {
                console.log(this)
            }
        },
    }

    Vue.createApp(TwoWayBinding).mount('#two-way-binding')

    // const Counter = {
    //     data() {
    //         return {
    //             counter: new Date().toLocaleString()
    //         }
    //     }
    // }

    // Vue.createApp(Counter).mount('#counter');

    // const AttributeBinding = {
    //     data() {
    //         return {
    //             message: 'You loaded this page on ' + new Date().toLocaleString()
    //         }
    //     }
    // }

    // Vue.createApp(AttributeBinding).mount('#bind-attribute');

    // const EventHandling = {
    //     data() {
    //         return {
    //             message: 'Hello Vue.js!'
    //         }
    //     },
    //     methods: {
    //         reverseMessage() {
    //             this.message = this.message
    //                 .split('')
    //                 .reverse()
    //                 .join('')
    //         }
    //     }
    // }

    // Vue.createApp(EventHandling).mount('#event-handling');

    // const TwoWayBinding = {
    //     data() {
    //         return {
    //             message: 'Hello Vue!'
    //         }
    //     }
    // }

    // Vue.createApp(TwoWayBinding).mount('#two-way-binding');

    // const ConditionalRendering = {
    //     data() {
    //         return {
    //             seen: true
    //         }
    //     }
    // }

    // Vue.createApp(ConditionalRendering).mount('#conditional-rendering');

    // const ListRendering = {
    //     data() {
    //         return {
    //             todos: [
    //                 { text: 'Learn JavaScript' },
    //                 { text: 'Learn Vue' },
    //                 { text: 'Build something awesome' }
    //             ]
    //         }
    //     }
    // }

    // Vue.createApp(ListRendering).mount('#list-rendering');

    // const TodoItem = {
    //     props: ['todo'],
    //     template: `<li>{{ todo.text }}</li>`
    // }

    // const TodoList = {
    //     data() {
    //         return {
    //             groceryList: [
    //                 { id: 0, text: 'Vegetables' },
    //                 { id: 1, text: 'Cheese' },
    //                 { id: 2, text: 'Whatever else humans are supposed to eat' }
    //             ]
    //         }
    //     },
    //     components: {
    //         TodoItem
    //     }
    // }
    // const app = Vue.createApp(TodoList);

    // app.mount('#todo-list-app');


    // const funcTest = {
    //     data() {
    //         return {
    //             messageTest: 'Testing good'
    //         }
    //     }
    // }

    // Vue.createApp(funcTest).mount('#divTest');

    // const TwoWayBindingCars = {
    //     data() {
    //         return {
    //             car: 'Hello Cars!'
    //         }
    //     }
    // }

    // Vue.createApp(TwoWayBindingCars).mount('body');
}