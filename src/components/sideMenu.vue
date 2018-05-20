<template>
    <div class="sidebar-nav">
                <div class="navbar navbar-default" role="navigation">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <span class="visible-xs navbar-brand">Sidebar menu</span>
                    </div>
                    <div class="navbar-collapse collapse sidebar-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">All</a></li>
                        <li v-for="food in foodList"><a href="#">{{food[0].category}}</a></li>
                    </ul>
                    </div><!--/.nav-collapse -->
                </div>
                </div>
</template>

<script>

    export default {
        props:['foodList'],
        data(){
            return {
                
            }
        }
    }
</script>

<style scoped>
    /* make sidebar nav vertical */ 
@media (min-width: 768px) {
  .sidebar-nav .navbar .navbar-collapse {
    padding: 0;
    max-height: none;
  }
  .sidebar-nav .navbar ul {
    float: none;
    display: block;
  }
  .sidebar-nav .navbar li {
    float: none;
    display: block;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }
  .sidebar-nav .navbar li a {
    padding-top: 12px;
    padding-bottom: 12px;
    color: #76430f !important;
  }

  .navbar-default .navbar-nav a{
      background: #fff;
  }

.navbar-default .navbar-nav>.active>a,
.navbar-default .navbar-nav>.active>a:focus,
.navbar-default .navbar-nav>.active>a:hover {
    color: #76430f !important;
    background: #ffcc33;
}
}
</style>

