import React, { createContext, useContext, useState, useEffect } from "react";

interface SeriesImageContextType {
  imageUrl: string;
  setImageUrl: (url: string) => void;
  handleFileUpload: (file: File) => void;
  resetImage: () => void;
  isCustomImage: boolean;
}

const DEFAULT_IMAGE = "/Imagem.png";

const SeriesImageContext = createContext<SeriesImageContextType>({
  imageUrl: DEFAULT_IMAGE,
  setImageUrl: () => {},
  handleFileUpload: () => {},
  resetImage: () => {},
  isCustomImage: false,
});

export function SeriesImageProvider({ children }: { children: React.ReactNode }) {
  const [imageUrl, setImageUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("custom_series_cover");
      if (saved) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_IMAGE;
  });

  const [isCustomImage, setIsCustomImage] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem("custom_series_cover");
    } catch {
      return false;
    }
  });

  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setImageUrl(result);
        setIsCustomImage(true);
        try {
          localStorage.setItem("custom_series_cover", result);
        } catch (err) {
          console.warn("Storage quota exceeded, image stored in memory:", err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const resetImage = () => {
    setImageUrl(DEFAULT_IMAGE);
    setIsCustomImage(false);
    try {
      localStorage.removeItem("custom_series_cover");
    } catch {
      // ignore
    }
  };

  return (
    <SeriesImageContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        handleFileUpload,
        resetImage,
        isCustomImage,
      }}
    >
      {children}
    </SeriesImageContext.Provider>
  );
}

export function useSeriesImage() {
  return useContext(SeriesImageContext);
}
