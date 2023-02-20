import PageWithForm from '../page-with-form/PageWithForm';

function Register({
  register,
}) {
  return (
    <PageWithForm
      title = "Добро пожаловать!"
      submitFormDescription = "Зарегистрироваться"
      linkLegend = "Уже зарегистрированы?"
      linkText = "Войти"
      linkUrl = "/login"
      formSubmit = {register}
    />
  );
}

export default Register;