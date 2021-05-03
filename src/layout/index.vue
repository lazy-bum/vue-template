<template>
  <el-row type="flex" justify="center">
    <el-space>
      <router-link to="/page1">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </el-space>
  </el-row>
  <el-row type="flex" justify="center"> home </el-row>
  <el-row type="flex" justify="center">
    <router-view />
  </el-row>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
