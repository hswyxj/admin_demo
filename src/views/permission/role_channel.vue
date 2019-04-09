<template>
  <div class="app-container">
    <!-- 列表 -->
    <el-table :data="rolechannelLists" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="角色归属" width="220">
        <template slot-scope="{row}">{{ row.role_name }}</template>
      </el-table-column>
      <el-table-column align="center" label="渠道列表">
        <template slot-scope="{row}">
          <el-tag v-for="item in row.channel_name" :key="item.id" :label="item.name" :value="item.name">{{ item.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="描述">
        <template slot-scope="{row}">{{ row.description }}</template>
      </el-table-column>
      <el-table-column label="更新时间" align="center">
        <template slot-scope="{row}">
          <span>{{ row.update_time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="{row}">
          <el-button type="primary" size="small" @click="handleEdit({row})">编辑修改</el-button>
          <!-- <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑界面 -->
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'编辑渠道权限':''">
      <el-form ref="channel" :model="channel" :rules="rules" label-width="80px" label-position="left">
        <el-form-item label="角色归属" prop="role_name">
          <el-select v-model="channel.role_name" width="220" placeholder="角色选择" clearable>
            <el-option v-for="item in rolesnamelist" :key="item.value" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="渠道列表" prop="channel_name">
          <el-tree
            ref="tree"
            :check-strictly="checkStrictly"
            :data="routesData"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            default-expand-all
            highlight-current
            class="permission-tree"
          />
        </el-form-item>
        <el-form-item label="用户描述" prop="description">
          <el-input
            v-model="channel.description"
            :autosize="{ minRows: 3, maxRows: 4}"
            type="textarea"
            placeholder="请输入用户描述"
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole('channel') || getCheckedNodes()">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import path from 'path'
import { deepClone } from '@/utils'
import { getRolechannels, getChannellist, updateRolechannels } from '@/api/channel'
import { getRoleslistname } from '@/api/role'
const defaultchannel = {
  id: '',
  role_name: '',
  channel_name: [],
  game_package_name: '',
  update_user: '',
  description: ''
}
export default {
  data() {
    return {
      checkAll: false,
      channel: Object.assign({}, defaultchannel),
      rolechannelLists: [],
      channellist: [],
      rolesnamelist: [],
      isIndeterminate: true,
      dialogVisible: false,
      dialogType: 'new',
      rules: {
        role_name: [{ required: true, message: '请选择角色组', trigger: 'change' }],
        channel_name: [{ type: 'array', required: true, message: '请至少选择一个渠道', trigger: 'change' }]
      },
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  computed: {
    routesData() {
      return this.channellist
    }
  },
  created() {
    this.getRolechannels()
    this.getChannellist()
    this.getRoleslistname()
  },
  methods: {
    // async 异步函数也就意味着该函数的执行不会阻塞后面代码的执行
    // 需要注意：await必须放在async中
    async getRolechannels() {
      // await 需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果
      const res = await getRolechannels()
      this.rolechannelLists = res.data
      // console.log(this.rolechannelLists)
    },
    async getChannellist() {
      const res = await getChannellist()
      this.channellist = res.data
      // console.log(this.channellist)
    },
    async getRoleslistname() {
      const res = await getRoleslistname()
      this.rolesnamelist = res.data
      // console.log(this.rolesnamelist)
    },
    handleEdit({ row }) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = true
      this.channel = deepClone(row)
      this.$nextTick(() => {
        // set checked state of a node not affects its father and child nodes
        this.checkStrictly = false
        this.$refs.tree.setCheckedNodes(row.channel_name) // 通过 node 设置
      })
    },
    async confirmRole(channel) {
      this.$refs[channel].validate((valid) => {
        const isEdit = this.dialogType === 'edit'
        if (valid) {
          this.channel.update_time = new Date().getTime()
          this.channel.channel_name = this.$refs.tree.getCheckedNodes() // 返回目前被选中的节点所组成的数组
          if (isEdit) {
            updateRolechannels(this.channel.id, this.channel)
            for (let index = 0; index < this.rolechannelLists.length; index++) {
              if (this.rolechannelLists[index].id === this.channel.id) {
                this.rolechannelLists.splice(index, 1, Object.assign({}, this.channel))
                break
              }
            }
          }
          // } else {
          //   const { data } = createRolechannel(this.channel)
          //   this.channel.id = data
          //   this.rolechannelLists.push(this.channel)
          // }
          const { description, role_name, game_package_name } = this.channel
          // console.log(this.channel) // this.role 提交的角色权限数据
          this.dialogVisible = false
          this.$notify({
            title: '成功',
            dangerouslyUseHTMLString: true,
            message: `
            <div>角色归属: ${role_name}</div>
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
