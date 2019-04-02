<template>
  <div class="app-container">
    <!--工具条 顶部功能条-->
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="标题" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-select v-model="listQuery.importance" placeholder="重要性" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"/>
      </el-select>

      <el-select v-model="listQuery.status" placeholder="状态" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in calendarStatusOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
      </el-select>

      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key"/>
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">新增</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
      <!-- showReviewer 显示隐藏 -->
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">审核人</el-checkbox>
    </div>

    <!--列表-->
    <!-- @sort-change="sortChange 事件会在页面加载时自动触发一次-->
    <!--列表 @selection-change="selsChange" 多选 便于获取选中的值-->
    <!--  row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。 -->
    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      :row-class-name="tableRowClassName"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
      @selection-change="selsChange" >

      <el-table-column type="selection" width="65" align="center"/>

      <el-table-column label="序号" prop="id" sortable="custom" align="center" width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" min-width="150px">
        <template slot-scope="scope">
          <!-- 标题可点击 -->
          <span class="link-type" @click="handleUpdate(scope.row)">{{ scope.row.title }}</span>
          <!-- <el-tag>{{ scope.row.type | typeFilter }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="作者" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" label="审核人" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column label="重要性" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>
      <!-- 阅读数可点击 -->
      <el-table-column label="阅读数" align="center" width="95">
        <template slot-scope="scope">
          <span v-if="scope.row.pageviews" class="link-type" @click="handleFetchPv(scope.row.pageviews)">{{ scope.row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>

      <el-table-column label="状态" class-name="status-col" width="100">
        <template slot-scope="scope">
          <!-- <el-tag>{{ scope.row.status | statusFilter }}</el-tag> -->
          <el-tag v-if="scope.row.status==='published'" type="success" >{{ scope.row.status | statusFilter }}</el-tag>
          <el-tag v-if="scope.row.status==='draft'" type="info" >{{ scope.row.status | statusFilter }}</el-tag>
          <!-- <el-tag v-if="scope.row.status==='deleted'" type="danger" >{{ scope.row.status | statusFilter }}</el-tag> -->
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleModifyStatus(scope.row,'published')">发布
          </el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleModifyStatus(scope.row,'draft')">草稿
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--底部工具条-->
    <el-col :span="24" class="toolbar">
      <el-button :disabled="sels.length===0" type="danger" @click="batchRemove">批量删除</el-button>
      <!-- <el-button class="small" type="warning" size="small" @click="removeBatch(list)">批量删除</el-button> -->
      <!-- 分页 -->
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @current-change="handleUpdate" @pagination="getList" />
    </el-col>

    <!--编辑界面-->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="时间" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date"/>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-input v-model="temp.title"/>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarStatusOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;"/>
        </el-form-item>
        <el-form-item label="点评">
          <!-- v-model双向数据绑定 -->
          <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="temp.remark" type="textarea" placeholder="Please input"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <!-- 点击取消 关闭窗口 @click="dialogFormVisible = false"-->
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <!-- 点击事件三元运算符 动态更换绑定的函数 dialogStatus等于create 新增数据=》更新数据-->
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确认</el-button>
      </div>
    </el-dialog>
    <!-- :visible.sync="dialogPvVisible" 双向绑定值。通过该值控制 dialog显示-->
    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel"/>
        <el-table-column prop="pv" label="Pv"/>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle, batchremoveArticle } from '@/api/article' // @ 等价于 /src 这个目录，避免写麻烦又易错的相对路径
import waves from '@/directive/waves' // Waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
const calendarStatusOptions = [
  { key: 'published', display_name: '已发布' },
  { key: 'draft', display_name: '草稿' }
  // { key: 'deleted', display_name: '已删除' }
]
// arr to obj ,such as { CN : "China", US : "USA" }
const calendarStatusKeyValue = calendarStatusOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})
// export defaul是模块化，也就是保持一个组件的独立性
// export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。而 new Vue() 相当于一个构造函数，
// 在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。
export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      // const statusMap = {
      //   published: 'success',
      //   draft: 'info',
      //   deleted: 'danger'
      // }
      // return statusMap[status]
      return calendarStatusKeyValue[status]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: [],
      total: 0,
      sels: [], // 选中显示的值
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        status: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarStatusOptions,
      sortOptions: [{ label: 'ID正序', key: '+id' }, { label: 'ID倒序', key: '-id' }],
      // statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: true,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        // type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑修改页',
        create: '新增数据页'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        // type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },

  // 在这发起后端请求，拿回数据，配合路由钩子做一些事情 （dom渲染完成 组件挂载完成 ）
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.mockLists = response.data.mockList // 导出所有数据源
        // console.log(this.mockLists)
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    // row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 'published') {
        return 'success-row'
      } else if (row.status === 'draft') {
        return 'info-row'
      } else if (row.status === 'deleted') {
        return 'danger-row'
      }
      // if (rowIndex % 2 !== 0) {
      //   if (rowIndex) {
      //     return 'success-row'
      //   }
      // } else if (rowIndex % 2 !== 1) {
      //   return ''
      // }
    },

    handleFilter() {
      // this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      console.log(status)
      if (status === 'deleted') {
        this.handleDelete()
      } else {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
      }
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published'
        // type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true // 控制是否弹窗显示
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'test'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp) // unshift添加数据
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    // 点击编辑
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj //这样就不会共用同一个对象
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    // 编辑-确认
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v) // 找到要删除数据在list中的位置
                this.list.splice(index, 1, this.temp) // //通过splice 替换数据 触发视图更新
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    // 列表单个删除
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row) // 找到要删除数据在list中的位置
      this.list.splice(index, 1) // 通过splice 删除数据
    },
    // 阅读数据类型数据
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true // 控制是否弹窗显示
      })
    },
    // 全选单选多选
    selsChange(sels) {
      // 被选中的行组成数组
      this.sels = sels
    },
    // 批量删除
    batchRemove() {
      var ids = this.sels.map(item => item.id).toString()
      // 二次确认
      this.$confirm('确认删除选中记录吗？', '提示', {
        type: 'warning'
      })
        .then(() => {
          const para = { ids: ids }
          // 被选中数组传给后端接口
          batchremoveArticle(para).then(res => {
            // 根据后端返回类型前端提示
            this.$message({
              message: '删除成功',
              type: 'success',
              duration: 2000
            })
            this.getList()
          })
        })
        .catch(() => {})
    },
    // 导出
    handleDownload() {
      var timestamp = new Date().getTime()
      const nowtimes = parseTime(timestamp, '{y}-{m}-{d} {h}:{i}')
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['时间', '标题', '作者', '审核人', '重要性', '状态']
        const filterVal = ['timestamp', 'title', 'author', 'reviewer', 'importance', 'status']
        const data = this.formatJson(filterVal, this.mockLists)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: nowtimes + 'excel模板'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  /* .el-table .info-row {
    background: #f4f4f5;
  } */

  .el-table .danger-row {
    background: #fef0f0;
  }
</style>
