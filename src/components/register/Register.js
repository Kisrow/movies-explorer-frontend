import PageWithForm from '../page-with-form/PageWithForm';

function Register() {
  return (
    <PageWithForm
      title = "Добро пожаловать!"
      submitFormDescription = "Зарегистрироваться"
      linkLegend = "Уже зарегистрированы?"
      linkText = "Войти"
      linkUrl = "/login"
    />
  );
}

export default Register;