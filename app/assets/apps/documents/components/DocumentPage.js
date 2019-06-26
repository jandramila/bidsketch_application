import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css';
import cn from 'classnames'
import { actions } from '../store'

class DocumentPage extends React.Component {
  render() {
    const { currentPage, guidedFlow, selectedPage, requestToggleCheckbox } = this.props;

    if (!selectedPage) {
      return null;
    }

    const { checkboxes } = currentPage;
    const firstUnchecked = find(checkboxes, { checked: false })

    return (
      <div className="document-page">
        <div className="document-page__page">
          {checkboxes.map(({ id, checked }) => (
            <Tooltip
              className="document-page__checkbox"
              key={id}
              visible={guidedFlow && !!firstUnchecked && firstUnchecked.id === id}
              overlay="Click to CHECK"
              placement="top"
            >
              <input
                className={cn('document-page__checkbox', {
                  'document-page__checkbox--guided': guidedFlow && firstUnchecked && firstUnchecked.id === id
                })}
                type="checkbox"
                checked={checked}
                onChange={() => requestToggleCheckbox(selectedPage, id, !checked)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    document: { pages },
    page: { guidedFlow, selectedPage },
  } = state;
  const currentPage = find(pages, { id: selectedPage })

  return {
    currentPage,
    guidedFlow,
    selectedPage,
  }
}

const mapDispatchToProps = dispatch => ({
  requestToggleCheckbox: (pageId, id, checked) => dispatch(actions.requestToggleCheckbox(pageId, id, checked))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPage)