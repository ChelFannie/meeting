<template>
  <div class="home">
    <div class="top"></div>
    <div class="home-btn">
      <button
        class="btn"
        v-for="(nav, index) in meetingNavs"
        :key="index"
        @click="meetingNav(index)">{{nav.text}}</button>
    </div>
    <van-dialog
      v-model="showConfirm"
      show-cancel-button
      closeOnClickOverlay
      title="条款"
      :message="message"
      confirm-button-text="接受"
      cancel-button-text="不接受"
      @confirm="applyMeeting"
    ></van-dialog>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      meetingNavs: [
        {text: '申请会议'},
        {text: '我的会议'}
      ],
      showConfirm: false,
      message: '条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内容条款内'
    }
  },
  created () {},
  mounted () {},
  methods: {
    meetingNav (index) {
      if (index === 0) {
        this.showConfirm = true
      } else {
        this.$router.push('/my-meetings')
      }
    },
    // 申请会议
    applyMeeting () {
      this.$router.push('/apply-meeting')
    }
  }
}
</script>
<style lang="less">
.home{
  font-size: 32px;
  .top{
    width: 100%;
    height: 300px;
    background: #3fb6fa;
    margin-bottom: 200px;
  }
  .home-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn{
      background: #3fb6fa;
      width:630px;
      height:90px;
      border-radius:10px;
      border: none;
      outline: none;
      margin-bottom: 100px;
      font-size:28px;
      color: #fff;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
}
</style>
