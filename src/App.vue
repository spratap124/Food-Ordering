<template>
  <div>
    <Header></Header>
    <div class="container custom-container container-shadow">
      <div class="row">
        <div class="col-md-2">
          <sideMenu></sideMenu>
        </div>
        <div class="col-md-6 food-list-wrapper">
          <div class="food-list-container">
            <div v-for="food in foodList">
              <foodList :foods="food"></foodList>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <cart></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Food Ordering App",
      foodData:[]
    };
  },
  computed:{
    foodList:function(){
      var foodByCategory = {};
      this.foodData.forEach(function(food){
      
      foodByCategory[food.category] = foodByCategory[food.category] || []
      foodByCategory[food.category].push(food);

    });
    return foodByCategory;
    }
    
  },
  created(){
    var self=this;

    this.$http.get('https://thesmartq.firebaseio.com/menu.json').then(function(data){
        self.foodData = data.body;
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.food-list-wrapper {
  min-height: calc(100vh - 130px);
  max-height: calc(100vh - 130px);
  border: 1px solid transparent;
  border-color: #e7e7e7;
  border-radius: 4px;
  padding: 0px;
}

.food-list-container {
  max-height: calc(100vh - 150px);
  overflow: auto;
}
</style>
