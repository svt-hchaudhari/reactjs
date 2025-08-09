import React from 'react';

const H1Component = ({ children, className }) => {
  if (!children) {
    throw new Error('H1Component requires a child element');
  }

  return (
    <h1
      className={className}
      onClick={(e) => console.log('H1Component clicked')}
    >
      {children}
    </h1>
  );
};

H1Component.defaultProps = {
  className: '',
};

H1Component.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default H1Component;