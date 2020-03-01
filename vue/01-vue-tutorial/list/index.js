var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo', number: 21 },
      { message: 'Bar', number: 22 }
    ]
  }
})

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})

new Vue({
  el: '#v-for-filter',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

new Vue({
  el: '#v-for-range',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ],
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

new Vue({
  el: '#v-for-template',
  data: {
    items: [
      { msg: 'Foo'},
      { msg: 'Bar'}
    ]
  }
})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ id }}\
      ok \
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title', 'id']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
