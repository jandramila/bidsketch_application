import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { actions } from '../store'

class DocumentPage extends React.Component {
  render() {
    const { currentPage, selectedPage, requestToggleCheckbox } = this.props;

    if (!selectedPage) {
      return null;
    }

    const { checkboxes } = currentPage;

    return (
      <div className="document-page">
        <div className="document-page__page">
          {checkboxes.map(({ id, checked }) => (
            <input
              key={id}
              className="document-page__checkbox"
              type="checkbox"
              checked={checked}
              onChange={() => requestToggleCheckbox(selectedPage, id, !checked)}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    document: { pages },
    page: { selectedPage },
  } = state;
  const currentPage = find(pages, { id: selectedPage })

  return {
    currentPage,
    selectedPage,
  }
}

const mapDispatchToProps = dispatch => ({
  requestToggleCheckbox: (pageId, id, checked) => dispatch(actions.requestToggleCheckbox(pageId, id, checked))
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentPage)