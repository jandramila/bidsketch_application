import React from 'react'
import { Line } from 'rc-progress';
import ArrowLeft from 'images/arrow-left.svg'

const COMPLETE_DOCUMENT_MSG = 'Document complete!'
const UNCOMPLETE_DOCUMENT_MSG = 'Review & Complete document'
const GUIDED_FLOW_BTN_MSG = 'Click to START'
const SAVE_BTN_MSG = 'Save & finish document'

class Header extends React.Component {
  renderProgress(percentage) {
    if (percentage === 0) {
      return (
        <div className="header__progress col-12/12" />
      )
    }

    return (
      <div className="header__progress col-12/12">
        <Line
          className="header__progress-bar"
          strokeColor="#51B7C5"
          trailColor="#CFCFCF"
          percent={percentage}
          strokeLinecap="butt"
        />
        <div
          className="header__progress-message"
          style={{ transform: `translate(-${100 - percentage}%)` }}
        >
          2/4
        </div>
      </div>
    )
  }

  render() {
    const percentage = 50;
    return (
      <div className="header row">
        <div className="header__upper col-12/12" >
          <img
            style={{
              height: 19,
              width: 12
            }}
            src={ArrowLeft}
            alt="Back"
          />
        </div>
        <div className="header__lower col-12/12">
          <div className="header__status-message">
            {UNCOMPLETE_DOCUMENT_MSG}
          </div>
          <input
            className="btn btn-rounded"
            type="button"
            value={GUIDED_FLOW_BTN_MSG}
          />
          <input
            className="btn btn-rounded header__save-btn"
            type="button"
            value={SAVE_BTN_MSG}
          />
        </div>
        {this.renderProgress(percentage)}
      </div>
    )
  }
}

export default Header