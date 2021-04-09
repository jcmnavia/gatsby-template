import React from 'react'
import Image from 'gatsby-plugin-sanity-image'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const ImageComponent = ({ data, className }) => {
  if (!data || !data?.image) return null
  const hasMobile = data?.hasImageMobile && data?.imageMobile

  return (
    <>
      {hasMobile && (
        <Image
          // eslint-disable-next-line
          {...data?.imageMobile}
          alt={data?.alt}
          className={classnames('d-md-none', className)}
        />
      )}
      <Image
        // eslint-disable-next-line
        {...data?.image}
        alt={data?.alt}
        className={classnames('d-md-inline', className, {
          'd-none': hasMobile,
        })}
      />
    </>
  )
}

export default ImageComponent

ImageComponent.defaultProps = {
  data: null,
  className: null,
}

ImageComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
}
