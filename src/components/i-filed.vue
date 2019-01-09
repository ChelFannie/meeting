<template>
  <div class="i-filed">
    <van-cell-group>
      <van-field
        v-for="(item, index) in fieldLists"
        :key="index"
        v-model="meetingContents[item.vModle]"
        :type="item.type"
        :label="item.label"
        :placeholder="item.placeholder"
        :icon="item.icon"
        :readonly="item.readonly"
        rows="1"
        :autosize="{true: item.type==='textarea'}"
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: 'i-filed',
  props: {
    fieldLists: {
      type: Array,
      default: () => []
    },
    meetingContents: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      message: ''
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang="less">
.i-filed{
  .van-cell-group {
    background: #f7f7f7;
    .van-field {
      // &:nth-of-type(3),
      // &:nth-of-type(6) {
      //   margin-bottom: 20px;
      // }
      .van-cell__title {
        max-width: 130px;
        font-size: 28px;
      }
      .van-cell__value {
        color: #999999ff;
        .van-field__body {
          .van-field__control {
            min-height: 30px; // 必须写，用于调整textarea的行高
          }
          .van-field__icon {
            padding: 0;
            .van-icon {
              font-size: 36px;
            }
          }
        }
      }
    }
    .van-cell {
      display: flex; // flex-direction: row;
      // align-items: center;
      width: 100%;
      padding: 25px 30px;
      line-height: 45px; // 必须写，用于调整textarea的行高
      background-color: #fff;
      color: rgba(51, 51, 51);
      font-size: 28px;
      &:not(:last-child):after {
        border-color: rgba(242, 242, 242);
      }
    }
  }
}
</style>
