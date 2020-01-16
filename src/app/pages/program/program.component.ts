import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
  language: string;
  programa = [
    {
      date: 'Четвер, 12.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    },
    {
      date: 'П\'ятниця, 13.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    },
    {
      date: 'Субота, 14.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    }
  ];
  program = [
    {
      date: 'Thursday, 12.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    },
    {
      date: 'Friday, 13.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    },
    {
      date: 'Saturday, 14.04',
      time: '19.00',
      title: 'Відкриття Фестивалю. Концерт "Нова/Стара класика"',
      location: 'Театр "Гершом", Завод РЕМА (вул. Заводська, 31)',
      pieces: [
        'Янніс Ксенакіс (GR-FR) "Concrete PH" для плівки (1958)',
        'П’єр Шеффер (FR) “Presentation de Concert du Bruits” (1948) **',
        'П’єр Анрі (FR) “Le Voile D\'Orphée”(фраґмент) для плівки (1953)',
        // tslint:disable-next-line:max-line-length
        'Мартін Шюттлєр “Das Mitleid ist die Geißel der Menschheit, Sheriff” для касетного магнетофону та чотирьохканального запису (2008) **',
        'П’єр Шеффер (FR) “Etude aus Objets” для плівки (1959) **',
        'Джон Кейдж (US) “Living Room Music” для чотирьох неозначених інструментів (1940) **'
      ],
      performers: [
        'Виконавці: колектив “impreesem” в складі: Любомир Волянюк, Остап Мануляк, Назар Скрипник, Микола Хшановський'
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
