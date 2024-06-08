import {StyledImage} from './style'

interface ImageProps {
    src: string;
    alt: string;
    width?: number
  }

export default function Image({src, alt, width} : ImageProps) {
    return <StyledImage src={src} alt={alt} width={`${width}px`} />
}