import React, { Component } from "react";
import Header from "./Header.jsx";
import Image from "./Image.jsx";

export default class Content extends Component {
  state = {
    birthColored: false,
    educationColored: false,
    images: [{ id: 0, width: 600, linked: true }],
    nextId: 1,
  };

  // Варіант 2: (2 mod 10) + 1 = 3 — абзац про народження.
  toggleBirth = () => {
    this.setState((state) => ({ birthColored: !state.birthColored }));
  };

  toggleEducation = () => {
    this.setState((state) => ({ educationColored: !state.educationColored }));
  };

  addImage = () => {
    this.setState((state) => ({
      images: [
        ...state.images,
        { id: state.nextId, width: 600, linked: false },
      ],
      nextId: state.nextId + 1,
    }));
  };

  resizeImage = (delta) => {
    this.setState((state) => ({
      images: state.images.map((image, index) =>
        index === state.images.length - 1
          ? { ...image, width: Math.max(50, image.width + delta) }
          : image,
      ),
    }));
  };

  removeImage = () => {
    this.setState((state) => ({ images: state.images.slice(0, -1) }));
  };

  handleKeyboard = (event, callback) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callback();
    }
  };

  render() {
    const { birthColored, educationColored, images } = this.state;

    return (
      <section aria-label="Завдання 1">
        <Header />
        <p
          id="targetElement"
          className={birthColored ? "birth-colored" : ""}
          onClick={this.toggleBirth}
          onKeyDown={(event) => this.handleKeyboard(event, this.toggleBirth)}
          role="button"
          tabIndex={0}
          aria-pressed={birthColored}
        >
          Місце народження: м. Біла Церква, 6 квітня 2007 року.
        </p>
        <p
          className={`next-element ${educationColored ? "education-colored" : ""}`}
          onClick={this.toggleEducation}
          onKeyDown={(event) =>
            this.handleKeyboard(event, this.toggleEducation)
          }
          role="button"
          tabIndex={0}
          aria-pressed={educationColored}
        >
          Освіта: Білоцерківський академічний ліцей «Вектор»-гімназія № 18, м.
          Біла Церква;
          <br />
          Національний технічний університет України «Київський політехнічний
          інститут імені Ігоря Сікорського».
        </p>

        <p>Мої хобі:</p>
        <ul>
          <li>Програмування та веб-дизайн</li>
          <li>Читання романів</li>
          <li>Малювання</li>
          <li>Фотографія</li>
        </ul>

        <p>Улюблені книги:</p>
        <ol>
          <li>«Воно» — Стівен Кінг</li>
          <li>«Норвежський ліс» — Харукі Муракамі</li>
          <li>«Чорний обеліск» — Еріх Марія Ремарк</li>
        </ol>

        <p>
          Нюрнберг (Nuremberg) — старовинне німецьке містечко, яке називають
          батьківщиною баварських пряників та містом іграшок. Місто має давню
          історію: його центральну частину було майже повністю знищено
          бомбардуваннями, саме тут проводили трибунал над нацистськими
          злочинцями , який знали як Нюрнберзький процес, Нюрнберг певний час
          був одним із найважливіших міст Німеччини та її неофіційною столицею.
          В Нюрнберзі можна на кожному кроці побачити неймовірні місця,
          фантастичні пейзажі, величні палаци, старовинні церкви та незабутні
          музеї. Після бомбардувань, фактично всі головні будівлі та
          найважливіші пам’ятки міста відновили. Зараз Нюрнберг — це красиве та
          чарівне місто, в якому гармонійно поєдналась атмосфера давньої
          Німеччини та сучасного європейського міста.
        </p>

        <div id="image-container">
          {images.map((image) => (
            <Image key={image.id} width={image.width} linked={image.linked} />
          ))}
        </div>

        <div className="buttons-container">
          <button type="button" onClick={this.addImage}>
            Додати
          </button>
          <button type="button" onClick={() => this.resizeImage(50)}>
            Збільшити
          </button>
          <button type="button" onClick={() => this.resizeImage(-50)}>
            Зменшити
          </button>
          <button type="button" onClick={this.removeImage}>
            Видалити
          </button>
        </div>
      </section>
    );
  }
}

