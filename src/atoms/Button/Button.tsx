import * as S from './styles'

export interface ButtonProps {
  children: React.ReactNode
}

export function Button(props: ButtonProps) {
  const onButtonClick = () => console.log('clicked')

  return <S.Button onClick={onButtonClick}>{props.children}</S.Button>
}

Button.displayName = 'Button'
