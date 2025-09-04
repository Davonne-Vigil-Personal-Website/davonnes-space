import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="max-w-xs h-96 text-black bg-white w-full rounded-3xl p-2">
      <h3 className="text-center font-grav text-xl mt-2">Lets get in touch!</h3>
      <div className="flex flex-col gap-8 mt-4">
        <label className="">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 outline-pink-400 rounded-xl shadow-md w-full"
            placeholder="Whats your name?"
          />
        </label>
        <label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="p-2 shadow-md rounded-xl outline-pink-400 w-full"
            placeholder="E-mail?"
          />
        </label>
        <label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className=" shadow-md h-40 p-2 rounded-xl outline-pink-400 w-full"
            placeholder="Message Me"
          />
        </label>{" "}
      </div>
    </form>
  );
}
