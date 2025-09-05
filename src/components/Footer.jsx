import MyLinks from "./MyLinks";

export default function Footer() {
  return (
    <footer className=" mt-10 p-2 rounded text-white w-full text-center">
      <MyLinks />
      <div className="bg-pink-500 w-96 font-mon text-lg mx-auto p-2 rounded">
        <p>Project inspired by Disney 💙 </p>
        <p className="">© 2025 Davonne Vigil</p>
      </div>
    </footer>
  );
}
