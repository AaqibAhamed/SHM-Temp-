import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselCaption, MDBView } from 'mdbreact';
import "../../Styles/ContentSlider.scss";

class ContentSlider extends Component {
    constructor(props) {
        super(props);
        this.slider = this.props.content;
        this.state = { current:0 }
    }

    render(){
        return (<div className="slider-outer-container">
            <MDBCarousel
                activeItem={1}
                length={this.slider.slides.length}
                showControls={true}
                className="z-depth-1 slider-container"
            >
                <MDBCarouselInner className="slider">
                    {this.slider.slides.map((slide,i)=><MDBCarouselItem key={i} itemId={i+1} className="slider">
                        <MDBView className="slide-container">
                            {slide.image?<img
                                className="d-block w-100 slide"
                                src={"/content/"+slide.image}
                                alt={slide.title}
                            />:""}
                        </MDBView>
                        <MDBCarouselCaption className="content-container">
                            <h3 className="h3-responsive title">{slide.title}</h3>
                            <p className="desc">{slide.desc}</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>)}
                </MDBCarouselInner>
            </MDBCarousel>
        </div>);
    }
}
 
export default ContentSlider;