# Структруа проекта :leftwards_arrow_with_hook:

## Архитектура

Учитывая, что в качестве функционала нужно было создать одну страницу, решил выполнить всё в простой модульной архитектуре. Отсюда и пошло название компонентов и отсутствие отдельных директорий, в которых отдельно вынесена логика компонента и его стили.

В идеале, если учитывать дальнейшее развитие, то можно переделать под FSD структуру

## Библиотеки и т.п.

Решил, что в таком задании, использовать сторонние библиотеки будет как-то не очень, т.к. нет нужд для этого

## Просмотр проекта

Решил помимо `npm` скриптов добавить `Docker` с базовой конфигурацией, чтобы разработчики могли запускать проект с разных ОС.

# Настройка проекта (Vue 3 Composition API + TypeScript) :arrow_heading_down:

## Клонирование репозитория

Чтобы клонировать репозиторий к себе, необходимо ввести в терминале команду:
```
git clone git@github.com:Twocram/curves.git
```

## Настройка переменных окружения :bowing_man:

После клонирования репозитория в корневой директории проекта небходимо создать `.env` файл на основне `.env.example`

## Сборка проекта

### С помощью Docker 

Необходимо перейти в корневую директорию проекта и прописать в терминале:
```
docker-compose up --build
```

После того, как проект запустится, необходимо перейти по ссылке [http://localhost:8000/](http://localhost:8000/)

### С помощью npm

Необходимо перейти в корневую директорию проекта и прописать в терминале:
```
npm install
npm run dev
```
После того, как проект запустится, необходимо перейти по ссылке [http://localhost:8000/](http://localhost:8000/)

![frame](./readme-assets/app.png?raw=true 'Запущенное приложение')

### Видео с кратким объяснением :video_camera:
[![Watch the video](./readme-assets/preview.png?raw=true)](https://www.loom.com/share/2145c145d7dd49d587eafb9b22ae3a34)

### Видео с тем, что не реализовал :video_camera:
[![Watch the video](./readme-assets/preview2.png?raw=true)](https://www.loom.com/share/5b8a9852e68c4afcb0e2b48f4601e2df)

### Что не реализовал (в текстовом формате) :fountain_pen:
1. Нет адаптивности (это было опционально)
2. Нет прослушивания аудио. Объясняю: абстрактно, я знаю как это сделать. Необходимо просто создать компонент на основе видео компонента. И суть в том, что api url для видео есть, а для аудио нет. Поэтому сам компонент сделать можно, но он будет неправильно работать. Можно было бы сделать франкенштейна и просто подставлять данные из видео. Но это будет неприятно дебажить и т.п.

Спасибо за прочтение <3