import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  state = {
    test: 42,
  };

  asyncFunc = () => {
    return Promise.resolve(2);
  }

  async componentDidMount() {
    this.setState({
      test: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2> Hello Class -- {this.state.test}</h2>
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
);
