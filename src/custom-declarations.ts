import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    getError(fieldName: any): any;
    validate(): any;
    readableDate(date: string): string;
    formatDate(date: string, format: string): string;
    handleError(error: any): any;
    toastSuccess(message: string): any;
    toastError(message: string): any;
    // errors: any;
  }
}
