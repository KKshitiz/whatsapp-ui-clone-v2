const ConnectivityNotification = () => {
  return (
    <div className="connectivity-notification">
      <img src="icons/warning.svg" alt="Offline warning" />
      <div>
        <div className="connectivity-notification-title">
          Computer not connected
        </div>
        <span>Make sure your computer has an active Internet connection</span>
      </div>
    </div>
  );
};
export default ConnectivityNotification;
