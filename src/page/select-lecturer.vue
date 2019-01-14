<template>
  <div class="select-lecturer">
    <i-header text="讲师选择">
      <van-search placeholder="搜索" v-model="lecturerName" />
    </i-header>
    <div class="content">
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
      <div class="content-lecture"></div>
    </div>
  </div>
</template>
<script>
import IHeader from '../components/i-header'

export default {
  name: 'select-lecturer',
  components: {
    IHeader
  },
  data () {
    return {
      // 讲师名字
      lecturerName: ''
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.select-lecturer{
  height: 100vh;
  width: 100%;
  padding-top: 188px;
  box-sizing: border-box;
  .i-header{
    box-shadow:0px 1px 8px 0px rgba(0, 0, 0, 0.1);
    .van-search{
      padding: 17px 30px;
      background-color: #fff!important;
      .van-cell{
        padding: 0;
        padding-left: 20px;
        padding-right: 10px;
        box-sizing: border-box;
        background-color: #F2F2F2;
        height: 66px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 28px;
        color: #999;
      }
      .van-icon{
        font-size: 32px;
      }
    }
  }
  .content{
    width: 100%;
    margin: 30px 30px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .content-lecture{
      width: 330px;
      height: 440px;
      background-color: #fff;
      box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-right: 30px;
      margin-bottom: 30px;
      &:nth-of-type(2n){
        margin-right: 0;
      }
    }
  }
}
</style>
