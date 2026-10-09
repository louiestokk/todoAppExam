const Button = ({ type, styles, handleClick,text }) => {
  return (
       <button
          type={type}
          className={styles}
          onClick={handleClick}
        >
          {text}
        </button>
  )
}

export default Button