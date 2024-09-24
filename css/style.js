
body {
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 1rem;
  color: var(--color-white);
  background-color: var(--color-bg);
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  position: relative;
}

.scroll-stop {
  overflow: hidden;
}

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image:
    -o-linear-gradient(white 1px, transparent 1px),
    -o-linear-gradient(left, white 1px, transparent 1px),
    -o-linear-gradient(top, rgba(255, 255, 255, 0.1) 0%, rgb(255, 255, 255, 1) 80%);
}

.wrapper::before {
  content: '';
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: -o-radial-gradient(circle, var(--color-blue) 0%, var(--color-bg) 50%);
  background: radial-gradient(circle at top, var(--color-blue) 0%, var(--color-bg) 80%);
  opacity: 0.3;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1280px;
}

.btn {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
}

.choices {
  min-width: 60%;  
 overflow: visible;
}

.choices.is-focused.is-open > .choices__inner {
  border: 1px solid var(--color-second);
}

.choices__inner {
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: var(--color-white);
  outline: none;
  border: 1px solid var(--color-blue);
  font-size: 18px;
}

.choices__list.choices__list--dropdown.is-active {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid transparent;
  background-color: var(--color-bg);
  width: 100%;
  max-height: 150px;
  overflow: auto;
}

.choices__list--dropdown .choices__item,
.choices__list[aria-expanded] .choices__item {
  font-size: 18px;
}

.choices__item.choices__item--choice.choices__item--selectable.is-highlighted {
  background-color: transparent;
  color: var(--color-second);
}

.choices__item.choices__item--choice.choices__item--selectable.is-highlighted::after {
  display: none;
}
