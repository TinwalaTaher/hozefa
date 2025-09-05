import './App.css'
import ImageGallery from './components/ImageGallery.tsx'
import { useEffect, useRef } from 'react'

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      // Try to play muted first to bypass autoplay restrictions
      audio.muted = true
      audio.play().then(() => {
        // If successful, unmute after a short delay
        setTimeout(() => {
          audio.muted = false
        }, 100)
      }).catch(() => {
        // If autoplay fails, wait for user interaction
        const handleUserInteraction = () => {
          audio.play()
          document.removeEventListener('click', handleUserInteraction)
          document.removeEventListener('keydown', handleUserInteraction)
        }
        document.addEventListener('click', handleUserInteraction)
        document.addEventListener('keydown', handleUserInteraction)
      })
    }
  }, [])

  return (
    <div className="biodata-container">
      <header className="header">
        <h1>Hozefa Azizbhai Daruwala</h1>
        {/* <p className="subtitle"></p> */}
      </header>

      <section className="section personal-info">
        <h2>Personal Information</h2>
        <div className="info-grid">
          {/* <div className="info-item">
            <strong>Father's Full Name:</strong> Azizbhai Daruwala
          </div> */}
          {/* <div className="info-item">
            <strong>Mother's Full Name:</strong> Fatema Azizbhai Daruwala
          </div> */}
          <div className="info-item">
            <strong>Date of Birth:</strong> 16/07/2002
          </div>
          <div className="info-item">
            <strong>Height:</strong> 6 ft
          </div>
          <div className="info-item">
            <strong>Education:</strong> B.com Graduate
          </div>
          <div className="info-item">
            <strong>Occupation:</strong> Business
          </div>
          {/* <div className="info-item">
            <strong>Address:</strong> near ashirwad hospital, Deengadh bariya
          </div> */}
          <div className="info-item">
            <strong>Watan:</strong> devgadh baria(Deengarh baria)
          </div>
        </div>
      </section>
            <section className="section family-info">
        <h2>Family Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <strong>Father:</strong> Aziz Husainibhai Daruwala
          </div>
          <div className="info-item">
            <strong>Mother:</strong> Fatema Azizbhai Daruwala
          </div>
          <div className="info-item">
            <strong>Siblings:</strong> One married brother
          </div>
        </div>
      </section>
      <section className="section hobbies">
        <h2>Hobbies</h2>
        <div className="hobbies-list">
          <div className="hobby-item"><strong>Traveling:</strong> Exploring new cultures and places — recently visited Lonavala, Mahabaleshwar, Kerala, Goa and Udaipur.</div>
          <div className="hobby-item"><strong>Motorcycling & Cars:</strong> Enjoy learning about bike maintenance and road trips on two wheels.</div>
          <div className="hobby-item"><strong>Animal Enthusiast:</strong> Love watching documentaries and reading about wildlife and conservation.</div>
          <div className="hobby-item"><strong>Geography Buff:</strong> Passionate about learning country capitals, and traditions.</div>
        </div>
      </section>
      <section className="section social-media">
        <h2>Social Media</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/h_o_z_e_f_a/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
            Instagram: @h_o_z_e_f_a
          </a>
        </div>
      </section>

      <section className="section image-gallery">
        <h2>Gallery</h2>
        <ImageGallery />
      </section>
      <section className="section image-gallery">
        <h2>Family Photos</h2>
          <ImageGallery folder="family-images" />
      </section>
    </div>
  )
}

export default App
