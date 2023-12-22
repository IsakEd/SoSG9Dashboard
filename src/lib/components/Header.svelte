<!-- Header.svelte -->

<header>
  <span style="font-size: larger;">S</span><span>A</span><span
    style="font-size: larger;"
    >RCOM:
  </span>
  <span style="font-size: larger;">S</span><span>earch and </span><span
    style="font-size: larger;">R</span
  ><span>escue </span>
  <span style="font-size: larger;">C</span><span>ommand </span>
  <span style="font-size: larger;">O</span><span>perations </span>
  <span style="font-size: larger;">M</span><span>anager</span>
</header>

<style>
  @font-face {
    font-family: "Amaru";
    font-style: normal;
    font-weight: 400;
    src: local("Amaru"), url("/amarurgt.ttf"), format("ttf");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  span {
    display: inline;
    font-family: "Amaru", sans-serif;
    color: darkgreen;
  }

  header {
    background-color: #bdbdbd;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
</style>
