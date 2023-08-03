import { Cemjsx } from "cemjs-all"
// import About from "./pages/about"
// import Contacts from "./pages/contacts"
import Home from "./pages/home"
// import Examples from "./pages/examples"
import Order from "./pages/order"


export default function () {
  switch (this.Static.page) {
    case "home":
      return <Home />
      break;

    case "order":
      return <Order />
      break;

    // case "cemjs":
    //   return <About />
    //   break;

    // case "home":
    //   return <Home />
    //   break;

    // case "examples":
    //   return <Examples />
    //   break;

    default:
      break;
  }
}

