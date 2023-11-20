import Header from '../../components/Header'
import  './gallery.css'

function Gallery() {
  const galleryLenth = 15
  const images = []
  for(let i = 1; i <= galleryLenth; i++) {
    images.push(`./assets/gallery${i}.jpg`)
  }

  return (
    <>
    <Header image='./assets/header_bg_3.jpg' title='Our Gallery'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perspiciatis doloremque aliquid, consequuntur nobis, voluptates distinctio earum nesciunt labore dignissimos, odio deleniti assumenda magni rem dolor at modi. Obcaecati, iusto!</p>
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
       {
        images.map((images, index) => (
          <article key={index}>
            <img src={images} alt={`Gallery ${index + 1}`} />
          </article>
        ))
       }
      </div>
    </section>
    </>
  )
}

export default Gallery