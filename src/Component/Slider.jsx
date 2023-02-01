import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <div className='slider'>
    
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 imgslide" src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5119/1455119-h-2a917e92adac" alt="First slide" />
        <Carousel.Caption>
          <h2 className='title'>First slide label</h2>
          <p className='story' >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgslide"
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5422/1445422-h-aa26fdae4221"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className='title'>First slide label</h2>
          <p className='story' >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgslide"
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2457/1462457-h-08ecd552fa8f"
          alt="Third slide"
         
          
        />

        <Carousel.Caption>
        <h2 className='title'>First slide label</h2>
          <p className='story' >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         
    </div>
  )
}

export default Slider