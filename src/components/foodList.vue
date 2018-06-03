<template>
    <div class="food-list">
       <div class="panel panel-default">
            <!-- Panel Contents -->
            <div class="panel-heading bg-color"> <span>{{foods[0].category}}</span></div>
            
            <ul class="list-group">
                <li class="list-group-item" v-for="food in foods" >
                    <div class="veg-flag lfloat">
                        <!-- if veg item -->
                        <span class="veg glyphicon glyphicon-flag" v-if="food.vegflag == 'veg'"></span>
                        <!-- if non-veg item -->
                        <span class="non-veg glyphicon glyphicon-flag" v-else></span>
                    </div>
                    <!-- item -->
                    <div class="item lfloat">
                        <!-- item name -->
                        <div class="item-name">
                            <h6>{{food.name}}</h6>
                        </div>
                        <!-- item description -->
                        <div class="item-description" v-if="food.description">
                            <p>{{food.description}}</p>
                        </div>
                    </div>
                    <!-- item end-->

                    <!-- add to cart -->
                    <addToCart :food="food" @removeFromCart="removeFromCart($event)" @addToCart="addToCart($event)"></addToCart>
                    <!-- add to cart end-->
                    
                    <!-- itme price -->
                    <div class="item-price rfloat">
                        <span class="price"><span class="rs-sign">&#8377;</span>{{food.price}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['foods'],
  data() {
    return {
      
    };
  },
  methods:{
    addToCart: function(food){
        this.$emit('addToCart',food);
    },
    removeFromCart:function(food){
        this.$emit('removeFromCart',food);
    }
   
  }
};
</script>

<style scoped>
.food-list {
  margin-bottom: 20px;
}
.panel-heading {
  text-align: center;
  font-size: 17px;
}
.list-group-item {
  overflow: hidden;
  padding-bottom: 0;
}
.veg-flag {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-top: 10px;
}
.veg-flag > .veg {
  color: red !important;
}

.veg-flag > .non-veg {
  color: green !important;
}

.item {
  width: 30%;
}

.item-name h6 {
  margin-bottom: 0;
}

.item > .item-description {
  color: #999;
}

.item-price {
  width: 20%;
  padding: 13px 15px;
  text-align: right;
}
</style>

