const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <div {...props}>{element}</div>
}
