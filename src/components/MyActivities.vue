<template>
  <v-container>
    <v-row>
      <v-col>全部动态 <v-icon>mdi-menu-down</v-icon></v-col>
      <v-spacer></v-spacer>
      <v-col class="v-col-icon">
        <div>
          <v-icon size="x-large">mdi-refresh</v-icon>
          <v-icon size="x-large">mdi-eye-check</v-icon>
        </div>
      </v-col>
    </v-row>
    <hr class="v-divider v-theme--light my-2" aria-orientation="horizontal" role="separator" />
    <div v-for="item in mystatusList">
    <v-row class="v-row-core">
      <v-col cols="1">
        <v-avatar size="60">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"> </v-img>
        </v-avatar>
      </v-col>
      <v-col cols="3" class="v-col-textMsg">
        <span class="flex-1 title-size">黄拓森Ori在线发言 <v-icon>mdi-alpha-v</v-icon></span>
        <span class="flex-1 subtitle-size">2023.11.3 21:05</span>
      </v-col>
    </v-row>
    <v-row> <v-col>{{ item.mystatusComment}}</v-col> </v-row>
    <v-row>
      <v-col>
        <!-- 此处展示照片 -->
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" :aspect-ratio="16 / 9"> </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="v-col-textMsg">
          <div class="subtitle-size">今日状态：happy <v-icon>mdi-robot-happy-outline</v-icon></div>
          <div class="subtitle-size flex">
            <span class="flex-1">浏览量:1次</span>
            <span>
              <v-icon class="v-col-icon-margin">mdi-thumb-up-outline</v-icon>
              <v-icon class="v-col-icon-margin">mdi-comment-minus-outline</v-icon>
              <v-icon class="v-col-icon-margin">mdi-share-all</v-icon>
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script lang="ts" setup>
import { getAllstatus } from "../apis/mystatus";
import { ref } from "vue";
import { onMounted } from "vue";
// 响应式数据
let mystatusList = ref();

//onMounted函数,在组件全部渲染后开始调用
onMounted(async () => {
    mystatusList.value = await getAllstatus();
    console.log(mystatusList.value);
  })
</script>

<style>
.flex-1 {
  flex: 1;
}

.flex {
  display: flex;
}

.title-size {
  font-size: 19px;
}

.subtitle-size {
  color: rgb(154, 152, 152);
}
.mdi-menu-down {
  margin-bottom: 4px;
}

.v-col-icon-margin {
  margin-left: 30px;
}
.mdi-robot-happy-outline {
  margin-bottom: 4px;
}

.mdi-eye-check {
  margin-left: 8px;
}

.v-col-icon {
  display: flex;
  justify-content: end;
}

.v-row-core {
  margin-top: 20px;
}

.v-col-textMsg {
  display: flex;
  flex-direction: column;
}
</style>
