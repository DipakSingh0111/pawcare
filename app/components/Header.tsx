import Topbar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <Topbar />
      <Navbar />
    </header>
  );
}
