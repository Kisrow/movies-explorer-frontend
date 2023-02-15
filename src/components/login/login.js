import PageWithForm from '../page-with-form/PageWithForm';

function Login() {
  return (
    <PageWithForm
      title = "Рады видеть!"
      submitFormDescription = "Войти"
      linkLegend = "Ещё не зарегистрированы?"
      linkText = "Регистрация"
      linkUrl = "/register"
    />
  );
}

export default Login;