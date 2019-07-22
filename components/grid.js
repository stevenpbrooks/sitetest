import React from 'react'
import Components from './index'

export default (props) => (
  <SbEditable content="props.content">
    <div className="util__flex">
      {props.content.columns.map((blok) =>
        Components(blok)
      )}
    </div>
  </SbEditable>
)