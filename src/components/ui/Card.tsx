type CardType = {
  children: React.ReactNode
  cy: string
  className?: string
}

const Card: React.FC<CardType> = (props) => {
  return (
    <div
      data-cy={props.cy}
      className={`rounded-xl bg-white shadow-devcode-2 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  )
}

export default Card
