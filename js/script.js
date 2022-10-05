/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll(".promo__adv img"),
        background = document.querySelector(".promo__bg"),
        genre = background.firstElementChild,
        filmsList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, filmsList);
        }

        event.target.reset();  // addForm.reset();
        
    });

    const deleteAdv = (arr) => {
        arr.forEach(function (element) {
            element.remove();
        });
    };

    const makeChenges = () => {
        genre.textContent = "драма";

        background.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">
                ${i + 1}. ${film}
                    <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent);
            });
        });
        
    }

    deleteAdv (adv);
    makeChenges();
    createMovieList(movieDB.movies, filmsList);

});





































// filmsList.forEach((film) => {
//     console.log(film);
// });


// console.log(movieDB.length);
// console.log(films);

// films.innerHTML = "";

// for (let i = 0; i < films.length; i++) {
//     films[i].innerHTML = "";
//     films[i].innerHTML = `${i+1}. ${movieDB.movies.sort()[i]}`;
// };

// films.forEach((film, i) => {
//     film.innerHTML = "";
//     film.innerHTML = `${i + 1}. ${movieDB.movies[i]}
//                         <div class="delete"></div>`;
// });



// const adv = document.querySelectorAll(".promo__adv img"),
//       poster = document.querySelector(".promo__bg"),
//       genre = poster.querySelector(".promo__genre"),
//       movieList = document.querySelector(".promo__interactive-list");



// // === 1 ===
// adv.forEach(elm => elm.remove());
// // adv.forEach(function (item) {
// //     item.remove();
// // });

// // === 2 ===
// genre.textContent = "драма";

// // === 3 ===
// poster.style.backgroundImage = "url('img/bg.jpg')";

// // === 4 ===
// movieList.innerHTML = "";

// movieDB.movies.sort();

// console.log(poster.innerHTML);

// movieDB.movies.forEach((film, i) => {
//      movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1}. ${ film }
//             <div class="delete"></div>
//         </li>
//      `;
// });




