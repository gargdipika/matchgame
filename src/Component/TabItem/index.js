import './index.css'

const TabItem = props => {
  const {tabDetail, changeTab, isActive} = props
  const {tabId, displayText} = tabDetail
  const buttonStyle = isActive ? 'button button-active' : 'button'
  const onClickDifferentTabs = () => {
    changeTab(tabId)
  }

  return (
    <li className="list-style">
      <button
        type="button"
        className={buttonStyle}
        onClick={onClickDifferentTabs}
      >
        {displayText}
      </button>
      {isActive && <hr className="horizontal-line-style" />}
    </li>
  )
}

export default TabItem
