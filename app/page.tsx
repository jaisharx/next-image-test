import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        style={{
          width: 300,
          height: 300,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src="/image.jpg" alt="Image" fill />
      </div>
    </main>
  );
}
