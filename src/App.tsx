import { useState } from "react";

// Define images outside the component - good practice as it doesn't change
const images = [
  "/images/astronaut.avif",
  "/images/doktor.avif",
  "/images/fensterputzer.avif",
  "/images/koch.avif",
];

// Helper function to get a random element from an array
const getRandomElement = (arr) => {
  if (!arr || arr.length === 0) {
    return undefined; // Handle empty or non-existent array
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

function App() {
  // 1. Initialize state directly with a random image using a function
  // This avoids the initial render with images[0] followed by an immediate update
  const [currentImage, setCurrentImage] = useState(() => getRandomElement(images));

  // 2. Ensure the next random image is different from the current one (if possible)
  const showNextRandomImage = () => {
    if (images.length <= 1) {
      return; // No other image to switch to
    }

    let nextImage;
    do {
      nextImage = getRandomElement(images);
    } while (nextImage === currentImage); // Keep trying until it's different

    setCurrentImage(nextImage);
  };

  // Handle case where images array might be empty or initialization failed
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
        {/* Added explicit size for predictability, adjust as needed */}
        <div className="border-2 rounded-md border-neutral-800 aspect-square overflow-hidden w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <picture>
            <source srcSet={currentImage} type="image/avif" />
            {/* 3. Added key prop: Helps React efficiently update the DOM when the image source changes. */}
            {/* 4. Added alt attribute: Crucial for accessibility. Describe the image content if possible, or use a generic description. */}
            <img
              key={currentImage} // Re-render hint for React
              src={currentImage}
              alt="Zufälliges Bild einer Berufsfigur" // Accessibility improvement
              loading="lazy" // Keep lazy loading, it's generally good.
              className="object-cover w-full h-full"
              // Optional: Add decoding="async" for potentially smoother loading
              // decoding="async"
            />
          </picture>
        </div>

        <button
          onClick={showNextRandomImage}
          // 5. Disable button if there's only one image (or none)
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