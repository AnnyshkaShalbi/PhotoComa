import { Cemjsx } from "cemjs-all"
import Home from "./pages/home"
import Order from "./pages/order"
import Download from "./pages/download";
import Finish from "./pages/finish";
import Thanks from "./pages/thanks";
import Documentation from "./pages/documentation";


export default function () {
  switch (this.Static.page) {
    case "home":
      return <Home />
      break;

    case "order":
      return <Order />
      break;

    case "download":
      return <Download />
      break;

    case "finish":
      return <Finish />
      break;

    case "thanks":
      return <Thanks />
      break;

    case "documentation":
      return <Documentation />
      break;

    default:
      break;
  }
}

