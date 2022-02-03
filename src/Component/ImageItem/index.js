import './index.css'

const ImageItem = props => {
  const {imageDetail, onClickAnyThumbnail} = props
  const {thumbnailUrl, id} = imageDetail

  const onClickImage = () => {
    onClickAnyThumbnail(id)
  }

  return (
    <li className="list-style-thumbnail">
      <button className="btn" type="button">
        <img
          className="thumbnail"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ImageItem
