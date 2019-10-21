/** @jsx jsx */
import { jsx } from '@emotion/core';
import Image from 'components/Image/Image';
import { colors } from 'style';

const ImageWithOverlay = ({ url, showOverlay, onMouseEnter = () => {}, onMouseLeave = () => {}, buttonText, ...props }) => (
  <div css={{ containerStyles, ...props }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <Image url={url} width="100%" height="100%" />
    {showOverlay && (
      <div css={overlayStyles}>
        {/* TODO: use button comp instead */}
        <button css={buttonStyles}>{buttonText}</button>
      </div>
    )}
  </div>
);

const containerStyles = {
  position: 'relative',
}

const overlayStyles = {
  position: 'absolute',
  marginTop: '-174px',
  width: '200px',
  height: '170px',
  color: '#FFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.overlayGray,
}

const buttonStyles = {
  padding: '10px',
  color: colors.white,
  border: `1px solid ${colors.white}`,
  background: 'transparent',
}

export default ImageWithOverlay