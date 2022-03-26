import ContentLoader from "react-content-loader"

const ThisDayLoadingBlock = () => (
    <ContentLoader 
    speed={2}
    width={410}
    height={310}
    viewBox="0 0 410 310"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="1" y="1" rx="0" ry="23" width="400" height="307" />
  </ContentLoader>
)

export default ThisDayLoadingBlock