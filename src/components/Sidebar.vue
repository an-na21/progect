<template>
        <!-- sidebar -->
      <div class="allll">
        <div>
        <p class="tt">Todo List</p>
       
       
        <div class="font-normal mt-24">
            <p class="mt-6 tt"><router-link to="/">Диаграммы эффективности</router-link></p>
            <p class="mt-6 tt"><router-link to="/todo">Список заданий</router-link></p>
            
            <p class="mt-6 tt">Настройки</p>
        </div>
        </div>

        <div class="flex items-center px-6 py-4 mb-4 rounded-2xl w-max mx-auto" >
            <img src="/asset/book.png" alt="">
            <div class="ml-3">
                <p class="font-normal tt">User Guide</p>
                <p class="font-light text-sm tt">Documentation</p>
            </div>
        </div>

      </div>
      <!-- end sidebar -->
      
</template>

<script>
export default {
    computed: {
        sidebarmobile(){
            return this.$store.state.sidebarmobile
        }
    },
    methods: {
        tutupside(){
            this.$store.state.sidebarmobile = false
        }
    },
}
</script>

<style>
.allll{

    font-family: "cursive", Сomic Sans MS, Monotype Corsiva, Mistral;
  font-size: 20px;
background-image: url(/asset/side.jpg);
background-repeat: no-repeat;
    width: 300px;
    padding-left: 20px;
   
}

.tt{
 color: aliceblue;
}
</style>

