import React from 'react'

const ProjectContext = React.createContext({
  activeEmojiID: '',
  monthsList: '',
  emojiList: '',
  days: '',
  activeDate: '',
  userSelectDay: '',
  userSelectEmoji: '',
  monthlyReportData: [],
  onUpdateMonth: () => {},
  onUpdateEmoji: () => {},
  onUpdateMonthsList: () => {},
  getMonthlyreportData: () => {},
  onUpdateUserSelectedDay: () => {},
  onUpdateUserSelectedEmoji: () => {},
})

export default ProjectContext
