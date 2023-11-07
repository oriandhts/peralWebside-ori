<template>
  <v-app-bar :elevation="2">
    <v-container>
      <!-- a-avatar -->
      <v-row>
        <v-col>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"> </v-img>
          </v-avatar>
          <v-btn value="recent">
            <v-icon>mdi-history</v-icon>
            <span>Recent</span>
          </v-btn>
          <v-btn value="favorites">
            <v-icon>mdi-heart</v-icon>
            <span>Favorites</span>
          </v-btn>
          <v-btn value="nearby">
            <v-icon>mdi-map-marker</v-icon>
            <span>Nearby</span>
          </v-btn>
          <v-btn value="newCol">
            <v-icon>mdi-map-marker</v-icon>
            <span>newCOL</span>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-text-field color="success" prepend-icon="mdi-map-search-outline" loading> </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>

<style>
/* 头像离button有点近,稍微加了一个margin-right */
.v-avatar {
  margin-right: 20px;
}

/* 对input进行了一系列操作使得不影响排版（屎代码，但不想改了呜呜） */
.v-input__control {
  height: 40px;
}

.v-text-field {
  height: 40px;
}

.v-field__input {
  padding-top: 0px !important;
}

/* 调节一下icon和search框的距离 */
.v-input-end {
  margin-inline-end: 6px;
}
</style>
