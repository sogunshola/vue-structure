<template>
  <div class="table-responsive">
    <table :id="tableId" class="table table-striped table-borderless">
      <thead>
        <tr>
          <th style="width:10px">S/N</th>
          <th v-for="(header, i) in headers" :key="i + header">
            {{ header.name }}
          </th>
          <th style="width:10px">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in data" :key="i + 'data'">
          <td>{{ ++i }}</td>

          <td v-for="(header, i) in headers" :key="i + 'header'">
            <template v-if="isSlot(header)">
              <slot :name="header.prop" v-bind="item" />
            </template>
            <template v-else>
              {{ getTdValue(header, item) }}
            </template>
          </td>
          <td>
            <div class="btn-group mr-2">
              <div class="dropdown">
                <button
                  class="btn btn-link"
                  type="button"
                  id="CustomdropdownMenuButton7"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ri-more-fill menu-hamburger-vertical"></i>
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="CustomdropdownMenuButton7"
                >
                  <slot :item="item"></slot>
                  <a class="dropdown-item" @click.prevent="remove(item.id)"
                    ><i class="ri-delete-bin-5-line mr-2"></i>Delete</a
                  >
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th style="width:10px">S/N</th>
          <th v-for="(header, i) in headers" :key="i">{{ header.name }}</th>
          <th style="width:10px">Actions</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DataTableMixin } from '../shared/mixins/datatable.mixin';
// import { API_URL } from '../constants';
interface TableHeaderModel {
  name: string;
  prop: string;
  formatter: Function;
}

interface TableActionModel {
  name: string;
  prop: string;
  formatter: Function;
}
@Component
export default class DataTable extends Vue {
  @Prop() private headers!: TableHeaderModel[];
  @Prop() private actions!: TableActionModel[];
  @Prop() private data!: any[];
  @Prop() private tableId!: string;
  @Prop() private service!: any;
  @Prop() private store!: any;
  // @Prop() private defaultActions

  @Watch('data')
  handler() {
    console.log({
      update: 'Table Updated',
    });
    this.initTable();
  }

  private created() {
    this.initTable();
  }

  getTdValue(header: TableHeaderModel, item: any) {
    const { prop, formatter } = header;
    if (formatter) {
      return formatter(item[prop]);
    }

    return item[prop];
  }

  isSlot(field: any) {
    return field.prop in this.$scopedSlots;
  }

  initTable() {
    const $: any = jQuery;
    // console.log({
    //   id: this.tableId,
    // });
    $(`#${this.tableId}`)
      .DataTable()
      .destroy();
    setTimeout(() => {
      $(`#${this.tableId}`).DataTable();
    }, 1000);
  }

  remove(id: string) {
    this.$swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.value) {
        this.isLoading = true;
        try {
          var response = await this.service.remove(id);
          this.$swal('Deleted!', 'Item has been deleted', 'success');
          this.store.getAll();
          this.isLoading = false;
          this.toastSuccess(response.message);
        } catch (error) {
          this.isLoading = false;
          this.handleError(error);
        }
      }
    });
  }
}
</script>

<style scoped></style>
