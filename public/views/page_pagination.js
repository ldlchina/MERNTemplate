import React, { Component } from 'react';
import { FormattedMessage as FM } from 'react-intl';
import utils from '../js/utils.js';

class PagePagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "current": 1,
      "leftValue": 2,
      "midValue": 3,
      "rightValue": 4
    }

    // This binding is necessary to make `this` work in the callback
    this.UpdateCurrent = this.UpdateCurrent.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    //alert('componentWillUnmount');
  }

  UpdateCurrent(current) {
    if (current < 1) {
      current = 1;
    }

    if (current > this.props.total) {
      current = this.props.total;
    }

    var left = 2;
    var mid = 3;
    var right = 4;
    if (current - 1 < 3 || this.props.total <= 5) {
      // do nothing
    }
    else if (this.props.total - current < 3) {
      left = this.props.total - 3;
      mid = this.props.total - 2;
      right = this.props.total - 1;
    }
    else {
      left = current - 1;
      mid = current;
      right = current + 1;
    }

    this.setState({ 'current': current, 'leftValue': left, 'midValue': mid, 'rightValue': right });
    this.props.onPageChanged(current);
  }

  onPrevious(e) {
    this.UpdateCurrent(this.state.current - 1);
  }

  onNext(e) {
    this.UpdateCurrent(this.state.current + 1);
  }

  onPageClick(e) {
    this.UpdateCurrent(parseInt(e.target.text));
  }

  render() {
    return (
      <div className="page-pagination text-center mt-30 p-10 panel">
        <nav>
          <ul className="page-pagination">
            <li><a className="page-numbers previous" onClick={this.onPrevious}>上一页</a>
            </li>
            <li><a onClick={this.onPageClick} className={this.state.current == 1 ? "page-numbers current" : "page-numbers"}>1</a>
            </li>
            {
              this.props.total > 5 && this.state.current - 1 > 2 &&
              <li><span className="page-numbers dots">...</span>
              </li>
            }
            {
              this.props.total > 2 &&
              <li><a onClick={this.onPageClick} className={this.state.current == this.state.leftValue ? "page-numbers current" : "page-numbers"}>{this.state.leftValue}</a>
              </li>
            }
            {
              this.props.total > 3 &&
              <li><a onClick={this.onPageClick} className={this.state.current == this.state.midValue ? "page-numbers current" : "page-numbers"}>{this.state.midValue}</a>
              </li>
            }
            {
              this.props.total > 4 &&
              <li><a onClick={this.onPageClick} className={this.state.current == this.state.rightValue ? "page-numbers current" : "page-numbers"}>{this.state.rightValue}</a>
              </li>
            }
            {
              this.props.total > 5 && this.props.total - this.state.current > 2 &&
              <li><span className="page-numbers dots">...</span>
              </li>
            }
            {
              this.props.total > 1 &&
              <li><a onClick={this.onPageClick} className={this.state.current == this.props.total ? "page-numbers current" : "page-numbers"}>{this.props.total}</a>
              </li>
            }
            <li><a className="page-numbers next" onClick={this.onNext}>下一页</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default PagePagination;