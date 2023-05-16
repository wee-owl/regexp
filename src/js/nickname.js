export default class Validator {
  static validateUsername(name) {
    // латинские буквы, подчеркивание и тире
    const latinAndDash = /[\w-]+/i.test(name);
    // кириллические символы
    const cyrillic = /[а-яё]+/i.test(name);
    // от четырех цифр и более
    const moreFourDigits = /[\d{4,}]/.test(name);
    // не начинаться цифрами, подчеркиванием, тире
    const noDigitsStart = /^[^\d_-]/.test(name);
    // не заканчиваться цифрами, подчеркиванием, тире
    const noDigitsEnd = /[^\d_-]$/.test(name);
    // запрет пробелов
    const noGap = /[^\s]/.test(name);

    if (noDigitsStart && latinAndDash && !cyrillic
      && !moreFourDigits && noDigitsEnd && noGap) {
      return name;
    }
    throw new Error('Invalid name value');
  }
}
