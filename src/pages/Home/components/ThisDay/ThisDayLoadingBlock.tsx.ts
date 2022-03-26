import React from "react"
import ContentLoader from "react-content-loader"


const ThisDayLoadingBlock = () => {

  return (
    <ContentLoader 
    speed={2}
    width={900}
    height={900}
    viewBox="0 0 900 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="26" y="270" rx="0" ry="0" width="400" height="307" />
  </ContentLoader>
  )
  
}

export default ThisDayLoadingBlock;