import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      { name: "Default Theme", props: { theme: defaultTheme, default: true } },
      { name: "Dark Theme", props: { theme: darkTheme } },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
];