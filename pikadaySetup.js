document.addEventListener('DOMContentLoaded', () => {
  // Создаем датапикер для поля ввода даты отправления
  const departInput = document.getElementById('depart-date');
  const departPicker = new Pikaday({
    field: departInput,
    format: 'D M YYYY', // Указываем формат даты
    minDate: new Date(), // Устанавливаем минимальную дату
    toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
    // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    },

  });

  // Добавляем обработчик клика на иконку календаря для поля ввода даты отправления
  const departCalendar = document.getElementById('depart-calendar');
  departCalendar.addEventListener('click', () => {
    departPicker.show(); // Показываем датапикер при клике на календарь отправления
  });

  // Создаем датапикер для поля ввода даты возврата
  const returnInput = document.getElementById('return-date');
  const returnPicker = new Pikaday({
    field: returnInput,
    format: 'D M YYYY', // Указываем формат даты
    minDate: new Date(),
    toString(date, format) {
    // you should do formatting based on the passed format,
    // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
    // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    },
    // Устанавливаем минимальную дату
  });

  // Добавляем обработчик клика на иконку календаря для поля ввода даты возврата
  const returnCalendar = document.getElementById('return-calendar');
  returnCalendar.addEventListener('click', () => {
    returnPicker.show(); // Показываем датапикер при клике на календарь возврата
  });
});
