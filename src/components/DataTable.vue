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
            {{ getTdValue(header, item) }}
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
}
</script>

<style scoped></style>
