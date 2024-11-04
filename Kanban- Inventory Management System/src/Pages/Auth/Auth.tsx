import kanbanLogo from "../../assets/kanbanLogo.png";
import kanbanMiniLogo from "../../assets/kanbanMiniLogo.png";
import Login from "./Login";
// import Register from "./Register";
// import ForgotPassword from "./ForgotPassword";
// import ResetPassword from "./ResetPassword";

export default function Auth() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-evenly">
          {/* Logo 1 - Left Section */}
          <div className="hidden md:w-1/4 md:flex items-center justify-start">
            <img
              src={kanbanLogo}
              alt="Kanban Logo"
              className="h-[18rem] w-[13rem]"
            />
          </div>

          {/* Right Section */}
          <div className="w-11/12 sm:w-4/5 md:h-[35rem] md:w-[28rem] flex flex-col justify-center">
            {/* Logo 2 */}
            <div className="flex flex-col items-center justify-center">
              <img src={kanbanMiniLogo} alt="Kanban Logo" />
            </div>

            {/* Form */}
            <Login />
            {/* <Register /> */}
            {/* <ForgotPassword /> */}
            {/* <ResetPassword /> */}
          </div>
        </div>
      </div>
    </>
  );
}
