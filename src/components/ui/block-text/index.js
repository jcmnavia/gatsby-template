import React from "react"
import ReactHtmlParser from "react-html-parser"

const BlockText = ({ data, tag: Tag = null, className = "" }) => {
  return data?.map(parr => {
    return parr?.children.map(child => {
      if (Tag) {
        return <Tag className={className}>{ReactHtmlParser(child.text)}</Tag>
      }
      return ReactHtmlParser(child.text)
    })
  })
}

export default BlockText
