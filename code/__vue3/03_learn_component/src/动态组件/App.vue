<template>
  <div>
    <button
      v-for="(item) in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>
    <!-- 动态组件 -->
    <keep-alive include="home,about">    
      <component 
        :is="currentTab" 
        name="Ian" 
        :age="18"
        @pageClick="pageClick"
        ></component>
    </keep-alive>
    <!-- <Home></Home> -->
  </div>
</template>

<script>
import About from "./pages/About";
import Category from "./pages/Category";
import Home from "./pages/Home";
export default {
  components: {
    Home,
    Category,
    About,
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log('home');
    }
  },
};
</script>

<style>
.active {
  color: red;
}
</style>