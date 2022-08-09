import { defineStore } from "pinia";
import { sidebarShrinkStateType } from "./types";
import { storage } from '@/libs/storage.js' 

export const sidebarShrinkStore = defineStore("sidebarShrinkStore", {
  state: (): sidebarShrinkStateType => {
    return {
      platform: "pc", // mobile
      opend: storage.get('opend') || false,
    };
  },
  actions: {
    setPlatform(val: string) {
      this.platform = val;
      this.setOpend(val);
    },
    setOpend(platform?: string) {
      if (platform) {
        this.opend = platform === "pc";
      } else {
        this.opend = !this.opend;
      }
      storage.set('opend', this.opend)
    },
  },
});
