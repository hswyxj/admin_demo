<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">新增用户</el-button>
    <!-- 列表 -->
    <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="角色归属" width="220">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="center" label="用户账号" width="220">
        <template slot-scope="scope">{{ scope.row.username }}</template>
      </el-table-column>
      <el-table-column align="center" label="手机号码" width="220">
        <template slot-scope="scope">{{ scope.row.iphonenum }}</template>
      </el-table-column>
      <el-table-column align="center" label="用户邮箱" width="220">
        <template slot-scope="scope">{{ scope.row.email }}</template>
      </el-table-column>
      <el-table-column align="header-center" label="描述">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑修改</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑界面 -->
    <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit UserRole':'New UserRole'" >
      <el-form ref="role" :model="role" :rules="rules" label-width="80px" label-position="left"	>
        <el-form-item label="角色归属" prop="name">
          <el-select v-model="role.name" placeholder="角色选择" clearable>
            <el-option v-for="item in rolesList" :key="item.key" :label="item.name" :value="item.name"/>
          </el-select>
        </el-form-item>
        <el-form-item label="用户账号" prop="username" >
          <el-input v-model="role.username" placeholder="请输入用户账号" clearable/>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="role.password" placeholder="请输入用户密码" show-password clearable/>
        </el-form-item>
        <el-form-item label="手机号码" prop="iphonenum">
          <el-input v-model="role.iphonenum" placeholder="请输入用户手机号码" clearable/>
        </el-form-item>
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="role.email" placeholder="请输入用户邮箱" clearable/>
        </el-form-item>
        <el-form-item label="用户描述">
          <el-input
            v-model="role.description"
            :autosize="{ minRows: 3, maxRows: 4}"
            type="textarea"
            placeholder="请输入用户描述"/>
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button type="danger" @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="confirmRole('role')">确认</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
// import path from 'path'
import { deepClone } from '@/utils'
import { getRoles, addRole, deleteRole, updateRole } from '@/api/role'

const defaultRole = {
  key: '',
  name: '',
  username: '',
  password: '',
  iphonenum: '',
  email: '',
  description: ''
  // routes: []
}
export default {
  data() {
    return {
      role: Object.assign({}, defaultRole),
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      rules: {
        name: [{ required: true, message: '请选择角色组', trigger: 'change' }],
        username: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
        password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }],
        iphonenum: [{ required: true, message: '请输入用户手机号码', trigger: 'blur' }],
        email: [{ required: true, message: '请输入用户邮箱', trigger: 'blur' }]
      }
    }
  },

  created() {
    this.getRoles()
  },
  methods: {
    // async 异步函数也就意味着该函数的执行不会阻塞后面代码的执行
    // 需要注意：await必须放在async中
    async getRoles() {
      // await 需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果
      const res = await getRoles()
      this.rolesList = res.data
      // console.log(this.role)
    },
    handleAddRole() {
      this.role = Object.assign({}, defaultRole)
      // if (this.$refs.tree) {
      //   this.$refs.tree.setCheckedNodes([])
      // }
      this.dialogType = 'new'
      this.dialogVisible = true
      this.$nextTick(() => { // 等整个视图都渲染完毕后
        this.$refs['role'].clearValidate()
        // console.log(this.$refs) //ref属性的所有元素的引用
      })
    },
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.role = deepClone(scope.row)
    },
    handleDelete({ $index, row }) {
      this.$confirm('确定要删除该角色吗?', 'Warning', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(row.id)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        })
        .catch(err => { console.error(err) })
    },
    async confirmRole(role) {
      this.$refs['role'].validate((valid) => {
        const isEdit = this.dialogType === 'edit'
        if (valid) {
          if (isEdit) {
            updateRole(this.role.key, this.role)
            for (let index = 0; index < this.rolesList.length; index++) {
              if (this.rolesList[index].key === this.role.key) {
                this.rolesList.splice(index, 1, Object.assign({}, this.role))
                break
              }
            }
          } else {
            const { data } = addRole(this.role)
            this.role.key = data
            this.rolesList.push(this.role)
          }
          const { description, name, username } = this.role
          // console.log(this.role)  // this.role 提交的角色权限数据
          this.dialogVisible = false
          this.$notify({
            title: '成功',
            dangerouslyUseHTMLString: true,
            message: `
            <div>角色归属: ${name}</div>
            <div>角色名称: ${username}</div>
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
