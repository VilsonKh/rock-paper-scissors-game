import classes from "./RulesModal.module.scss";
import rulesImg from "../images/image-rules-bonus.svg";

const RulesModal = ({setModal}: {setModal: (value: boolean) => void}) => {
  return (
    <div className={classes.modal} onClick={() => setModal(false)}>
      <div className={classes.modal__content}>
        <button className={classes.modal__close}></button>
        <p className={classes.modal__title}>RULES</p>
        <img src={rulesImg} alt="rules" />
      </div>
    </div>
  )
}

export default RulesModal