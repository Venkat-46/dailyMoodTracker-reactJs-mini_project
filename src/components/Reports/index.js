import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import Header from '../Header'
import ProjectContext from '../../ProjectContext'
import './index.css'

class Reports extends Component {
  render() {
    return (
      <ProjectContext.Consumer>
        {value => {
          const {
            monthsList,
            emojiList,
            onUpdateMonth,
            monthlyReportData,
          } = value

          const onChangeMonth = event => {
            onUpdateMonth(event.target.value)
          }

          const getEachCount = emojiName => {
            let count = 0
            monthsList.map(eachItem => {
              eachItem.dates.map(each => {
                if (each.emojiName === emojiName) {
                  count += 1
                }
                return each
              })
              return eachItem
            })
            console.log({countEmoji: count})
            return count
          }

          const getOveralCount = each => {
            const {id, emojiUrl, emojiName} = each

            return (
              <li
                key={id}
                data-testid="overalReportItem"
                className="overal-report-item"
              >
                <p data-testid="emojiName" className="emoji-name">
                  {emojiName}
                </p>
                <img
                  data-testid="emojiImg"
                  src={emojiUrl}
                  alt={emojiName}
                  className="emoji-img"
                />
                <p data-testid="emojiCount" className="emoji-count">
                  {getEachCount(emojiName)}
                </p>
              </li>
            )
          }

          return (
            <>
              <Header />
              <div
                data-testid="mainReportsContainer"
                className="main-reports-container"
              >
                <div
                  data-testid="reportsContainer"
                  className="reports-container"
                >
                  <h1 data-testid="reportHeading" className="report-heading">
                    Overall Emojis Reports
                  </h1>
                  <ul
                    data-testid="overalEmojiCountContainer"
                    className="overal-emoji-count-container"
                  >
                    {emojiList.map(each => getOveralCount(each))}
                  </ul>
                  <div
                    data-testid="monthlyReportContainer"
                    className="monthly-report-container"
                  >
                    <p data-testid="monthlyHeading" className="monthly-heading">
                      Monthly Reports
                    </p>
                    <select
                      data-testid="selectMonthContainer"
                      className="select-month-container"
                      onChange={onChangeMonth}
                    >
                      {monthsList.map(eachItem => (
                        <option key={eachItem.month} value={eachItem.monthName}>
                          {eachItem.monthName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    data-testid="smGrapContainer"
                    className="sm-grap-container"
                  >
                    <ResponsiveContainer width="100%" aspect={3}>
                      <BarChart
                        width={450}
                        height={250}
                        data={monthlyReportData}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="name"
                          barSize={20}
                          type="category"
                          tick={{stroke: 'white', strokeWidth: 1}}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="monthlyCount" fill="#ffbe38" />
                      </BarChart>
                    </ResponsiveContainer>
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

export default Reports
