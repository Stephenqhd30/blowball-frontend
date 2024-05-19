import { createPinia } from "pinia";
import useLoginUserStore from "./modules/user";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"; //引入持久化插件

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); //将插件添加到 pinia 实例上

export { pinia, useLoginUserStore };
