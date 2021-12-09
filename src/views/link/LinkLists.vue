<template>
  <div>
    <div class="list">
      <div class="list-item" v-for="item of 9" :key="item">
        <div class="front">
          <v-img height="140px" lazy-src="" src="https://picsum.photos/id/11/500/300"></v-img>
        </div>
        <v-card class="back">
          <h4 class="title">{{ '风丶宇的个人博客' }}</h4>
          <p class="desc">{{ '往事不随风' }}</p>
          <a href="https://www.talkxj.com/" target="_blank" class="btn"> 直达</a>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkLists',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .list-item {
    display: flex;
    margin-bottom: 4rem;
    position: relative;
    width: 31%;
    height: 140px;
    transition: all 0.5s;

    & > div {
      width: 100%;
      height: 100%;
      transition: 0.5s;
      position: absolute;
      /* 背面隐藏 */
      backface-visibility: hidden;
    }

    .front {
      transform: rotateY(0deg);
    }
    .back {
      padding: 1rem;
      .title {
        margin: 0;
        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        margin: 0.6rem 0 1.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
      }

      .btn {
        display: inline-block;
        background-color: #3eaf7c;
        color: #fff;
        border-radius: 2px;
        padding: 2px 5px;
        font-size: 12px;
        text-decoration: none;
        cursor: pointer;
      }
      transform: rotateY(180deg);
    }

    &:hover .front {
      transform: rotateY(180deg);
    }
    &:hover .back {
      transform: rotateY(0deg);
    }
  }
}

@media (max-width: 719px) {
  .list {
    .list-item {
      width: 100%;
    }
  }
}
</style>
