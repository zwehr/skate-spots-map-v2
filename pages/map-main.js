import Navbar from "@/components/Navbar";
import MapFull from "@/components/MapFull";

export default function MapMain() {
  return (
    <>
      <Navbar />
      {/* div container required to keep map working (interactive) with transparent navbar */}
      <div style={{ position: "fixed", top: 0, zIndex: -1 }}>
        <MapFull />
      </div>
    </>
  );
}
