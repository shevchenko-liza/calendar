import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextWrapper } from './Global/ContextWrapper'
import './styles.module.scss'

const MOUNT_POINT = document.getElementById('root')
try {
  if (!MOUNT_POINT) {
    throw new Error('#root mount point not found')
  }
  const root = ReactDOM.createRoot(MOUNT_POINT)
  root.render(
    <React.StrictMode>
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </React.StrictMode>
  )
} catch (error) {
  console.error((error).message);
}
