import EditImg from '../../assets/todo-title-edit-button.svg'

type EditBtnType = {
  onClick?: () => void
  isSubmit?: boolean
  cy: string
}

const EditBtn: React.FC<EditBtnType> = (props) => {
  return (
    <button
      type={props.isSubmit ? 'submit' : 'button'}
      data-cy={props.cy}
      onClick={props.onClick}
    >
      <img src={EditImg} alt='edit' />
    </button>
  )
}

export default EditBtn
