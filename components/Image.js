import NextImage from 'next/image'
import siteMetadata from '@/data/siteMetadata'

// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ ...rest }) => <NextImage {...rest} />

export default Image

export const S3Image = ({ ...rest }) => {
  const new_rest = {
    ...rest,
    src: siteMetadata.s3BucketUrl + rest.src,
  }

  return <img {...new_rest} style={{ maxWidth: '100%', height: 'auto' }} />
}
