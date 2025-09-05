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
    <form className="max-w-md w-full bg-white rounded-3xl p-6 shadow-lg text-black mx-aut mt-4">
      {" "}
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
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            placeholder="E-mail?"
          />
        </label>
        <label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            placeholder="Message Me"
          />
        </label>{" "}
      </div>
    </form>
  );
}
