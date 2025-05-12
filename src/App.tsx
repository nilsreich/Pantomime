import { useState } from "react";

// Define images outside the component - good practice as it doesn't change
const images = [
  "/images/astronaut.avif",
  "/images/doktor.avif",
  "/images/fensterputzer.avif",
  "/images/koch.avif",
];

const getRandomElement = (arr: string[]) => {
  if (!arr || arr.length === 0) {
    return undefined; 
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

function App() {
  const [currentImage, setCurrentImage] = useState(() => getRandomElement(images));

  const showNextRandomImage = () => {
    if (images.length <= 1) {
      return;
    }

    let nextImage;
    do {
      nextImage = getRandomElement(images);
    } while (nextImage === currentImage);
    setCurrentImage(nextImage);
  };

  if (!currentImage) {
    return (
      <div className="bg-neutral-950 h-screen flex items-center justify-center p-8 text-white">
        Keine Bilder zum Anzeigen vorhanden.
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 h-screen flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="border-2 rounded-md border-neutral-800 aspect-square overflow-hidden ">
          <picture>
            <source srcSet={currentImage} type="image/avif" />
            <img
              key={currentImage} 
              src={currentImage}
              alt="Zufälliges Bild einer Berufsfigur" 
              loading="eager" 
              className="object-cover w-full h-full"
            />
          </picture>
        </div>

        <button
          onClick={showNextRandomImage}
          disabled={images.length <= 1}
          className="px-4 py-2 bg-green-600 text-white font-semibold border border-green-700 rounded-md shadow-sm inline-flex items-center justify-center transition-colors duration-150 ease-in-out hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed" // Added disabled styles
        >
          Nächstes Bild
        </button>
      </div>
    </div>
  );
}

export default App;