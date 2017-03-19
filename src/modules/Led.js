import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import Timer from './Timer';
import styles from './styles/Led.scss';

class Led extends Component {

    constructor(props) {
        super(props);
        this.state = {currentCount: 0, message: ''};

        this.timer = new Timer({
            updateInterval: 1000,
            tickCallback: (tickCount) => {
                this.setState({currentCount: tickCount});
            }
        });
    }

    translateMessage() {
        this.setState({currentCount: 0, message: this.getMessageArray(this.props.message)});
        this.timer.tickFor(this.props.message);
    }

    getALphabetLetters() {
        return String.fromCharCode(...Array(91).keys()).slice(65);
    }

    getMessageArray(message) {
        return message.toUpperCase().match(/[A-Z ]/gi) || [];
    }

    render() {
        const activeLetter = this.state.message[this.state.currentCount];
        const classes = classnames(styles.container, this.props.className);

        return (
            <div className={classes}>
                {[...this.getALphabetLetters()].map((x, i) => (
                        <div className={styles.led} key={i + 1}>
                            <div className={[styles.ledBulb, activeLetter === x ? styles.on : styles.off].join(' ')}>
                                {x}
                            </div>
                        </div>
                    )
                )}
            </div>
        );
    }
}

Led.propTypes = {
    message: PropTypes.string,
    className: PropTypes.string
};

Led.defaultProps = {
    message: '',
    className: ''
};

export default Led;
