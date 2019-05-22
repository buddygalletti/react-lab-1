import React from 'react'
import ReactDOM from 'react-dom'

const Color = (props) => {
  const color = props.color
  const classString = (props.selectedColor === color)
      ? color + ' selected'
      : color
  return (
    <div className={ classString } onClick={() => props.selectColor(color)} />
  )
}

class Picker extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedColor: 'red'
    }
    // this.selectColor = this.selectColor.bind(this) // `bind` solution
  }
  // class property syntax solution, using arrow
  selectColor = (colorName) => {
    this.setState({
      selectedColor: colorName
    })
  }
  render () {
    const color = this.state.selectedColor
    return (
      <div id='container'>
        <div id='navbar'>
          <div>Currently selected: </div>
          <div className={color}>{color}</div>
        </div>
        <div id='colors-list'>
          <Color color="red" selectColor={this.selectColor} selectedColor={color} />
          <Color color="blue" selectColor={this.selectColor} selectedColor={color} />
          <Color color="green" selectColor={this.selectColor} selectedColor={color} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
)
