import MapFull from "@/components/maps/MapFull";

export default function MapMain() {
  return (
    /* div container required to keep map working (interactive) with transparent navbar */
    <div style={{ position: "fixed", top: 0, zIndex: -1 }}>
      <MapFull />
    </div>
  );
}
