import React from 'react'

const PhotoAlbum = () => {
  return (
    <div className="album">
      <div className="block container text-center">
        <div className="block__heading--dark">The photo album</div>
        <p className="dark">
          We have released the photos of the last DEVit. We have released the photos of the last
          DEVit. We have released the photos of the last DEVit.
        </p>
      </div>
      <div className="album__row">
        <div className="album__one">
          <img className="album__img" src="/assets/images/new/ph-342x342-1.jpg" alt="" />
        </div>
        <div className="album__one">
          <img className="album__img" src="/assets/images/new/ph-342x342-4.jpg" alt="" />
        </div>
        <div className="album__two">
          <div className="album__cta">
            <div className="album__cta__heading">Tag you very much</div>
            <div className="album__cta__paragraph">
              Spot your face and tag your friends Spot your face and tag your friends Spot your.
            </div>
            <button className="album__cta__button">Go</button>
          </div>
          <img className="album__img" src="/assets/images/new/ph-683x342-1.jpg" alt="" />
        </div>
      </div>
      <div className="album__row">
        <div className="album__one">
          <img className="album__img" src="/assets/images/new/ph-342x342-3.jpg" alt="" />
        </div>
        <div className="album__two">
          <img className="album__img" src="/assets/images/new/melanie-683x342.jpg" alt="" />
        </div>
        <div className="album__one">
          <img className="album__img" src="/assets/images/new/ph-342x342-2.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PhotoAlbum
