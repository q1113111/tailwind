<template>
  <div class="about test:tee">
    <!-- rwd -->
    <h1 class="text-sm laptop:text-6xl animate-bounce">
      標題
    </h1>
    <h1 class=" transition duration-1000 ease-in motion-safe:hover:rotate-1/4 hover:text-yellow-700">
      base 標題
    </h1>
    <h2>我是H2</h2>
    <!-- @apply -->
    <div class="card">
      <div class="flex-shrink-0 rotate-1/4">
        <svg
          class="h-12 w-12"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        ><defs><linearGradient
          id="a"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        ><stop
          stop-color="#2397B3"
          offset="0%"
        /><stop
          stop-color="#13577E"
          offset="100%"
        /></linearGradient><linearGradient
          id="b"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        ><stop
          stop-color="#73DFF2"
          offset="0%"
        /><stop
          stop-color="#47B1EB"
          offset="100%"
        /></linearGradient></defs><g
          fill="none"
          fill-rule="evenodd"
        ><path
          d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
          fill="url(#a)"
          transform="translate(1 1)"
        /><path
          d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
          fill="url(#b)"
          transform="translate(1 1)"
        /><path
          d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          fill="#FFF"
        /></g></svg>
      </div>
      <!-- flexbox 偽類 -->
      <div>
        <div class="text-xl font-medium text-black">
          ChitChat
        </div>
        <p class="text-gray-500">
          You have a new message!
        </p>
      </div>
    </div>
    <div class="max-w-md mx-auto filter- bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48  w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Man looking at item at a store"
          >
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >Finding customers for your new business</a>
          <p class="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
    <input
      type="text"
      class=" focus:outline-none focus:ring-red-700"
    >
    <br>
    <button
      class="bg-red-400 text-green-300  border-8  hover:text-blue-600 hover:bg-yellow-400 hover:border-dashed w-20 h-12"
      @click="show = !show"
    >
      test
    </button>
    <!-- vue 程式控制+入多個class -->
    <div :class="{'bg-blue-800 text-3xl':show}">
      testsss
    </div>
    <br>
    <!-- group-hover -->
    <div class="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent">
      <p class="text-indigo-600 group-hover:text-yellow-900 tablet:text-yellow-600">
        New Project
      </p>
      <!-- RWD -->
      <p class="text-indigo-500 group-hover:text-gray-500 tablet:group-hover:text-green-400">
        Create a new project from a variety of starting templates.
      </p>
    </div>
    <!-- 使用theme設定 test-white -->
    <div class="test hover:primary test-white">
      test
    </div>
    <!-- filter 套件應用  box @screen-->
    <img
      class=" filter-grayscale hover:filter-invert w-20 h-20 box"
      src="https://interactive-examples.mdn.mozilla.net/media/examples/firefox-logo.svg"
      alt=""
    >
    <!-- variants -->
    <div class="test hover:primary">
      test
    </div>
    <!-- 自定義組件樣式 -->
    <!-- js設定 -->
    <button class="btn btn-indigo">
      layers component in JS
    </button>
    <!-- css設定 -->
    <button class="btn btn-blue ">
      layers component in CSS
    </button>
    <!-- utilities -->
    <button class="btn btn-blue tablet:filter-grayscale hover:filter-grayscale">
      layers component in Unilties
    </button>
    <!-- 使用擴充元件新增的class -->
    <div class=" max-w-md max-h-56 bg-red-600 ro" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  background-color: #00F;
}

.card {
  // 若要使用import 在scss裡面要加 #{}
  @apply p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 #{!important};
}

.test\:tee {
  background-color: #F0F;
}

</style>
