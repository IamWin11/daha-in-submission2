class mainApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<section class="home">
      <div class="home-text">
        <h5>Ayo</h5>
        <h1>Dahar-in <br> App</h1>
        <h5>Haus? Laper?<br> Daharin aja sekarang</h5>
        <button class="btn">Lanjut lah</button>
      </div>
    </section>

    <section class="about">
      <div class="about_img">
        <img src="#" alt="#">
      </div>

      <div class="about_text">
        <h5>Dahar-in</h5>
        <h2>Kamu Harus Tau..</h2>
        <p>Di Dahar-in, kami percaya bahwa makanan adalah lebih dari sekadar kebutuhan dasar—ini adalah seni, 
          tradisi, dan pengalaman yang menyatukan kita. Terletak di jantung kota, 
          restoran kami hadir untuk menyajikan hidangan yang tidak hanya memanjakan lidah, 
          tetapi juga membawa kenangan dan kebahagiaan.</p>
          <button class="btn">Yuk Lihat</button>
      </div>
    </section>`;
  }
}

customElements.define('main-app', mainApp);
