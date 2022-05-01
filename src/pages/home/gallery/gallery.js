import React from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'
import MyGallery from 'react-grid-gallery'
const Gallery = (props) => {
    const images = props.images.map((item) => {
        return {
            src: 'https://i.pinimg.com/564x/4a/a0/6d/4aa06dcdad095753770bc835259ce2a2.jpg',
            thumbnail:
                'https://i.pinimg.com/564x/4a/a0/6d/4aa06dcdad095753770bc835259ce2a2.jpg',
            caption: item.Caption,
            thumbnailCaption: item.Caption,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            // tags: [{ value: 'LYD 100', title: 'السعر' }],
        }
    })

    return (
        <div
            style={{
                display: 'block',
                minHeight: '1px',
                width: '100%',
                // border: '1px solid grey',
                overflow: 'auto',
            }}
        >
            <div
                style={{
                    padding: '2px',
                    color: '#666',
                }}
            ></div>
            <MyGallery
                thumbnailStyle={() => {
                    return {
                        // border: '1px solid black',
                    }
                }}
                margin={3}
                maxRows={2}
                images={images}
                enableLightbox={true}
                enableImageSelection={false}
            />
        </div>
    )
}

export default Gallery
