import React from 'react';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Like = ({ fontSize, color, ...props }) => (
  <StyledLikeIcon fontSize={fontSize} color={color} {...props} />
);

Like.defaultProps = {
  fontSize: 'inherit',
  color: '#4b4b4b',
}

Like.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
}

const StyledLikeIcon = styled(LikeIcon)`
  color: ${({ color }) => color};
  fontSize: ${({ fontSize }) => fontSize};
`;

export default Like;