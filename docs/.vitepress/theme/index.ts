import DefaultTheme from "vitepress/theme";

import "./styles/main.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    
    // 继承默认主题
    DefaultTheme.enhanceApp(ctx);
  }
};