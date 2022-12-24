<script setup>
import Header from "./components/Header.vue";
import WelcomePage from "./components/WelcomePage.vue";
</script>

<template>
  <div>
    <div :class="style.body">
      <Header />
      <WelcomePage />
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data: () => {
    return {
      style: {
        body: "flex flex-col w-screen h-screen overflow-x-hidden items-center justify-start relative",
      },
    };
  },
};
</script>
