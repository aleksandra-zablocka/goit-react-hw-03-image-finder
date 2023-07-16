import css from './Loader.module.css';
import { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={css.containerStyle}>
        <div className={css.spinnerStyle} />
        <span style={{ marginLeft: '8px' }}>Loading...</span>
      </div>
    );
  }
}

export default Loader;
