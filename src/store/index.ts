import Vue from 'vue';
import Vuex from 'vuex';
import { createDirectStore } from 'direct-vuex'

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  state: {},
  actions,
  mutations
});

export default store;

export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
};

export type AppStore = typeof store;

declare module "vuex" {
  interface Store<S> {
    direct: AppStore
  }
}