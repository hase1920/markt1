import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import A from './A'
import Ol from './Ol'
import Ul from './Ul'
import Code from './Code'
import Image from './Image'
export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  p: props => <Paragraph {...props} />,
  a : props => <A {...props} />,
  ul : props => <Ul {...props} />,
  ol : props => <Ol {...props} />,
  img: props => <Image {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
}
