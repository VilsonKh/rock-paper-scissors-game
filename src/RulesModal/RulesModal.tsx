import classes from "./RulesModal.module.scss";
import "./Rules.css"

const RulesModal = ({setModal}: {setModal: (value: boolean) => void}) => {
  return (
    <div className={classes.modal} onClick={() => setModal(false)}>
      <div className={classes.modal__content}>
        <button className="rules__close"></button>
        <p className={classes.modal__title}>RULES</p>
        <img src="./images/image-rules-bonus.svg" alt="rules" />
      </div>
    </div>
  )
}

export default RulesModal