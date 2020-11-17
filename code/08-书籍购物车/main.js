const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        data: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        data: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price){
    //  return '￥'+ price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++;

    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index, 1)

    }
  },
  computed: {
    totalPrice() {
      //1.普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice+=this.books[i].price*this.books[i].count

      // }

      // 2.for(let i in this.books){}
      // let totalPrice = 0;
      // for (let i in this.books) {
      //   const book = this.books[i];
      //   totalPrice += book.price * book.count
      // }
      // 3.for(let i of this.books){}
      // let totalPrice = 0;
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      return this.books.reduce(function(preV,book){
        return preV+book.price*book.count
      },0)


    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})

const nums = [22, 44, 56, 222, 444, 100, 32, 15]
let totalNum = nums.filter((n) => n < 100).map((n) => n * 2).reduce((preNum, n) => preNum + n)
console.log(totalNum);

// // 1.filter函数的使用
// const nums = [22,44,56,222,444,100,32,15]
// let newNums = nums.filter((num) => {
//   return num < 100
// })
// console.log(newNums);
// // 2.map函数的使用
// let new2Nums = newNums.map((num) => {
//   return num*2
// })
// console.log(new2Nums);

// // 3.reduce函数的使用
// let totalNum = new2Nums.reduce((preValue,n) => {
//   return preValue+n
// },0)
// console.log(totalNum)

// 编程范式：命令式编程/声明式编程    
// 编程范式：面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)