import PageWithForm from '../page-with-form/PageWithForm';

function Login({
  login,
}) {
  return (
    <PageWithForm
      title = "Рады видеть!"
      submitFormDescription = "Войти"
      linkLegend = "Ещё не зарегистрированы?"
      linkText = "Регистрация"
      linkUrl = "/register"
      formSubmit = {login}
    />
  );
}

export default Login;