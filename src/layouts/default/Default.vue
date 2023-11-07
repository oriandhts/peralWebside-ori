<template>
  <v-app class="v-app-background">
    <nav-bar></nav-bar>
    <main-body></main-body>
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from "./NavBar.vue";
import MainBody from "./MainBody.vue";
</script>

<style>
.v-app-background {
  background-color: #eeeeee !important;
}
</style>
