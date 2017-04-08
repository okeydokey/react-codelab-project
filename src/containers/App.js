import React, {Component} from 'react';
import { Header } from 'components';

class App extends Component {

    render() {
        let re = /(login|register)/;
        let isAuth = re.test(location.pathname);

        return (
            <div>
                {isAuth ? undefined : <Header/>}
                { this.props.children }
            </div>
        );
    }

}

export default App;