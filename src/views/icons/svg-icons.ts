
const modules = import.meta.glob("/src/assets/icons/*.svg");
const modulesKeys = Object.keys(modules).map(key => key.slice(18, key.lastIndexOf('.')))
export default modulesKeys;

