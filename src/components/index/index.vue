<template>
  <div>
    <div class="jumbotron">
      <router-view></router-view>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="searvalue" class="input-with-select">
          <el-button @click="sear" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <MyInput :title.sync="title"></MyInput>
      <button @click="aaaa">付清</button>
    </div>
    <!-- <div style="height: 500px; overflow-y: auto;">
        <el-row>
          <el-col style="width: 200px;height: 400px;" :span="8" v-for="(item, index) in $store.state.list" :key="item.id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.images.small" class="image">
              <div style="padding: 14px;">
                <span>{{ item.title }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.mainland_pubdate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyInput from '../input/input'

export default {
  data() {
    return {
      searvalue: "",
      title: "111"
    }
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
    }
  },
  components: {
    MyInput
  },
  computed:{
    ...mapState(['count'])
  },
  created() {
  },
  methods: {
    sear() {
      if(this.searvalue) {
        this.$store.dispatch('updatelist', this.searvalue)
      }
    },
    aaaa() {
      console.log(this.title)
    }
  }
}

</script>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>