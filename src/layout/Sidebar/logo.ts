import { useFavicon } from "@vueuse/core";

function dancelogo() {
  interface Logos {
    name: string;
    color: string;
  }
  const logos: Array<Logos> = [
    {
      name: "pinia",
      color: "#fdc958",
    },
    {
      name: "vite",
      color: "#d76a74",
    },
    {
      name: "vue",
      color: "#20ae7c",
    },
    {
      name: "ts",
      color: "#1a80c5",
    },
  ];
  const logoIdx = ref<number>(Math.floor(Math.random() * logos.length));
  function logoToggle(): void {
    if (logoIdx.value >= logos.length - 1) {
      logoIdx.value = 0;
    } else {
      logoIdx.value++;
    }
  }
  const currentlogo = computed<Logos>(() => logos[logoIdx.value]);
  const favicon = computed<string>(() => currentlogo.value.name + ".svg");
  useFavicon(favicon);
  return {
    currentlogo,
    logoToggle,
  };
}

export default dancelogo;
