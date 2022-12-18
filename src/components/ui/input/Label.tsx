type LabelType = {
  text: string
  className?: string
  cy: string
}

const Label: React.FC<LabelType> = (props) => {
  return (
    <label
      data-cy={props.cy}
      className={`font-semibold text-xs text-black-dev uppercase`}
    >
      {props.text}
    </label>
  )
}

export default Label
