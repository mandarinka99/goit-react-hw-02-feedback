import PropTypes from 'prop-types';
import s from "./Notifications.module.css";

const Notifications = ({message}) => {
  return (
    <p className={s.notoficationTitle}>{message}</p>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notifications;