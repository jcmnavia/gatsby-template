import React from "react"
import Image from "gatsby-plugin-sanity-image"
import classnames from "classnames"

const ImageComponent = ({ data, className }) => {
  if (!data || !data?.image) return null
  const hasMobile = data?.hasImageMobile && data?.imageMobile

  return (
    <>
      {hasMobile && (
        <Image
          {...data?.imageMobile}
          alt={data?.alt}
          className={classnames("d-md-none", className)}
        />
      )}
      <Image
        {...data?.image}
        alt={data?.alt}
        className={classnames("d-md-inline", className, {
          "d-none": hasMobile,
        })}
      />
    </>
  )
}

export default ImageComponent
