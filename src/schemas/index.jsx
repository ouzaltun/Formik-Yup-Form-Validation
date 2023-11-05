import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
export const basicsSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required('"Email girmek zorunludur."'),
  age: yup
    .number()
    .positive('"Lütfen geçerli yaş giriniz."')
    .integer("Lütfen doğru bir yaş giriniz.")
    .required('"Yaş girmek zorunludur."'),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz.")
    .matches(passwordRules, {
      message: "Lütfen 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girmek zorunludur."),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Tekrar şifre girmek zorunludur."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı mininmum 3 karakter olmalıdır.")
    .required("Lütfen kullanıcı adını giriniz."),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtü", "itü"], "Lütfen üniversitenizi seçin.")
    .required("Lütfen üniversitenizi seçin."),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz."),
});
