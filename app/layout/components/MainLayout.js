import React, { PropTypes } from 'react';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="content">
            <h1>ACME <span className="muted"> INC</span></h1>
          </div>
        </header>
        <div className="content-card">
          { this.props.content }
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  content: PropTypes.object,
};

export default MainLayout;
