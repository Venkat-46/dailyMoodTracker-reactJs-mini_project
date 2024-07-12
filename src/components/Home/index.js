import {Component} from 'react'
import ProjectContext from '../../ProjectContext'
import Header from '../Header'
import Calender from '../Calender'
import './index.css'

class Home extends Component {
  render() {
    return (
      <ProjectContext.Consumer>
        {value => {
          const {
            days,
            emojiList,
            activeEmojiID,
            onUpdateEmoji,
            onUpdateUserSelectedDay,
            onUpdateUserSelectedEmoji,
            count,
          } = value

          const onChangeDay = event => {
            onUpdateUserSelectedDay(event.target.value)
          }

          const onChangeEmoji = event => {
            onUpdateUserSelectedEmoji(event.target.value)
          }

          const renderEmojiItem = each => {
            const {id, emojiName, emojiUrl} = each

            const onChangeMood = () => {
              onUpdateEmoji(id)
            }

            const isActiveEmoji = id === activeEmojiID
            const emojiActiveStyle = isActiveEmoji ? 'style-active-emoji' : ''
            const emojiActive = isActiveEmoji ? 'style-emoji' : ''

            return (
              <li
                data-testid="emojiListItem"
                key={id}
                className="emoji-list-item"
              >
                <button
                  data-testid="emojiButton"
                  type="button"
                  className={`emoji-button ${emojiActiveStyle}`}
                  onClick={onChangeMood}
                >
                  <p data-testid="emojiName" className="emoji-name">
                    {emojiName}
                  </p>
                  <img
                    src={emojiUrl}
                    alt={emojiName}
                    data-testid="emojiImg"
                    className={`emoji-img ${emojiActive}`}
                  />
                </button>
              </li>
            )
          }

          return (
            <>
              <Header />
              <div
                data-testid="mainHomeContainer"
                className="main-home-container"
              >
                <h1 data-testid="homeHeading" className="home-heading">
                  Moods in a Month
                </h1>
                <div
                  data-testid="homeItemsContainer"
                  className="home-items-container"
                >
                  <ul
                    data-testid="emojiListContainer"
                    className="emoji-list-container"
                  >
                    {emojiList.map(each => renderEmojiItem(each))}
                  </ul>
                  <Calender />
                  <div
                    data-testid="lgSelectionSection"
                    className="lg-selection-section"
                  >
                    <ul
                      data-testid="lgEmojiListContainer"
                      className="lg-emoji-list-container"
                    >
                      {emojiList.map(each => renderEmojiItem(each))}
                    </ul>
                    <div
                      data-testid="selectionSection"
                      className="selection-section"
                    >
                      <div
                        data-testid="selectionContainer"
                        className="selection-container"
                      >
                        <select
                          data-testid="emojiSelectContainer"
                          onChange={onChangeEmoji}
                          className="emoji-select-container"
                        >
                          {emojiList.map(each => (
                            <option key={each.id} value={each.id}>
                              {each.emojiName}
                            </option>
                          ))}
                        </select>
                        <select
                          data-testid="selectContainer"
                          onChange={onChangeDay}
                          className="select-container"
                        >
                          {days.map(each => (
                            <option key={each.id} value={each.dayNumber}>
                              {each.day}
                            </option>
                          ))}
                        </select>
                      </div>
                      <h1 data-testid="countText" className="count-text">
                        0{count}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </ProjectContext.Consumer>
    )
  }
}

export default Home
