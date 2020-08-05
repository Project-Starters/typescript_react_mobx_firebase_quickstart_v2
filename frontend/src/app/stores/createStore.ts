import { History } from 'history';
import { RouterStore } from './RouterStore';
import { GlobalStateStore } from './GlobalStateStore';
import { ROUTER_STORE, GLOBAL_STATE, AUTH_STORE, ADMIN_STORE, FORM_STORE } from 'app/constants';

import AuthStore from './AuthStore';
import { AdminStore } from './AdminStore';
import FormStore from './FormStore';


/**
 * where stores are created, including the routerStore
 */

export function createStores(history: History) {
  const routerStore = new RouterStore(history);
  const adminStore = new AdminStore();
  const globalStateStore = new GlobalStateStore();
  const authStore = new AuthStore(routerStore);
  const formStore = new FormStore();

  return {
    [ROUTER_STORE]: routerStore,
    [GLOBAL_STATE]: globalStateStore,
    [AUTH_STORE]: authStore,
    [ADMIN_STORE]: adminStore,
    [FORM_STORE]: formStore
  };
}
