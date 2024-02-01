
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./Routes/routes";

const App = () => {

  return ( 
    <BrowserRouter>
      <PrivateRoutes />
    </BrowserRouter>
   );
}
 
export default App;