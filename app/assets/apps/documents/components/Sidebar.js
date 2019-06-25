import React from 'react'
import cn from 'classnames'
import GreenCheck from 'images/green-check.svg'

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
    const pages = [
      { id: 1, checkboxes: [ { id: 1, checked: true }, { id: 2, checked: true } ] },
      { id: 2, checkboxes: [ { id: 3, checked: false }, { id: 4, checked: false } ] },
      { id: 3, checkboxes: [] },
      { id: 4, checkboxes: [] },
      { id: 5, checkboxes: [] }
    ]

    const currentPageId = 1

    return (
      <div className="sidebar row">
        {pages.map(({ id, checkboxes }) => (
          <div
            key={id}
            className={cn("sidebar__page", "col-1/1", {
              "sidebar__page--current": id === currentPageId,
            })}
          >
            {this.getPageIcon(checkboxes)}
          </div>
        ))}
      </div>
    )
  }
}

export default Sidebar
