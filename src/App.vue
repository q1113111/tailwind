<template>
  <div
    id="app"
    class="bg-base"
  >
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
    <router-view />
  </div>
</template>
<script>
document.documentElement.classList.add('theme-dark')
</script>
<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2C3E50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2C3E50;

    &.router-link-exact-active {
      color: #42B983;
    }
  }
}

.test{

}
</style>
