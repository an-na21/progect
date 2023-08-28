<template>
  <body>
  
      <div class="appp">
      
        <h1>Список заданий</h1>
        
    
        <div class="add-task">
          <input v-model="newTask" placeholder="Введите новую задачу" @keyup.enter="addTask" />
          <button class="custom-btn btn-6" @click="addTask"><span>Добавить</span></button>
          <div v-show="error" class="error">{{ error }}</div>
        </div>
    
        <div class="task-list">
          <h2>Невыполненные задачи:</h2>
          <ul class="bb">
            <li v-for="(task, index) in tasks" :key="index">
              <span :class="{ done: task.done }">{{ task.title }}</span>
              <button class="custom-btn1 btn-9" @click="editTask(index)"><span>Редактировать</span></button>
              <button class="custom-btn btn-6" @click="deleteTask(index)"><span>Удалить</span></button>
              <button class="custom-btn3 btn-8" @click="toggleTaskDone(index)">
                <span>  {{ task.done ? "Отметить как невыполненное" : "Отметить как выполненное" }} </span>
              </button>
            </li>
          </ul>
    
          <h2>Выполненные задачи:</h2>
          <ul class="bb">
            <li v-for="(task, index) in completedTasks" :key="index">
              <span>{{ task.title }}</span>
              <button class="custom-btn btn-6" @click="deleteCompletedTask(index)"><span>Удалить</span></button>
            </li>
          </ul>
        </div>
        <div class="stats">
          <p class="sss">Выполнено: {{ completedTasks.length }} / {{ tasks.length }} заданий</p>
        </div>
      </div>
    </body>
    </template>
    
    <script>
    export default {
      name: "App",
      data() {
        return {
          newTask: "",
          error: "",
          tasks: [],
          editingIndex: null,
        };
      },
      methods: {
        addTask() {
          if (!this.newTask) {
            this.error = "Поле не может быть пустым";
            return;
          }
    
          if (this.editingIndex === null) {
            this.tasks.push({
              title: this.newTask,
              done: false,
            });
          } else {
            this.tasks.splice(this.editingIndex, 1, {
              title: this.newTask,
              done: this.tasks[this.editingIndex].done,
            });
            this.editingIndex = null;
          }
    
          this.newTask = "";
          this.error = "";
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        editTask(index) {
          this.newTask = this.tasks[index].title;
          this.editingIndex = index;
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        deleteTask(index) {
          this.tasks.splice(index, 1);
    
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        toggleTaskDone(index) {
          this.tasks[index].done = !this.tasks[index].done;
    
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
        deleteCompletedTask(index) {
          this.completedTasks.splice(index, 1);
    
          localStorage.setItem("tasks", JSON.stringify(this.tasks));
        }, 
      }, 
      computed: {
        completedTasks() {
          return this.tasks.filter((task) => task.done);
        },
      },
      mounted() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
          this.tasks = JSON.parse(storedTasks);
        }
      },
      };

    </script>

  <style lang="scss">



.appp{
  
  font-family: "cursive", Сomic Sans MS, Monotype Corsiva, Mistral;
  font-size: 20px;
  max-height: max-content;
  height: 680px;
  max-width: 100%;
  margin: 0 auto;
 
  padding-left: 300px;
color: #c532ff;
}

h1 {
text-align: center;
margin-top: 15px;
margin-bottom: 15px;
}


.add-task {
  
  justify-content: center;
  display: flex;
  align-items: center;
  
}


input {
 
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
 
}

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-6 {
  background: rgb(247,150,192);
background: radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 1px;
 box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}
.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}
.btn-6:hover{
  background: transparent;
  color: #76aef1;
  box-shadow: none;
}
.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:hover:before {
  width: 100%;
}
.btn-6 span:hover:after {
  width: 100%;
}



.custom-btn1 {
  width: 180px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-9 {
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
}
.btn-9:after {
  position: absolute;
  content: " ";
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   background-color: #1fd1f9;
background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
  transition: all 0.3s ease;
}
.btn-9:hover {
  background: transparent;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  color: #fff;
}
.btn-9:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
}



.custom-btn3 {
  width: 280px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}
.btn-8 {
  background-color: #f0ecfc;
background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-8 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-8:before,
.btn-8:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: #c797eb;
  /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
  transition: all 0.3s ease;
}
.btn-8:before{
   height: 0%;
   width: 2px;
}
.btn-8:after {
  width: 0%;
  height: 2px;
}
.btn-8:hover:before {
  height: 100%;
}
.btn-8:hover:after {
  width: 100%;
}
.btn-8:hover{
  background: transparent;
}
.btn-8 span:hover{
  color: #c797eb;
}
.btn-8 span:before,
.btn-8 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: #c797eb;
  /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
  transition: all 0.3s ease;
}
.btn-8 span:before {
  width: 2px;
  height: 0%;
}
.btn-8 span:after {
  height: 2px;
  width: 0%;
}
.btn-8 span:hover:before {
  height: 100%;
}
.btn-8 span:hover:after {
  width: 100%;
}



.error {
  color: red;
}

.task-list {
  margin-top: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
 
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done {
  text-decoration: line-through;
}

.stats {
  margin-top: 20px;
  text-align: center;
}

h2{
  color: rgb(132, 10, 247);
}

.sss{
  color: rgb(59, 99, 16);
}

  </style>