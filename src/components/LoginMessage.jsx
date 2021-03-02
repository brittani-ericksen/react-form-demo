function LoginMessage(props) {
  const { isValid, message } = props;

  return <p className={isValid ? "success" : "error"}>{message}</p>;
}

export default LoginMessage;
