import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import GreenCheck from 'images/green-check.svg'
import { actions } from '../store'

class Sidebar extends React.Component {

  getPageIcon = (checkboxes) => {
    const total = checkboxes.length;
    
    if (total === 0) {
      return null
    }
    
    const checked = checkboxes.filter(({ checked }) => checked).length
    if (checked === total) {
      return (
        <img
          style={{
            height: 32
          }}
          className="sidebar__page__complete-img"
          src={GreenCheck}
          alt="Complete"
        />
      )
    }
    
    return (
      <div className="sidebar__page__pill pill">{checked} of {total}</div>
    )
  }

  render() {
    const { pages, selectedPage, changePage } = this.props;

    return (
      <div className="sidebar row">
        {pages.map(({ id, checkboxes }) => (
          <div
            key={id}
            className={cn("sidebar__page", "col-1/1", {
              "sidebar__page--current": id === selectedPage,
            })}
            onClick={() => changePage(id)}
          >
            {this.getPageIcon(checkboxes)}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pages: state.document.pages,
  selectedPage: state.page.selectedPage,
})

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch(actions.changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
