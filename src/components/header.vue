<template>
    <nav class="navbar bg-color navbar-static-top text-color shadow-sm">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar6">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="../assets/images/logo.png"></a>
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#">Home</a></li>
                </ul>
            </div>
            <div id="navbar6" class="navbar-collapse collapse nav navbar-nav pull-right user-profile ">
                <div class=" btn-group " role="group">
                    <button type="button" class="btn btn-default dropdown-toggle bg-color" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <span class="glyphicon glyphicon-user"></span> spratap124@gmail.com
                    <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    </ul>
                </div>
            </div>
            <!--/.nav-collapse -->
        </div>
        <!--/.container-fluid -->
    </nav>
</template>

<script>

    export default {
        data(){
            return {
               
            }
        }
    }
</script>

<style scoped>

    a.navbar-brand{
        padding: 0;
    }
    .navbar-brand > img{
        height: 50px;
    }

.navbar-nav>li>a {
   color: #76430f !important;
}

.navbar-nav>li.active{
background: #ffdd76;
}


.nav>li>a:focus,
.nav>li>a:hover{
    background: #ffdd76;
}

.shadow-sm {
   box-shadow: 0 1px 5px 3px rgba(0, 0, 0, 0.085) !important;

}


.user-profile{
    line-height: 50px;
    box-shadow: none;
}

.open>.dropdown-toggle.btn-default:focus,
.open>.dropdown-toggle.btn-default:link,
.open>.dropdown-toggle.btn-default:active,
.open>.dropdown-toggle.btn-default:hover {
    background: #ffcc33;
}
</style>