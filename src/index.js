import PropTypes from 'prop-types';
import React from 'react';
// import confirmation from 'cccisd-confirm';
import style from './style.css';

export default class ClickButton extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        className: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func,
        // isConfirm: PropTypes.bool,
        // confirmationMessage: PropTypes.node,
        isLoading: PropTypes.bool,
        isDisabled: PropTypes.bool,
        style: PropTypes.object,
    };

    static defaultProps = {
        title: 'Submit',
        className: 'btn btn-primary',
        id: null,
        onClick() {},
        // isConfirm: false,
        // confirmationMessage: 'Are you sure?',
        isLoading: false,
        isDisabled: false,
        style: {},
    };

    clicked = e => {
        e.preventDefault();
        this.props.onClick();
    };

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        const { className, title, isDisabled, isLoading } = this.props;

        return (
            <button
                type="submit"
                id={this.props.id}
                className={className}
                style={this.props.style}
                disabled={isDisabled || isLoading}
                onClick={this.clicked}
            >
                {isLoading && <div className={style.loader} />}
                {title}
            </button>
        );
    }
}
