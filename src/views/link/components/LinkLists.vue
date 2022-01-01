<template>
  <ul class="list flex-between">
    <li class="list-item" v-for="item of 9" :key="item">
      <v-card class="front">
        <SkeletonImg height="140px" src="https://picsum.photos/id/11/500/300" />
      </v-card>
      <v-card class="back list-text">
        <h4 class="title">{{ '风丶宇的个人博客' }}</h4>
        <p class="desc">{{ '往事不随风' }}</p>
        <a href="https://www.talkxj.com/" target="_blank" class="btn">直达</a>
      </v-card>
    </li>
  </ul>
</template>

<script>
import SkeletonImg from '@/components/images/SkeletonImg'

export default {
  name: 'LinkLists',
  components: {
    SkeletonImg
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.flex-between::after {
  width: 31%;
}
.list {
  padding-left: 0;

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
      transform: rotateY(180deg);
    }
    .list-text {
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
    }

    &:hover .front {
      transform: rotateY(180deg);
    }
    &:hover .back {
      transform: rotateY(0deg);
    }
  }
}

@media (max-width: $screen-md) {
  .list {
    .list-item {
      width: 48%;
    }
  }
}

@media (max-width: $screen-sm) {
  .list {
    .list-item {
      width: 100%;
    }
  }
}
</style>
