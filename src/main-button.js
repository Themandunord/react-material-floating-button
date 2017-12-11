'use strict';

var React = require('react');
var classnames = require('classnames');

class MainButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var iconResting = classnames('mfb-component__main-icon--resting', 'material-icons');
    var iconActive = classnames('mfb-component__main-icon--active', 'material-icons');
    var mainClass = classnames('mfb-component__button--main', this.props.className);
    if (this.props.label) {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick} data-mfb-label={this.props.label}>
          <i className={iconResting}>{this.props.iconResting}</i>
          <i className={iconActive}>{this.props.iconActive}</i>
        </a>
      );
    } else {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick}>
          <i className={iconResting}>{this.props.iconResting}</i>
          <i className={iconActive}>{this.props.iconActive}</i>
        </a>
      );
    }
  }
}

MainButton.defaultProps = {
  href: '#',
  onClick: function(){},
  iconResting: '',
  iconRestingName: '',
  iconActive: '',
  iconActiveName: '',
  label: null
};

module.exports = MainButton;
