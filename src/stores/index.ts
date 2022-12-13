import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import type { App } from "vue";

const pinia = createPinia();
pinia.use(createPersistedState({ storage: localStorage }));

/**
 * 安装 store
 * @param app
 */
export function setupStore(app: App<Element>) {
  app.use(pinia);
}

export { pinia as store };
