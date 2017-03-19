import React, {Component, PropTypes} from 'react';

import styles from './styles/App.scss';
import Led from './Led';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: props.message};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({message: event.target.value.toUpperCase()});
    }

    handleClick() {
        this.state.message.length > 0 ? this.refs.ledContainer.translateMessage():this.refs.message.focus();
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {this.handleClick()}
    }

    render() {
        return (
            <div className={styles.container}>

                <main id="main" className={styles.main}>
                    <div className={styles.inputArea}>
                        <header><img src="../assets/logo.png" alt=""/></header>
                        <div>
                            <input type="text" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} ref="message" placeholder="Message"/>
                            <button className={styles.btn} onClick={this.handleClick}>Translate</button>
                        </div>
                    </div>
                    <Led message={this.state.message} ref="ledContainer" className={styles.messageArea}></Led>
                </main>
            </div>
        );
    }
}

App.propTypes = {
    message: PropTypes.string
};

App.defaultProps = {
    message: ''
};

export default App;
