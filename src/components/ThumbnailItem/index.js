// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'
  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }
  return (
    <li className="thumbnail-list-item">
      <buttton
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </buttton>
    </li>
  )
}
export default ThumbnailItem
