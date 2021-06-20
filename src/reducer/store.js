import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../redux-slices/homeSlice'

export default configureStore({
  reducer: {
    home : drawerReducer
  }
})