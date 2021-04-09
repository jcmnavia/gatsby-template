import React from 'react'
import BlockContent, {
  defaultSerializers,
} from '@sanity/block-content-to-react'
import PropTypes from 'prop-types'

const BlockText = ({ data, hasContainer = true, className = '' }) => {
  const serializers = {
    ...defaultSerializers,
    types: {
      // eslint-disable-next-line
      undefined: ({ children }) => <> {children} </>,
      // eslint-disable-next-line
      block: ({ children, node: { style: Tag } }) => {
        if (Tag === 'normal' || Tag === undefined) {
          Tag = 'p'
        }
        if (!hasContainer) {
          return <>{children}</>
        }
        return <Tag className={className}>{children}</Tag>
      },
    },
    // eslint-disable-next-line
    container: ({ children }) => <> {children}</>,
  }

  return <>{data && <BlockContent blocks={data} serializers={serializers} />}</>
}

export default BlockText

BlockText.defaultProps = {
  hasContainer: true,
  className: '',
  data: null,
}

BlockText.propTypes = {
  hasContainer: PropTypes.bool,
  data: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
}
