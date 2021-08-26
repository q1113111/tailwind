<template>
  <div class="about">
    <button @click="test()">
      1
    </button><button @click="test2()">
      2
    </button>
    <h1 class=" text-primary">
      This is an about page
    </h1>
    <h2 class=" text-danger">
      i am
    </h2>
  </div>
</template>
<script>
export default {
  methods: {
    test () {
      document.documentElement.classList.remove('theme-light')
      document.documentElement.classList.add('theme-dark')
    },
    test2 () {
      document.documentElement.classList.remove('theme-dark')
      document.documentElement.classList.add('theme-light')
    }
  }
}
</script>
