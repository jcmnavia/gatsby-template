import React from "react"
import BlockContent, {
  defaultSerializers,
} from "@sanity/block-content-to-react"

const BlockText = ({ data, hasContainer = true, className = "" }) => {
  const serializers = {
    ...defaultSerializers,
    types: {
      undefined: props => <> {props.children} </>,
      block: ({ children, node: { style: Tag } }) => {
        if (Tag === "normal") {
          Tag = "p"
        }
        if (!hasContainer) {
          return <>{children}</>
        }
        return <Tag className={className}>{children}</Tag>
      },
    },
    container: props => <> {props.children}</>,
  }

  return <>{data && <BlockContent blocks={data} serializers={serializers} />}</>
}

export default BlockText
