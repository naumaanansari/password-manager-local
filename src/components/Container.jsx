import React from "react";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Container = () => {
  //Contains input data
  const [form, setForm] = useState({ site: "", username: "", password: "" });

  //contains all the passwords
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Show Password Function - Change Eye Icon
  const ref = useRef();
  const passRef = useRef();

  const showPassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passRef.current.type = "text";
    }
  };


  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  


  // Save Password Function - Save Password In localstorage
  const savePassword = () => {
    
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){

      setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      console.log([...passwordArray, form])
      setForm({ site: "", username: "", password: "" })

      
}
else{
  alert("Error: Minimum Three Character Required")
}

    
    

  };

  //Delete Password
  const deletePassword = (id) => {
    console.log("Deleting row with ID", id);
    let confirmation = confirm("Do You Really Want To Delete This Password?");
    if (confirmation) {
      setPasswordArray(passwordArray.filter((item) => item.id != id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id != id))
      );
      
    }

    // console.log([...passwordArray, form]);
  };

  //Edit Password
  const editPassword = (id) => {
    console.log("Editing row with ID", id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id != id));
  };

  

  // Copy Text From Table
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    
  };

  return (
    <div className="">
      {/* Toast Body */}
      
      
      
      {/* BackGround */}
      <div className="absolute inset-0 -z-10 h-full w-full ">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-500 opacity-20 blur-[100px]"></div>
      </div>
      {/* Body Section Starts */}

      <div className="text-black flex flex-col p-2  md:px-16 border backdrop-blur-sm w-[95vw] md:w-[55vw] mx-auto gap-4 my-4 shadow-lg min-h-[86vh] md:min-h-[82.3vh] ">
        {/* Title Section Starts Here*/}
        <div className="">
          <div className="text-black font font-bold md:text-4xl text-xl text-center">
            <span className=" text-green-500 ">&lt;</span>
            <span className=" ">Pass</span>
            <span className=" text-green-500 ">MAN/&gt;</span>
          </div>
          <p className="font font-semibold text-md text-center text-green-700 ">
            Your Own Password Manager :)
          </p>
        </div>
        {/* Title Section Ends Here*/}

        {/* Input Section First Row Starts Here */}
        <input
          value={form.site}
          type="text"
          name="site"
          id="site"
          placeholder="Enter Site URL"
          onChange={handleChange}
          className="rounded-full outline-green-500 bg-green-100 p-1 px-4 border border-green-500 shadow-lg"
        />
        {/* Input Section First Row Ends Here */}

        {/* Input Section Second Row Starts Here*/}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          <input
            value={form.username}
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            onChange={handleChange}
            className="rounded-full outline-green-500 bg-green-100 p-1 px-4 border border-green-500 w-full shadow-lg"
          />

          <div className="relative w-full">
            <input
              ref={passRef}
              value={form.password}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleChange}
              className="rounded-full outline-green-500 bg-green-100 p-1 px-4 border border-green-500 w-full shadow-lg"
            />
            <span className="absolute right-3 top-1 cursor-pointer">
              <img
                ref={ref}
                className="w-6 "
                src="icons/eye.png"
                alt=""
                onClick={showPassword}
              />
            </span>
          </div>
        </div>
        {/* Input Section Second Row Ends Here*/}

        {/* Save Button Starts Here */}
        <button
          onClick={savePassword}
          className="bg-green-500 px-3 md:px-6 py-1 border-2 border-green-900 w-fit mx-auto rounded-full shadow-lg mt-5"
        >
          <div className="flex items-center gap-1 ">
            <p className="text-lg md:text-xl font-semibold  ">Save</p>
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
          </div>
        </button>
        {/* Save Button Ends Here */}

        {/* Password Section Starts Here */}
        <div className="">
          <h1 className="font-bold text-xl md:text-2xl text-center md:text-start py-2 md:py-4 text-green-900">
            Your Passwords{" "}
          </h1>
          {passwordArray.length === 0 && (
            <div>Nothing To Show Please Add Some Passwords.</div>
          )}
          {passwordArray.length !== 0 && (
            <table className="  table-fixed w-full bg-green-100 border border-green-800 overflow-hidden rounded-lg">
              <thead className="bg-green-500 ">
                <tr>
                  <th className="font-bold py-0.5 md:py-2 text-sm md:text-lg border border-white">
                    Site
                  </th>
                  <th className="font-bold py-0.5 md:py-2 text-sm md:text-lg border border-white">
                    Username
                  </th>
                  <th className="font-bold py-0.5 md:py-2 text-sm md:text-lg border border-white">
                    Password
                  </th>
                  <th className="font-bold py-0.5 md:py-2 text-sm md:text-lg border border-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index} className="text-sm ">
                      <td className="py-0.5 md:py-2 border border-white text-center  ">
                        <div className="  flex flex-col md:flex-row item-center justify-center gap-1 hover:text-green-800 flex-wrap  ">
                          <a href={item.site} target="_blank">
                            <span className="">{item.site}</span>
                          </a>
                          <div
                            className="cursor-pointer "
                            onClick={() => copyText(item.site)}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-0.5 border border-white text-center ">
                        <div className="flex flex-col md:flex-row item-center justify-center gap-1 hover:text-green-800">
                          <span className="">{item.username}</span>
                          <div
                            className="cursor-pointer "
                            onClick={() => copyText(item.username)}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-0.5 border border-white text-center  ">
                        <div className="flex flex-col md:flex-row item-center justify-center gap-1 hover:text-green-800">
                          <span className="">{item.password}</span>
                          <div
                            className="cursor-pointer "
                            onClick={() => copyText(item.password)}
                          >
                            <lord-icon
                              style={{
                                width: "20px",
                                height: "20px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>

                      <td className="py-0.5 border border-white text-center font-medium w-1">
                        <div className="flex flex-col md:flex-row item-center justify-center gap-1 ">
                          <span
                            className="hover:text-green-800 cursor-pointer "
                            onClick={() => {
                              editPassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              style={{ width: "15px", height: "15px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="hover:text-green-800 cursor-pointer "
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "15px", height: "15px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        {/* Password Section Starts Here */}

        
      </div>
    </div>
  );
};

export default Container;
