import './App.css'
import ImageGallery from './components/ImageGallery.tsx'

function App() {
  return (
    <div className="biodata-container">
      <header className="header">
        <h1>Hozefa Azizbhai Daruwala</h1>
        {/* <p className="subtitle"></p> */}
      </header>

      <section className="section personal-info">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <strong>Father's Full Name:</strong> Azizbhai Daruwala
          </div>
          <div className="info-item">
            <strong>Mother's Full Name:</strong> Fatema Azizbhai Daruwala
          </div>
          <div className="info-item">
            <strong>Date of Birth:</strong> 16/07/2002
          </div>
          <div className="info-item">
            <strong>Height:</strong> 6 ft
          </div>
          <div className="info-item">
            <strong>Education:</strong> B.com complete
          </div>
          <div className="info-item">
            <strong>Occupation:</strong> Business
          </div>
          <div className="info-item">
            <strong>Address:</strong> near ashirwad hospital, Deengadh bariya
          </div>
          <div className="info-item">
            <strong>Watan:</strong> devgadh baria(Deengarh baria)
          </div>
        </div>
      </section>

      <section className="section family-info">
        <h2>Family Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <strong>Father:</strong> Azizbhai Daruwala
          </div>
          <div className="info-item">
            <strong>Mother:</strong> Fatema Azizbhai Daruwala
          </div>
          <div className="info-item">
            <strong>Siblings:</strong> One married brother
          </div>
        </div>
        <div className="family-gallery">
          <h3>Family Photos</h3>
          <ImageGallery folder="family-images" />
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
    </div>
  )
}

export default App
