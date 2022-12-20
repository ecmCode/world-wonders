<template>
  <div :class="style.header">
    <h1 :class="style.logo">{{ logo }}</h1>
    <div :class="style.nav">
      <ul v-for="(item, index) in nav" :key="index">
        <li :class="style.item">{{ item }}</li>
      </ul>
    </div>
    <font-awesome-icon icon="fa-solid fa-bars" :class="style.menu" />
  </div>
</template>

<script type="text/javascript">
export default {
  data: () => {
    return {
      logo: "Discovery",
      nav: ["Home", "About", "Gallery", "Project", "Contact"],
      style: {
        header:
          "p-2 md:p-6 w-full justify-between lg:justify-around items-start flex z-20 absolute top-0",
        logo: "font-thin select-none text-slate-50 px-10",
        nav: "hidden lg:flex gap-2 select-none",
        item: "hover:bg-slate-800/70 hover:shadow-inner text-slate-50 transition p-4 cursor-pointer tracking-widest uppercase",
        menu: "block lg:hidden text-slate-900 text-3xl cursor-pointer p-4 drop-shadow-xl hover:bg-slate-900/50 hover:shadow-inner transition hover:text-slate-50",
      },
    };
  },
};
</script>

<style scoped>
h1 {
  text-shadow: 2px 2px black;
}
</style>
