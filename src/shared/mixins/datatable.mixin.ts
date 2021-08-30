import Component from 'vue-class-component';
import Vue from 'vue';
import { AbstractService } from '../service/abstract-service.service';

@Component
export class DataTableMixin extends Vue {
  // service: any;
  // store: any;

  basicHeaders = [
    {
      name: 'Name',
      prop: 'name',
    },
    {
      name: 'Description',
      prop: 'description',
    },
    // {
    //   name: 'Added On',
    //   prop: 'createdAt',
    //   formatter(createdAt: string) {
    //     return readableDate(createdAt);
    //   },
    // },

    // {
    //   name: 'Updated On',
    //   prop: 'updatedAt',
    //   formatter(updatedAt: string) {
    //     return readableDate(updatedAt);
    //   },
    // },
  ];

  // remove(id: string) {
  //   this.$swal({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then(async (result) => {
  //     if (result.value) {
  //       this.isLoading = true;
  //       try {
  //         var response = await this.service.remove(id);
  //         this.$swal('Deleted!', 'Item has been deleted', 'success');
  //         this.store.getAll();
  //         this.isLoading = false;
  //         this.toastSuccess(response.message);
  //       } catch (error) {
  //         this.isLoading = false;
  //         this.handleError(error);
  //       }
  //     }
  //   });
  // }
}
