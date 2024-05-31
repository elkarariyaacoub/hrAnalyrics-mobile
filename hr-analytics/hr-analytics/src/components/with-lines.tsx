import { Fragment, FC } from'react'
import useIsLandscape from '@/hooks/useIsLandscape'

interface props {
  text: string
}
const WithLines: FC<props> = ({ text }) => {

  const isLandscape = useIsLandscape()

  return text.split('\n').map((item, index) => (
      <Fragment key={index}>
        {item}
        {index < text.split('\n').length - 1 && (isLandscape ? ' ' : <br/>)}
      </Fragment>
    )
  )
}

export default WithLines