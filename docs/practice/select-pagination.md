## 下拉框添加分页功能

```css
<el-form-item label="店铺搜索:">
              <el-select
                ref="select"
                v-model="createStoreIds"
                placeholder="请选择"
                :loading="loading"
                :remote-method="remoteMethod"
                multiple
                filterable
                remote
                reserve-keyword
              >
                <el-option
                  v-for="item in storeOptions"
                  :key="item.id"
                  :label="item.storeName"
                  :value="item.id"
                ></el-option>
                <div style="position: sticky; background: #fff; height: 30px; bottom: 0; z-index: 1; margin-top: 0">
                  <el-pagination
                    @size-change="onSelectPageSizeChange"
                    @current-change="onSelectPageNumChange"
                    :current-page="selectPageNo"
                    :page-size="selectPageSize"
                    :page-sizes="[5, 10, 15, 50, 100]"
                    layout="prev, pager, next, jumper, sizes, total"
                    v-if="selectTotalCount"
                    :total="selectTotalCount"
                  ></el-pagination>
                </div>
              </el-select>
            </el-form-item>
```

remoteMethod

```css
remoteMethod: debounce(async function (query) {
      const _this = this;
      _this.loading = true;
      const params = { pageNo: this.selectPageNo, pageSize: this.selectPageSize };
      if (query && query.trim() !== '') {
        if (this.times === 0) {
          params.pageNo = 1;
          this.times++;
        }
        this.searchQuery = query.trim();
        params.storeNameOrNo = query.trim();
      } else {
        this.storeOptions = [];
      }
      const { data, success, totalCount } = await labelApi.queryStoreList(params);
      if (success) {
        _this.storeOptions = data;
        this.selectTotalCount = totalCount;
      }
      _this.loading = false;
    }, 400),
```

onSelectPageSizeChange

```css
// 下拉框页数
    onSelectPageSizeChange(val) {
      this.selectPageSize = val;
      this.selectPageNo = 1; // allPositionList
      this.remoteMethod(this.searchQuery);
    },
```

onSelectPageNumChange

```css
// 下拉框页码
    onSelectPageNumChange(val) {
      this.selectPageNo = val;
      this.remoteMethod(this.searchQuery);
    },
```