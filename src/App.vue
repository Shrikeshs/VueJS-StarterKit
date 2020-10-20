<template>
  <div id="app">
  
    <div class="container">
    <vue-particles
        color="#000000"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="part"
      >
      </vue-particles>
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from './components/AddTodo'
export default {
  name: "App",
  components: {
    Todos,
    AddTodo
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  
}
/* Placing the items in a container will help view the site in all devices */
.container {
  max-width: 1100px;
  margin: auto;
  z-index: 0;
  padding: 0 2rem;position: relative;
}
.container #canvas {
  position : absolute; width:100%;
  height:100%; z-index:-1;
}
</style>
