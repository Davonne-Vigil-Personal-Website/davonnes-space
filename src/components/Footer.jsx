import MyLinks from "./MyLinks";

export default function Footer() {
  return (
    <footer className=" mt-10 p-2 rounded text-white w-full text-center">
      <MyLinks />
      <p className="bg-pink-500 text-lg w-fit mx-auto p-2 rounded">
        © 2025 Davonne Vigil, project inspired by Disney
      </p>
    </footer>
  );
}
