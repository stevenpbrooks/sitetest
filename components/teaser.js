import React from 'react'
import Components from './index'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0
    }
  }

  slide() {
    let slides = this.props.content.body.filter((slide, index) => {
      return this.state.currentSlide === index
    })
    if (slides.length) {
      return slides[0]
    }
    return null
  }

  pagClass(index) {
    return 'teaser__pag-dot ' + (index == this.state.currentSlide ? 'teaser__pag-dot--current' : '')
  }

  handleDotClick(index) {
    this.setState({
      currentSlide: index
    })
  }

  render() {
    const { content } = this.props
    return (
      <SbEditable content={content}>
        <div className="teaser">
          {this.slide() ? Components(this.slide()) : ''}
          <div className="teaser__pag">
            {content.body.map((blok, index) =>
              <button key={index} onClick={() => this.handleDotClick(index)}
                className={this.pagClass(index)}>Next</button>
            )}
          </div>

          <style jsx>{`
            .teaser__pag {
              width: 100%;
              text-align: center;
              margin: 30px 0;
            }

            .teaser__pag-dot {
              text-indent: -9999px;
              border: 0;
              border-radius: 50%;
              width: 17px;
              height: 17px;
              padding: 0;
              margin: 5px 6px;
              background-color: #ccc;
              -webkit-appearance: none;
              cursor: pointer;
            }

            .teaser__pag-dot--current {
              background-color: #000;
            }
          `}</style>
        </div>
      </SbEditable>
    )
  }
}