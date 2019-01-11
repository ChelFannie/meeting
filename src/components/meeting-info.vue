<template>
  <div class="meeting-info">
    <div class="top" @click="goDetail">
      <p class="top-time">申请时间：2019-01-01 10:30:36</p>
      <van-icon name="arrow" />
    </div>
    <div class="container">
      <div class="container-line">
        <div class="container-line-item">
          <p class="item-content">会议时间：2019/01/15 - 2019/01/16</p>
          <p class="item-content">
            <span>会议地点：广东省广州市</span>
            <span>参会人数：300人</span>
          </p>
          <p class="item-content">
            <span>会议性质：招商会</span>
            <span>讲师：大斌</span>
          </p>
        </div>

        <slot name="container"></slot>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meeting-info',
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    goDetail () {
      this.$emit('go-detail')
    }
  }
}
</script>
<style lang="less">
.meeting-info{
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
      color: rgba(102,102,102,1);
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
