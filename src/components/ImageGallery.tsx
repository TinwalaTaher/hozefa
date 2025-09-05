import { useState, useEffect } from 'react'

interface ImageGalleryProps {
  folder?: string
}

const ImageGallery = ({ folder = 'hozefa-images' }: ImageGalleryProps) => {
  const [images, setImages] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let imageModules: Record<string, any> = {}

    if (folder === 'hozefa-images') {
      imageModules = import.meta.glob('./../assets/hozefa-images/*', { eager: true })
    } else if (folder === 'family-images') {
      imageModules = import.meta.glob('./../assets/family-images/*', { eager: true })
    }

    const imageUrls = Object.values(imageModules).map((module: any) => module.default)
    setImages(imageUrls)
  }, [folder])

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modalOpen) return
    if (e.key === 'Escape') closeModal()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen])

  return (
    <>
      <div className="gallery">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Hozefa ${index + 1}`}
            className="gallery-image"
            onClick={() => openModal(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img src={images[currentIndex]} alt={`Hozefa ${currentIndex + 1}`} className="modal-image" />
            <div className="modal-navigation">
              <button className="nav-button" onClick={prevImage} disabled={images.length <= 1}>‹</button>
              <span className="image-counter">{currentIndex + 1} / {images.length}</span>
              <button className="nav-button" onClick={nextImage} disabled={images.length <= 1}>›</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery