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
    isLoading: boolean;
    formEvent: string;
    // basicHeaders: any[];
    loadJs(): any;
    globalLoader(status: boolean, message?: string): any;
    modal(modalId: string, show: boolean): any;
    showForm(item: any): any;
    uploadFile(file: File): any;
    // errors: any;
  }
}
