export const UPLOAD_FILE_SELECTED = '@@UploadBankStatements/UPLOAD_FILE_SELECTED'
export const UPLOAD_FINISHED_SUCCESSFUL = '@@UploadBankStatements/UPLOAD_FINISHED_SUCCESSFUL'
export const UPLOAD_FINISHED_ERROR = '@@UploadBankStatements/UPLOAD_FINISHED_ERROR'
export const UPLOAD_START = '@@UploadBankStatements/UPLOAD_START'

export const handleFileSelect = (file) => {
  return {
    type: UPLOAD_FILE_SELECTED,
    file
  }
}
export const upload = (file) => {
  const data = new FormData()
  data.append('file', file)
  return {
    types: [UPLOAD_START, UPLOAD_FINISHED_SUCCESSFUL, UPLOAD_FINISHED_ERROR],
    successMessage: 'File was successfully uploaded',
    callAPI: (headers) => fetch('http://localhost:8080/bank-file-uploads',
      {
        method: 'POST',
        body: data,
        headers
      }
    )
  }
}

export const actions = {
  upload,
  handleFileSelect
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPLOAD_FILE_SELECTED]: (state, action) => {
    return {
      ...state,
      file: action.file
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
}
export default function bankFileUploadsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
