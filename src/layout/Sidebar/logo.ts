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
  const logoIdx = ref<number>(0);
  function logoDot(): void {
    logoIdx.value = Math.floor(Math.random() * logos.length);
  }
  logoDot();
  const currentlogo = computed<Logos>(() => {
    return logos[logoIdx.value];
  });
  return {
    currentlogo,
    logoDot,
  };
}

export default dancelogo;
