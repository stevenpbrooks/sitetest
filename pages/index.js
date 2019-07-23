import React from 'react'
import Components from '../components/index'
import Layout from '../components/layout'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageContent: "hi", 
    }
  }

//  static async getInitialProps({ query }) {
//    StoryblokService.setQuery(query)

//    let [page, settings] = await Promise.all([
//      StoryblokService.get('cdn/stories/home'),
//      StoryblokService.get('cdn/stories/en/settings')
//    ])

//    return {
//      page,
//      settings
//    }
//  }

  render() {
    const { settings } = this.props
    const { pageContent } = this.state
    return (
      <Layout> 
        <p>hello</p>
      </Layout>
    )
  }
}
