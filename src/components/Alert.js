import { ALERT_TYPE } from "../utils/helper";

export const Alert = ({ notification }) => {
  // Constants
  const { type, title, desc } = notification;
  const typeClassMap = {
    [ALERT_TYPE.NONE]: "",
    [ALERT_TYPE.ERROR]: "error_alert",
    [ALERT_TYPE.WARNING]: "warning_alert",
    [ALERT_TYPE.SUCCESS]: "success_alert",
  };

  // Template
  return (
    <div className={`alert_container flex-box ${typeClassMap[type]}`}>
      <div>
        {title && <div className="font-bold">{title}</div>}
        {desc && <div>{desc}</div>}
      </div>
    </div>
  );
};
