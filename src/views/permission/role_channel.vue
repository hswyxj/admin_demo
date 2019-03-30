<template>
  <div class="app-container">
    <!-- 列表 -->
    <el-table :data="rolechannelList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="角色归属" width="220">
        <template slot-scope="scope">{{ scope.row.role_name }}</template>
      </el-table-column>
      <el-table-column align="center" label="渠道列表" max-width="520">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.channel_name" :key="item" :label="item" :value="item">{{ item }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="描述">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑修改</el-button>
          <!-- <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑界面 -->
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit Rolechannel':'New Rolechannel'">
      <el-form ref="channel" :model="channel" :rules="rules" label-width="80px" label-position="left"	>
        <el-form-item label="角色归属" prop="role_name" >
          <el-select
            v-model="channel.role_name"
            width="220"
            placeholder="角色选择"
            clearable>
            <el-option v-for="item in rolechannelList" :key="item.id" :label="item.role_name" :value="item.role_name"/>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道列表" prop="channel_name">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="channel.channel_name" @change="handleCheckedchannelnamesChange">
            <el-checkbox v-for="item in channel.channel_namelist" :key="item" :label="item" :value="item" name="channel_name"/>
          </el-checkbox-group>
          <!-- <el-select
            v-model="channel.channel_name"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择渠道，可多选"
            clearable>
            <el-option v-for="item in channel.channel_namelist" :key="item.id" :label="item.name" :value="item.name" name="channel_name"/>
          </el-select> -->
        </el-form-item>
        <el-form-item label="用户描述" prop="description">
          <el-input
            v-model="channel.description"
            :autosize="{ minRows: 3, maxRows: 4}"
            type="textarea"
            placeholder="请输入用户描述"/>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole('channel')">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import path from 'path'
import { deepClone } from '@/utils'
import { getRolechannels, updateRolechannels, createRolechannel } from '@/api/channel'

const defaultchannel = {
  id: '',
  role_name: '',
  channel_name: [],
  channel_namelist: [],
  game_package_name: '',
  update_user: '',
  description: ''
}
export default {
  data() {
    return {
      checkAll: false,
      channel: Object.assign({}, defaultchannel),
      rolechannelList: [],
      isIndeterminate: true,
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      rules: {
        role_name: [{ required: true, message: '请选择角色组', trigger: 'change' }],
        channel_name: [{ type: 'array', required: true, message: '请至少选择一个渠道', trigger: 'change' }]
      }
    }
  },

  created() {
    this.getRolechannels()
  },
  methods: {
    // async 异步函数也就意味着该函数的执行不会阻塞后面代码的执行
    // 需要注意：await必须放在async中
    async getRolechannels() {
      // await 需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果
      const res = await getRolechannels()
      this.rolechannelList = res.data
      this.channel_namelists = this.rolechannelList[0].channel_namelist
      // console.log(this.channel_namelists)
    },
    handleCheckAllChange(val) {
      this.channel.channel_name = val ? this.channel.channel_namelist : []
      this.isIndeterminate = false
    },
    handleCheckedchannelnamesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.channel.channel_namelist.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.channel.channel_namelist.length
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.channel = deepClone(scope.row)
    },
    async confirmRole(channel) {
      this.$refs[channel].validate((valid) => {
        const isEdit = this.dialogType === 'edit'
        if (valid) {
          if (isEdit) {
            updateRolechannels(this.channel.id, this.channel)
            for (let index = 0; index < this.rolechannelList.length; index++) {
              if (this.rolechannelList[index].id === this.channel.id) {
                this.rolechannelList.splice(index, 1, Object.assign({}, this.channel))
                break
              }
            }
          } else {
            const { data } = createRolechannel(this.channel)
            this.channel.id = data
            this.rolechannelList.push(this.channel)
          }
          const { description, role_name, channel_name, game_package_name } = this.channel
          // console.log(this.role)  // this.role 提交的角色权限数据
          this.dialogVisible = false
          this.$notify({
            title: '成功',
            dangerouslyUseHTMLString: true,
            message: `
            <div>角色归属: ${role_name}</div>
            <div>渠道名称: ${channel_name}</div>
            <div>包体名称: ${game_package_name}</div>
            <div>描述: ${description}</div>
          `,
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>

