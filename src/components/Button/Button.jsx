import css from './Button.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    this.props.loadMore();
  };

  render() {
    // const {loadMore, per_page} = this.props;
    return (
      <div className={css.loadMore}>
        <button className={css.button} onClick={this.handleClick} type="button">
          Load more
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  per_page: PropTypes.number,
  loadMore: PropTypes.func,
};

export default Button;
