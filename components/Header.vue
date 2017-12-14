<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
     <h4>青岛前港设备状态安全检测及故障诊断平台</h4>
    <!-- <a class="navbar-brand" ></a> -->
    <!-- <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
     
    </ul> -->

   <ul class="nav navbar-nav d-md-down-none first" >
      <li class="nav-item header-item "  v-if="isShow">
          <router-link  tag="div"  to='/'  style="height:55px;" class="nav-link">
            <p class="dropdown-itemp" id="toMonitor"><!--<Icon type="compose" size='30' color="#2d8cf0"></Icon>-->
            <!-- <span>&#9776;</span> -->
            返回监控平台
            </p>   
          </router-link>
      </li>
      <li class="nav-item header-item"  v-else>
        <router-link tag="div" to='/home1'  style="height:55px;" class="nav-link" replace>
          <p  class="dropdown-itemp" id="toHome"><Icon type="android-notifications" size='17' color="#fff"></Icon>  进入管理平台</p>
        </router-link> 
      </li>
      <!-- <li class="nav-item header-item">
        <Dropdown>
        <router-link tag="div" to='/'  style="height:55px;" class="nav-link">
            <p><Icon type="android-cloud" size='18' color="#fff"></Icon>消息 </p>
        </router-link>
        <DropdownMenu slot="list">
            <DropdownItem>Linux</DropdownItem>
            <DropdownItem>Mac OS X</DropdownItem>
            <DropdownItem>Windows</DropdownItem>
            <DropdownItem>Core OS</DropdownItem>
        </DropdownMenu>
        </Dropdown>
      </li> -->
<!-- <li class="nav-item header-item">
<router-link tag="div" to='/home1'  style="height:55px;" class="nav-link">
  <p><Icon type="trophy" size='30' color="#2d8cf0"></Icon></p>
  <p  style="color:white"> 销量排行 </p>
</router-link> 
 </li>-->
    </ul>
    <ul class="nav navbar-nav ml-auto">
     <!-- <li class="nav-item d-md-down-none">
        <a class="nav-link" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>-->

      <Dropdown class="nav-item">
      <div class='super_content'>
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o">
          <div class="d-md-down-none welcom">欢迎光临,超级管理员</div>
          </span>
        </a></div>
        <Dropdown-menu slot="list">
        
            <!-- <Dropdown-item v-if="role=='admin'">
              <p class="dropdown-itemp"><router-link to="platfrom">进入平台管理</router-link>
              </p>
            </Dropdown-item> -->
            <!-- <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>

            </Dropdown-item>
             <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>

           </Dropdown-item>
              <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>

              </Dropdown-item>
            <Dropdown-item >
              <p class="dropdown-itemp"><Icon type="android-settings"></Icon> Settings</p>
              </Dropdown-item> -->

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>退出</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>
      <!--<li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>-->
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  data() {
    return {
      role: this.$store.getters.token,
      isShow:false
    }
  },
  methods: {
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    toggle () {
      console.log(event.target.id);
      if(event.target.id=="toMonitor"){
        this.isShow = this.isShow?false:true;
      }else if(event.target.id=="toHome"){
        this.isShow == this.isShow?true:false;
      }
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: center;
    font-size: 15px;
    padding: 5px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    margin-left:5%;
    height: 55px;
  }
  .header-item a{
        color:white !important;
  }
  h4{color:white;margin-left:5%;}
  .header-item .nav-link{
    width:100%;height:40px;color:white;line-height:40px;margin:6px 10px;
  }
  .img-avatar{width:45px;height:45px;vertical-align:middle;float:left;}
</style>
