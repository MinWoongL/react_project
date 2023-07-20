// stores/ThemeStore.js
import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "light";

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
  }
}

const themeStoreInstance = new ThemeStore();

export default themeStoreInstance;