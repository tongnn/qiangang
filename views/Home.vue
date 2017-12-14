<template>
  <div class="animated fadeIn">
    <div class='map'>

    </div> 
  </div>
</template>

<script>
import DashChartCount from './charts/DashChartCount';
import DashChartVisitor from './charts/DashChartVisitor';
import DashChartLarge from './charts/DashChartLarge';
import VueCalendar from './components/VueCalendar';
import TodoList from '@/components/TodoList'
import Table from './components/Table'

export default {
  components:{DashChartCount,DashChartVisitor,DashChartLarge,VueCalendar,TodoList,Table},
  name: 'home',
        data () {
            return {
            }
        },
        methods:{
              test_logout(){
                 this.$store.dispatch('LogOut').then(() => {
                    this.$router.push({ path: '/login' });
                  }).catch(err => {
                    this.$message.error(err);
                  });
              },
              insert: function () {
                console.log(this.users)
                this.users.push(this.user)
              },
              remove: function (index) {
                this.users.splice(index, 1)
              }
        },
        mounted(){
        }
}
</script>


<style type="text/css" scoped>
.map{background:#fff;width:100%;height:2000px;}
h1, h2 {
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
tr,th{
  text-align:center;
}
</style>