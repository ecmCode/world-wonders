<script setup>
import wallpapers from "../assets/index.json";
</script>

<template>
  <div :class="style.body">
    <img :src="wallpapers.wallpapers[value].url" :class="style.bg" />
    <font-awesome-icon
      icon="fa-solid fa-arrow-left"
      :class="`${style.icon} ${wallpapers.wallpapers[value].style.arrow}`"
      @click="decrement"
    />
    <div :class="style.container">
      <h1 :class="`${style.title} ${wallpapers.wallpapers[value].style.title}`">
        {{ wallpapers.wallpapers[value].name }}
      </h1>
      <p :class="style.sub">
        Wonder of the World #{{ value + 1 }}:
        <span :class="wallpapers.wallpapers[value].style.text">
          {{ wallpapers.wallpapers[value].location }}
        </span>
      </p>
      <p
        :class="`${style.text} ${wallpapers.wallpapers[value].style.background}`"
      >
        {{ wallpapers.wallpapers[value].description }}
        <button
          :class="`${style.button} ${wallpapers.wallpapers[value].style.button}`"
        >
          More
        </button>
      </p>
    </div>
    <font-awesome-icon
      icon="fa-solid fa-arrow-right"
      :class="`${style.icon} ${wallpapers.wallpapers[value].style.arrow}`"
      @click="increment"
    />
  </div>
</template>

<script type="text/javascript">
export default {
  data: () => {
    return {
      style: {
        icon: "z-10 relative top-0 lg:top-10 text-5xl rounded-full p-0 lg:p-4 h-10 w-10 bg-none hover:shadow-xl transition cursor-pointer hover:animate-pulse",
        body: "w-full h-full flex justify-around items-center text-slate-50 select-none",
        bg: "absolute w-screen h-screen scale-125 sm:scale-100 object-cover brightness-90 ",
        container:
          "z-10 w-3/4 lg:w-2/3 flex flex-col justify-start lg:justify-center items-center p-0 lg:p-10 relative top-10 ",
        title:
          "uppercase text-5xl sm:text-6xl lg:text-7xl tracking-widest first-letter:text-7xl first-letter:sm:text-8xl first-letter:font-bold text-center drop-shadow-lg m-4",
        sub: "relative left-0 lg:left-40 font-thin p-2 tracking-wider font-bold sm:p-4 text-xl md:text-2xl bg-slate-900/60 transition duration-300 hover:bg-transparent hover:text-transparent",
        text: "w-full text-base sm:text-lg text-left p-4 lg:p-10 backdrop-blur-sm hover:backdrop-blur-none hover:bg-transparent rounded-md transition duration-300 shadow-lg hover:shadow-none hover:text-transparent",
        button:
          "m-4 hover:ring-offset-2 ring-offset-transparent float-left tracking-widest sm:float-right",
      },
      value: 0,
    };
  },
  methods: {
    decrement() {
      if (this.value <= 0) {
        this.value = 4;
      } else {
        this.value -= 1;
      }
    },
    increment() {
      if (this.value >= wallpapers.wallpapers.length-1) {
        this.value = 0;
      } else {
        this.value += 1;
      }
    },
  },
};
</script>
