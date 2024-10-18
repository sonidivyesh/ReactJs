import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import ParentFunction from "./props/functional/ParentFunction";
import ParentClass from "./props/class/ParentClass";
import FunState from "./state/functional/FunState";
import MapAndKey from "./4. Map-Key/MapAndKey";
import MapProject from "./4. Map-Key/MapProject";
import ConditionalRendering from "./6. Conditional-rendering/ConditionalRendering";
import HideShowPassword from "./6. Conditional-rendering/HideShowPassword";
import Index from "./7. Miniproject/Index";
import LifeCycleMethod from "./8. LifeCycleMethod/LifeCycleMethod";
import LoginPopup from "./8. LifeCycleMethod/LoginPopup";
import UseEffect from "./9. Hook/1. UseEffect/UseEffect";
import UseEffectProject from "./9. Hook/1. UseEffect/UseEffectProject";
import InputCompo from "./10. Input/SingleInput/InputCompo";
import InputProductPractice from "./10. Input/SingleInput/InputProductPractice";
import InputPractice2 from "./10. Input/SingleInput/InputPractice2";
import MultiInput1 from "./10. Input/Multi_Inputs/MultiInput1";
import MultiInput2 from "./10. Input/Multi_Inputs/MultiInput2";
import Radio from "./10. Input/Radio_CheckBox/Radio";
import CheckBox from "./10. Input/Radio_CheckBox/CheckBox";
import LocalStorage1 from "./11. LocalStorage/LocalStorage1";
import LocalStorageMultiInputs1 from "./11. LocalStorage/LocalStorageMultiInputs1";
import LocalStorageMultiInputs2 from "./11. LocalStorage/LocalStorageMultiInputs2";
import SearchISingleInput from "./12. SearchInput/SearchISingleInput";
// import Router from "./13. Router/Router";
import Router from "./14. RouterProject/Routes/Router";
import TodoProject from "./15. Project/TodoProject";
import AppRedux from "./16. Redux/SimpleRedux/AppRedux";

function App() {
  return (
    <>
      {/* =================== Components =================== */}
      {/* <Header/> */}
      {/* <Navigation/> */}
      {/* <Content/> */}
      {/* <Footer/> */}

      {/* =================== Props =================== */}
      {/* <ParentFunction /> */}
      {/* <ParentClass/> */}

      {/* =================== State =================== */}
      {/* <FunState/> */}

      {/* =================== Map And Key =================== */}
      {/* <MapAndKey/> */}
      {/* <MapProject/> */}

      {/* =================== Conditional Rendering =================== */}
      {/* <ConditionalRendering/> */}
      {/* <HideShowPassword /> */}

      {/* =================== Miniproject =================== */}
      {/* <Index/> */}

      {/* =================== Life Cycle Method =================== */}
      {/* <LifeCycleMethod /> */}
      {/* <LoginPopup /> */}

      {/* =================== Hook =================== */}
      {/* <UseEffect /> */}
      {/* <UseEffectProject /> */}

      {/* =================== Input =================== */}
      {/* <InputCompo /> */}
      {/* <InputProductPractice /> */}
      {/* <InputPractice2 /> */}
      {/* <InputPractice3 /> */}

      {/* ========== Multi Inputs ========== */}
      {/* <MultiInput1 /> */}
      {/* <MultiInput2 /> */}

      {/* ========== Radio & CheckBox ========== */}
      {/* <Radio /> */}
      {/* <CheckBox /> */}

      {/* ========== LocalStorage ========== */}
      {/* <LocalStorage1 /> */}
      {/* <LocalStorageMultiInputs1 /> */}
      {/* <LocalStorageMultiInputs2 /> */}

      {/* ========== SearchInput ========== */}
      {/* <SearchISingleInput /> */}

      {/* ========== Router ========== */}
      {/* <Router /> */}

      {/* ========== RouterProject ========== */}
      {/* <Router /> */}

      {/* ========== Project ========== */}
      <TodoProject />

      {/* ========== Redux ========== */}
      {/* <AppRedux /> */}

      <ToastContainer />
    </>
  );
}

export default App;
