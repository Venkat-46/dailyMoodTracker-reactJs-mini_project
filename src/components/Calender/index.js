import {Component} from 'react'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
import ProjectContext from '../../ProjectContext'
import './index.css'

class Calender extends Component {
  state = {
    month: 0,
  }

  onClickMoveLeft = () => {
    this.setState(prevState => {
      if (prevState.month > 1) {
        return {month: prevState.month - 1}
      }
      return {month: 0}
    })
  }

  onClickMoveRight = () => {
    this.setState(prevState => {
      if (prevState.month < 11) {
        return {month: prevState.month + 1}
      }
      return {month: 11}
    })
  }

  render() {
    const {month} = this.state
    return (
      <ProjectContext.Consumer>
        {value => {
          const {monthsList, days, onUpdateMonthsList, activeEmojiID} = value

          const getDateItem = each => {
            const {id, date, emojiUrl} = each

            const onClickDate = () => {
              onUpdateMonthsList(id, activeEmojiID, month + 1, date)
            }

            return (
              <li
                data-testid="dateListItem"
                key={id}
                className="date-list-item"
              >
                <button
                  data-testid="dateButton"
                  type="button"
                  onClick={onClickDate}
                  className="date-button"
                >
                  <p data-testid="dateText" className="date-text">
                    {date}
                  </p>
                  {emojiUrl === '' ? (
                    ''
                  ) : (
                    <img
                      data-testid="emojiImg"
                      src={emojiUrl}
                      alt={date}
                      className="emoji-img"
                    />
                  )}
                </button>
              </li>
            )
          }

          return (
            <div data-testid="calenderContainer" className="calender-container">
              <div data-testid="calenderHeader" className="calender-header">
                <button
                  data-testid="previous-button"
                  type="button"
                  className="move-left-button"
                  onClick={this.onClickMoveLeft}
                >
                  <MdOutlineKeyboardArrowLeft />.
                </button>
                <h1 data-testid="monthName" className="month-name">
                  {monthsList[month].monthName}
                </h1>
                <button
                  data-testid="next-button"
                  type="button"
                  className="move-right-button"
                  onClick={this.onClickMoveRight}
                >
                  .
                  <MdOutlineKeyboardArrowRight />
                </button>
              </div>
              <ul
                data-testid="daysListContainer"
                className="days-list-container"
              >
                {days.map(each => (
                  <li
                    data-testid="dayListItem"
                    key={each.id}
                    className="day-list-item"
                  >
                    <p data-testid="daysText" className="days-text">
                      {each.day}
                    </p>
                  </li>
                ))}
              </ul>
              <ul
                data-testid="datesListContainer"
                className="dates-list-container"
              >
                {monthsList[month].dates.map(each => getDateItem(each))}
              </ul>
            </div>
          )
        }}
      </ProjectContext.Consumer>
    )
  }
}

export default Calender
