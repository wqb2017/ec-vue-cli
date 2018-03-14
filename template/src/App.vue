<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  min-width: 1280px;
  overflow-y: hidden;
}
</style>

