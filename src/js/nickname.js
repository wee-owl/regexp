export default class Validator {
  static validateUsername(name) {
    // можно латинские буквы, подчеркивание, тире, цифры (не более трёх)
    // const one = /[\w-][^\d{4,}]/;
    // нельзя: начинаться цифрами и символами подчёркивания или тире
    // const two = /^[^\d\-_\s]/;
    // нельзя: заканчиваться цифрами и символами подчёркивания или тире
    // const three = /[^\d\-_\s]$/;
    // дополнительно: нельзя перевод строки, табуляцию, пробелы [^\s]

    const pattern = /^[^\d\-_\s]([\w-][^\d{4,}])+[^\d\-_\s]$/ig;

    const regex = new RegExp(pattern);

    if (!regex.test(name)) {
      throw new Error('Invalid name value');
    }

    return name;
  }
}
