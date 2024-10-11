import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const BoundedContainer = ({
  children,
  maxWidth,
  padding,
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
  marginTop,
  marginBottom,
}) => {
  return (
    <S.Container
      maxWidth={maxWidth}
      padding={padding}
      marginTop={marginTop}
      marginBottom={marginBottom}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      {children}
    </S.Container>
  );
};

// PropTypes for added flexibility
BoundedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  boxShadow: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

export default BoundedContainer;
