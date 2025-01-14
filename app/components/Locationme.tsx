import  '../styles/Locationmecss.css';

const Locationme = () => {
  return (
    <div className='container'>
      <div className='mapContainer'>
        {/* Google Maps Embed */}
        <iframe
          className='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6990955234387!2d95.3163425747944!3d5.533772734524816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304037535fdf6e15%3A0x60c6a9c515693b11!2sBasarnas%20Kantor%20SAR%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1702912345678!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* Text Box */}
        <div className='textBox'>
          <h2 className='headline'>HEAD OFFICE</h2>
          <p className='address'>
            Jl. Malikulsaleh Kantor SAR Banda Aceh, Nomor 108 Lhong Raya, Kecamatan Banda Raya, Kota Banda Aceh, Provinsi Aceh
          </p>
          <a
            href="https://maps.google.com/?q=Basarnas Kantor SAR Banda Aceh"
            target="_blank"
            rel="noopener noreferrer"
            className='mapLink'
          >
            Buka di Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Locationme;