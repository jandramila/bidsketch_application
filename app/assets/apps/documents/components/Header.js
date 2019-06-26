import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'rc-progress'
import ArrowLeft from 'images/arrow-left.svg'
import { actions } from '../store'

const COMPLETE_DOCUMENT_MSG = 'Document complete!'
const UNCOMPLETE_DOCUMENT_MSG = 'Review & Complete document'
const GUIDED_FLOW_BTN_MSG = 'Click to START'
const SAVE_BTN_MSG = 'Save & finish document'

class Header extends React.Component {
  renderProgress() {
    const { checked, progress, total } = this.props;
    if (progress === 0) {
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
          percent={progress}
          strokeLinecap="butt"
        />
        <div
          className="header__progress-message"
          style={{ transform: `translate(-${100 - progress}%)` }}
        >
          {checked}/{total}
        </div>
      </div>
    )
  }

  render() {
    const {
      blocked,
      checked,
      finishDocument,
      guidedFlow,
      progress,
      startGuidedFlow,
      total,
    } = this.props;
    const completed = checked === total;

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
            {completed ? COMPLETE_DOCUMENT_MSG : UNCOMPLETE_DOCUMENT_MSG}
          </div>
          {!completed && !guidedFlow &&(
            <input
              className="btn btn-rounded"
              type="button"
              value={GUIDED_FLOW_BTN_MSG}
              onClick={() => startGuidedFlow()}
            />
          )}
          {completed && !blocked && (
            <input
              className="btn btn-rounded header__save-btn"
              type="button"
              value={SAVE_BTN_MSG}
              onClick={() => finishDocument()}
            />
          )}
        </div>
        {this.renderProgress()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    document: { pages, blocked },
    page: { guidedFlow },
  } = state;
  const { checked, total } = pages.reduce((acc, page) => ({
    checked: acc.checked + page.checkboxes.filter(({ checked }) => checked).length,
    total: acc.total + page.checkboxes.length,
  }), { checked: 0, total: 0 });
  return {
    blocked,
    checked,
    guidedFlow,
    progress: (checked / total) * 100,
    total,
  }
}

const mapDispatchToProps = dispatch => ({
  finishDocument: () => dispatch(actions.finishDocument()),
  startGuidedFlow: () => dispatch(actions.startGuidedFlow()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)