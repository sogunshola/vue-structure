// import {
//   Action,
//   getModule,
//   Module,
//   Mutation,
//   VuexModule,
// } from 'vuex-module-decorators';
// import store from '@/store';
// import { PreserveState } from '@/store/storage';

// const name = 'sample';

// @Module({
//   store,
//   name,
//   dynamic: true,
//   namespaced: true,
//   preserveState: PreserveState(name),
// })
// class SampleModule extends VuexModule {
//   public data: any[] = [];

//   @Mutation
//   SAMPLE(data: any[]) {
//     this.data = data;
//   }

//   @Action({ commit: 'SAMPLE' })
//   async getAll() {}
// }

// export const sampleStore = getModule(SampleModule);