import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    removeCookie("token");
    removeCookie("user");
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="w-[100%] h-[100%] px-20 py-10">
        <div>
          <p className="text-5xl font-medium bg-[#83272954] px-8 py-2 text-[#000000a5]">
            Account OverView
          </p>
          <div className="border-[1px] border-black py-6 m-8 ">
            <span className="flex justify-between items-center bg-[#83272954] px-6 py-4">
              <p className="text-3xl text-[#000000a5]">Personal Information</p>
              <button
                onClick={LogoutHandler}
                className="w-25 bg-slate-100 border-[1px] border-[#832729] px-5 py-2 rounded-md text-lg font-medium bold hover:bg-[#832729] hover:text-white hover:ease-in duration-500"
              >
                LOGOUT
              </button>
            </span>
            <div className="w-[100%] m-6">
              <table className="w-[50%] text-xl">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Divyesh Soni</td>
                  </tr>
                  <tr>
                    <td>Date of birth</td>
                    <td>13 July 2001</td>
                  </tr>
                  <tr>
                    <td>Phone number</td>
                    <td>6355391958</td>
                  </tr>
                  <tr>
                    <td>Email address</td>
                    <td>divyesh.soni1371@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>Adajan, Surat - 395009</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
