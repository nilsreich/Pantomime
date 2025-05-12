import { useState, useEffect } from "react";

const images = [
  "/images/astronaut.avif",
  "/images/doktor.avif",
  "/images/fensterputzer.avif",
  "/images/koch.avif",
];

function App() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="bg-neutral-950 h-screen flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="border-2 rounded-md border-neutral-800 aspect-square overflow-hidden ">
          <picture>
            <source srcSet={currentImage} type="image/avif" />
            <img
              src={currentImage}
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </picture>
        </div>

        <button
          onClick={getRandomImage}
          className="px-4 py-2 bg-green-600 text-white font-semibold border border-green-700 rounded-md shadow-sm inline-flex items-center justify-center transition-colors duration-150 ease-in-out hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          Nächstes Bild
        </button>
      </div>
    </div>
  );
}

export default App;
