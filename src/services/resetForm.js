export const resetForm = (
  accountRef,
  nameRef,
  passwordRef,
  phoneRef,
  emailRef,
  roleRef
) => {
  accountRef.current.value = '';
  nameRef.current.value = '';
  passwordRef.current.value = '';
  phoneRef.current.value = '';
  emailRef.current.value = '';
  roleRef.current.value = '';
};
