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
        price: 85.00,
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
    removeHandle(index){
      this.books.splice(index,1)

    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice+=this.books[i].price*this.books[i].count
        
      }
      //for(let i in/of this.books){}
      return totalPrice
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})