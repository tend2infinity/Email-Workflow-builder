import { createSlice } from '@reduxjs/toolkit'
export const drawerSlice = createSlice({
    name: 'drawerState',
    initialState: {
      open: false,
      workflow: false,
      workflowName: '',
      workflowTrigger:'',
      workflowList:''
    },
    reducers: {
      toggleOpen: state => {
        state.open = true;
      },
      toggleClose: state => {
        state.open = false;
      },
      toggleWorkflowTrue: state => {
        state.workflow = true;
      },
      toggleWorkflowFalse: state => {
        state.workflow = false;
      }

    }
  })
  
  export const { toggleOpen , toggleClose, toggleWorkflowTrue, toggleWorkflowFalse  } = drawerSlice.actions
  
  export default drawerSlice.reducer