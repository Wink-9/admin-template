import { useWindowSize, useDebounceFn } from "@vueuse/core";
import { sidebarShrinkStore } from "@/store/sidebarShrink.js";
const { width } = useWindowSize();
const store = sidebarShrinkStore();
const opend = computed(() => store.opend);

const initSiderBarShrink = () => {
  const checkPlatform = useDebounceFn(() => {
    let platform = width.value > 1000 ? "pc" : "mobile";
    store.setPlatform(platform);
  }, 300);

  watchEffect(() => {
    if (width.value) {
      checkPlatform();
    }
  });
};

const toggleNavbar = () => {
  store.setOpend();
};
export { opend, initSiderBarShrink, toggleNavbar };
