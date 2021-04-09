const React = require('react')

exports.wrapPageElement = ({ element, props }) => {
  return <div {...props}>{element}</div>
}
