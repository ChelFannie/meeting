<template>
  <div class="select-lecturer">
    <div class="top">
      <form action="/">
        <van-search
          placeholder="搜索"
          v-model="lecturerName"
          show-action
          @search="onSearch"
          @cancel="onCancel" />
      </form>
    </div>
    <div class="content">
      <div class="content-lecture" v-for="(lecturer, index) in lectureLists" :key="index">
        <img class="lecture-img" :src="lecturer.imgSrc" alt="">
        <p class="lecture-name">{{lecturer.name}}</p>
        <button class="lecture-select" @click="select(lecturer)">选择</button>
      </div>
    </div>
  </div>
</template>
<script>
// import IHeader from '../components/i-header'

export default {
  name: 'select-lecturer',
  components: {
    // IHeader
  },
  data () {
    return {
      // 讲师名字
      lecturerName: '',
      lectureLists: [
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌1'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌2'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌3'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌4'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌2'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌3'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌'},
        {imgSrc: require('../assets/lecturer.jpg'), name: '曾斌4'}
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    select (lecturer) {
      this.$emit('selectItem', lecturer)
    },
    onSearch () {
      this.$emit('onSearch', this.lecturerName)
    },
    onCancel () {
      this.$emit('onCancel')
    }
  }
}
</script>
<style lang="less">
.select-lecturer{
  height: 100vh;
  width: 100%;
  // overflow: auto;
  .top{
    position: fixed;
    z-index: 3000;
    left: 0;
    top: 1%;
    background: #fff;
    width: 100%;
    font-size: 0;
    box-shadow:0px 1px 8px 0px rgba(0, 0, 0, 0.1);
    .van-search{
      padding: 17px 30px;
      padding-right: 0;
      background-color: #fff!important;
      .van-cell{
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        background-color: #F2F2F2;
        width: 100%;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        font-size: 28px;
        color: #999;
      }
      input::-webkit-input-placeholder{
        padding-top: 5px;
      }
      input:-moz-placeholder{
        padding-top: 5px;
      }
      input::-moz-placeholder{
        padding-top: 5px;
      }
      input:-ms-input-placeholder{
        padding-top: 5px;
      }
      .van-cell__value{
        .van-field__body{
          height: 66px;
          width: 100%;
        }
      }
      .van-search__action{
        font-size: 28px;
        padding: 16px 30px;
      }
      .van-field__control{
        font-size: 28px;
        height: 100%;
        line-height: 28px;
      }
      .van-icon{
        font-size: 32px;
      }
    }
  }
  .content{
    position: fixed;// 处理苹果兼容
    z-index: 0;
    width: 100%;
    height: 100%;
    padding-top: 128px;
    padding: 128px 30px 0 30px;
    overflow: scroll;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 35px 0;
      box-sizing: border-box;
      &:nth-of-type(2n){
        margin-right: 0;
      }
      .lecture-img{
        width:260px;
        height:260px;
      }
      .lecture-name{
        font-size:32px;
        color: #333;
        padding: 10px 0;
      }
      .lecture-select{
        width:260px;
        height:60px;
        background:rgba(43,169,241,1);
        border-radius:10px;
        color: #fff;
        font-size:32px;
      }
    }
  }
}
</style>
