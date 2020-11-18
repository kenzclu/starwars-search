import React from 'react'
import classNames from 'classnames'
import './Container.scss'

function Container (props) {
  const { center } = props

  return (
    <div className={classNames('page-container', { center: !!center })}>
      {props.children}
    </div>
  )
}

export default Container
