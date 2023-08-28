<template>
  <div id="app">
    <div class="poz">
    <h2>Таймер отсчёта</h2>
    <div class="circle">
      <diagram
        class-circle-front="yellow"
        :data-dasharray="[timePassed, timer.total]"
        radius="51%"
        :satellite="true"
        is-timer
      />
      <span>{{ time }}</span>
    </div>
    <br />
    <hr />
    <br />
    
    <h3>Задания {{ addTask.total }} </h3>

    <div class="fruit-wrap">
      <div class="circle circle--static">
        <diagram
          class-circle-front="green"
          :data-dasharray="[addTask.completedTasks, addTask.total]"
          radius="51%"
        />
        <span> Выполнено &nbsp; {{ addTask.completedTasks }}</span>
      </div>
      <div class="circle circle--static">
        <diagram
          class-circle-front="blue"
          :data-dasharray="[addTask.Task, addTask.total]"
          radius="51%"
        />
        <span>Невыполнено &nbsp; {{ addTask.Task }} </span>
      </div>
    </div>
    </div>
    <br />
  </div>
</template>

<script>
import Diagram from "../components/Diagram.vue";

export default {
  name: "App",
  
  components: {
    Diagram, 
  },
  data() {
    return {
      timer: {
        descriptor: undefined,
        minutes: 2,
        seconds: 0,
        total: 120000,
      },
      addTask: {
        completedTasks: 3,
        Task: 2,
        total: 5,
      },
    };
  },
  computed: {
    time() {
      return `${this.timer.minutes}:${
        this.timer.seconds < 10 ? "0" + this.timer.seconds : this.timer.seconds
      }`;
    },
    timePassed() {
      const minutesInSeconds =
        this.timer.minutes !== 0 ? this.timer.minutes * 60 : 1;
      const passed =
        this.timer.total -
        (minutesInSeconds * 1000 + this.timer.seconds * 1000);
      return this.timer.total - passed;
    },
  },
  mounted() {
    setTimeout(() => {
      this.addTask.completedTasks = completedTasks;
      this.addTask.Task = Task;
  
    }, 100);
    this.timer.descriptor = window.setInterval(this.runTimer, 1000);
  },
  methods: {
    runTimer() {
      if (this.timer.seconds === 0 && this.timer.minutes === 0) {
        window.clearInterval(this.timer.descriptor);
        this.timer.descriptor = undefined;
        this.timerLost = true;
        return;
      }

      if (this.timer.seconds === 0) {
        this.timer.seconds = 59;
        this.timer.minutes--;
      } else {
        this.timer.seconds--;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
 
  font-family: "cursive", Сomic Sans MS, Monotype Corsiva, Mistral;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 0 auto;
  position: center;
  background: #90a5b9;
  max-height: 1000px;
  height: 700px;
  background-color: #CCCCFF;
}

.poz{
  padding-left: 200px;
}

.fruit-wrap {

  display: flex;
  justify-content: center;
  padding: 0 5em;
  
}

.circle {
  
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  color: #000000;
  

  &--static {
  
    display: inline-block;
    margin: 0;
    width: 220px;
    height: 220px;
    position: relative;
    left: 0;
    

    span {
  
      font-size: 16px !important;
      font-weight: normal !important;
      /* z-index: -1; */
    }

    circle {
      /* stroke-width: 100% !important; */
      stroke-width: 3px !important;
      /* transform: rotateZ(90deg) rotateY(-180deg) scale(0.5) !important; */
      transform: rotateZ(90deg) rotateY(-180deg) !important;
      transition-duration: 1.5s !important;
      z-index: 2;
    }
  }

  span {
    
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    color: #000000;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
  }

  .yellow {
    stroke: #005c14!important;
  }
  .green {
    stroke: #298080 !important;
  }
  .blue {
    stroke: #8441f0 !important;
  }
  
  
}
</style>
