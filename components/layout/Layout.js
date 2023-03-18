import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
    </>
  );
}
