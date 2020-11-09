import { storage } from '@core/utils'
import { defaultStyles, defaultTitle } from '@/constants'

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles
}

const nozmalize = state => ({
  ...state,
  currentText: '',
  currentStyles: defaultStyles
})

export const initialState = storage('excel-state')
  ? nozmalize(storage('excel-state'))
  : defaultState
