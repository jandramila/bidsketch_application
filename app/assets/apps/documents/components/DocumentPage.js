import React from 'react'

class DocumentPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxes: [ { id: 3, checked: false }, { id: 4, checked: false } ],
    }
  }

  toggleCheckbox = (toggledId, checked) => {
    const { checkboxes: previousCheckboxes } = this.state;
    const checkboxes = previousCheckboxes.map((checkbox) => {
      const { id } = checkbox;
      if (id === toggledId) {
        return { id, checked }
      }
      return checkbox
    })
    this.setState({ checkboxes })
  }

  render() {
    const { checkboxes } = this.state;

    return (
      <div className="document-page">
        <div className="document-page__page">
          {checkboxes.map(({ id, checked }) => (
            <input
              key={id}
              className="document-page__checkbox"
              type="checkbox"
              checked={checked}
              onChange={() => this.toggleCheckbox(id, !checked)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default DocumentPage