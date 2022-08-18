import {createRoot} from "react-dom/client"
import Home from "./components/Home"

const root = createRoot(document.querySelector("#root"))
root.render(<Home></Home>)