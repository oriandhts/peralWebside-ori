<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet class="v-sheet-sidebar">
            <v-list>
              <v-list-subheader>REPORTS</v-list-subheader>
              <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
              <hr class="v-divider v-theme--light my-2" aria-orientation="horizontal" role="separator" />
              <v-list-item v-for="(item, i) in item2" :key="i" :value="item" color="primary">
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="v-sheet-main">
            <my-activities></my-activities>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import MyActivities from "@/components/MyActivities.vue";
const items: Array<any> = [
  { text: "黄拓森动态", icon: "mdi-clock" },
  { text: "黄拓森的网站", icon: "mdi-account" },
  { text: "黄拓森的音乐", icon: "mdi-flag" },
  { text: "为我添加标签", icon: "mdi-account" }
];

const item2 = [{ text: "我的游戏", icon: "mdi-clock" }];
</script>

<style>
/* main的左边sidebar部分 */
.v-sheet-sidebar {
  background-color: rgb(255, 255, 255);
  height: 321px;
}

/* main的右边mainbody部分 */
.v-sheet-main {
  background-color: rgb(255, 255, 255);
  min-height: 70vh;
}

/* 调整了一下list左边的icon和右边的文字的距离 */
.v-list-item__prepend {
  width: 35px !important;
}
</style>
