import { configure, addDecorator } from "@storybook/svelte";
import "../src/tailwind.css";
import { withA11y } from "@storybook/addon-a11y";
addDecorator(withA11y);
// automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);
