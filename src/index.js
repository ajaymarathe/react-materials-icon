import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class MaterialReactIcon extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() { 
    const StyleIcon = {
        fontSize: this.props.size + 'rem',
        color: this.props.color,
    };
    return ( 

        <i className="material-icons" style={StyleIcon}>
            {this.props.icon}
        </i>

    );
  }
}
