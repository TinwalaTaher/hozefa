import { useState, useEffect } from 'react'

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const imageModules = import.meta.glob('./../assets/hozefa-images/*', { eager: true })
    const imageUrls = Object.values(imageModules).map((module: any) => module.default)
    setImages(imageUrls)
  }, [])

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Hozefa ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  )
}

export default ImageGallery