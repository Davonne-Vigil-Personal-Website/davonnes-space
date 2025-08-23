import Button from "./Button";
import Image from "./Image";

export default function Header() {
  return (
    <div>
      <button>
        <img
          src="./images/logo.png"
          className="w-20 border-2 mt-4 border-pink-400 rounded-full"
        />
      </button>
    </div>
  );
}
