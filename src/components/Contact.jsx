import { useState } from "react";
import Button from "./Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("it worked");
    if (!formData.name || !formData.emailAddress) {
      setError("Please enter both name and email❗");
    }

    setFormData({
      name: "",
      emailAddress: "",
      message: "",
    });
  };

  return (
    <form className="max-w-xs md:max-w-md w-full bg-white rounded-3xl p-6 shadow-lg text-black mx-aut mt-4">
      {" "}
      <h3 className="text-center font-grav text-xl mt-2">Lets get in touch!</h3>
      <div className="flex flex-col gap-8 mt-4">
        <label className="">
          {error && <p className="text-red-">{error}</p>}
          <input
            type="text"
            name="name"
            value={formData.name}
            autoComplete="off"
            onChange={handleChange}
            className="p-2 outline-pink-400 rounded-xl shadow-md w-full"
            placeholder="Whats your name?"
            required
          />
        </label>
        <label>
          {error && <p className="text-red-">{error}</p>}
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            autoComplete="off"
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            placeholder="E-mail?"
            required
          />
        </label>
        <label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            autoComplete="off"
            onChange={handleChange}
            className="w-full h-28 p-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            placeholder="Message Me"
          />
        </label>{" "}
        <button
          onClick={submitForm}
          className="bg-pink-300 p-2 rounded-full font-grav text-lg hover:scale-105 cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
}
