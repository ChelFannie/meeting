<template>
  <div class="meeting-info">
    <div class="list-item" v-for="(list, index) in columnsLists" :key="index">
      <div class="top" @click="goDetail(list)">
        <p class="top-time">申请时间：{{list.applicationTime}}</p>
        <van-icon v-if="icon" name="arrow" />
      </div>
      <div class="container">
        <div class="container-line">
          <div class="container-line-item">
            <p class="item-content">会议时间：{{list.meetingDate}}</p>
            <p class="item-content">
              <span>会议地点：{{list.regionalFullName}}</span>
              <span>参会人数：{{list.participantsNumber}}人</span>
            </p>
            <p class="item-content">
              <span>会议性质：{{list.meetingTypeWords}}</span>
              <span>讲师：{{list.lecturer}}</span>
            </p>
          </div>

          <slot name="container"></slot>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meeting-info',
  props: {
    icon: {
      type: Boolean,
      default: true
    },
    columnsLists: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    goDetail (list) {
      this.$emit('go-detail', list)
    }
  }
}
</script>
<style lang="less">
.meeting-info{
  .list-item{
    margin-bottom: 20px;
    background: #fff;
  }
  .top{
    position: relative;
    height: 88px;
    line-height: 88px;
    border-bottom: 1px solid rgba(242,242,242);
    box-sizing: border-box;
    .top-time{
      padding: 0 30px;
      color: rgba(51,51,51);
      font-size: 28px;
    }
    .van-icon{
      font-size: 36px;
      position: absolute;
      top: 50%;
      right: 21px;
      transform: translateY(-50%);
    }
  }
  .container{
    .container-line{
      border-bottom: 1px solid rgba(242,242,242);
      font-size: 28px;
      color: #333333;
      .container-line-item{
        padding: 0 30px;
        .item-content{
          height: 66px;
          font-size: 28px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
