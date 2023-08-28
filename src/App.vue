<template>


<div class="font-pupylinux flex">
  <Sidebar/>
    <router-view></router-view>
  </div>
<div>
    <footer class="footer">
    <a  class="a" href="https://ru.vuejs.org">Это приложение сделано с помощью VueCLI</a>
</footer>
</div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  computed: {
    count(){
      return this.$store.state.sidebarmobile
    }
  },
  methods: {
    bukaside(){
      this.$store.state.sidebarmobile = true
    }
  },
    components: { Sidebar }
}
</script>

<style>



  .footer {
    text-align: center;
    height: 100px;
    background-color: #9999FF
}

.a{
  margin-top: 15px;
  justify-content: center;
    text-decoration: underline;
    text-decoration-color: #4d85ff;
    color: #2167ff;
}
</style>