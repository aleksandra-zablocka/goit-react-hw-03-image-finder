import css from './Button.module.css';
import { Component } from 'react';

class Button extends Component {
  
  handleClick = () => {
    this.props.loadMore();
  };

  render() {
    // const {loadMore, per_page} = this.props;
    return (
      <div className={css.loadMore}>
        <button className={css.button} onClick={this.handleClick} type="button">Load more</button>
      </div>
    );
  }
}

export default Button;
