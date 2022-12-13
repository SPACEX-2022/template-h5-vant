import {
  Button,
  Cell,
  Icon,
  Popup,
  Toast,
  Checkbox,
  Radio,
  Picker,
  Search,
  Loading,
  Overlay,
  Empty,
  List,
  Steps,
  Grid,
  Image,
} from "vant";
// 2. 引入组件样式
import "vant/lib/index.css";
import type { App } from "vue";

export function setupVant(app: App<Element>) {
  app
    .use(Button)
    .use(Cell)
    .use(Icon)
    .use(Popup)
    .use(Toast)
    .use(Checkbox)
    .use(Radio)
    .use(Picker)
    .use(Search)
    .use(Loading)
    .use(Overlay)
    .use(Empty)
    .use(List)
    .use(Steps)
    .use(Grid)
    .use(Image);
}
