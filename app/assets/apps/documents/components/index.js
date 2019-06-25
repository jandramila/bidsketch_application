import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import DocumentPage from './DocumentPage'

class DocumentsApp extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <div className="documents__content">
          <div className="documents__sidebar-wrapper pull-left">
            <Sidebar />
          </div>
          <div className="documents__document-page-wrapper">
            <DocumentPage />
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentsApp
