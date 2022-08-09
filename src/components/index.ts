import { App } from "vue";
const modules = import.meta.glob("@/components/**/index.vue");

export default {
  install(app: App) {
    for (let key in modules) {
        const name = key.slice(16, key.lastIndexOf('/'))
        app.component(name, modules[key])
    }
  },
};
