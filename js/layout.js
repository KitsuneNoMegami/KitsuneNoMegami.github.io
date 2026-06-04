document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      const icon = question.querySelector(".icon");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "-";
      }
    });
  });


});




document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

document.addEventListener('wheel', gererEvenementDeDefilement, { passive: false });

function gererEvenementDeDefilement(event) {
  // Vérifie si l'utilisateur est en haut de la page et tente de défiler vers le haut.
  // window.scrollY === 0 : Cela signifie que la page est déjà tout en haut.
  // event.deltaY < 0 : L'utilisateur essaie de défiler vers le haut.

  // Vérifie si l'utilisateur est en bas de la page et tente de défiler vers le bas.
  // window.innerHeight + window.scrollY : La position actuelle en bas de la fenêtre visible.
  // document.body.offsetHeight : La hauteur totale du contenu de la page.
  // Ces deux valeurs égales ou supérieures indiquent qu'on est au bas de la page.
  if ((window.scrollY === 0 && event.deltaY < 0) || (window.innerHeight + window.scrollY >= document.body.offsetHeight && event.deltaY > 0)) {
    // Empêche le comportement de défilement par défaut dans ces cas précis.
    event.preventDefault();
  }
}


function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->
      <header>
        <img src="/images/gif/name.gif" name="websiteTitle" id="websiteTitle" align="left">
      </header>
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <div class="sidebar-section">
          <div class="sidebar-title">Navigation</div>
          <nav>
            <ul>
              <li>
                <li><a href="/index.html" id="nav-title">Home</a></li>
                <li><a href="/pages/more-about-me.html" id="nav-title">More about me</a></li>
                <details data-id="Hobbies">
                  <summary>Hobbies</summary>
                  <ul>
                      <li><a href="/pages/creations.html">Crochet</a></li>
                      <li><a href="/pages/pokemon.html">Pokemon</a></li>
                      <li><a href="/pages/picrew.html">Picrew</a></li>
                  </ul>
                </details>
                <details data-id="Website">
                  <summary>Website</summary>
                  <ul>
                      <li><a href="/pages/resources.html">Resources</a></li>
                      <li><a href="/pages/surprise.html">Guestbook</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </nav>
          </div>
        </div>
        
        <div class="sidebar-section">
          <div class="sidebar-title">Quote</div>
          <blockquote id="quote">
          </blockquote>
        </div>

        <div class="sidebar-section"> 
          <div class="sidebar-title">My time</div>
          <iframe src="https://free.timeanddate.com/clock/iac6mi2d/n195/tlfr2/fn6/fcf9ebe0/tct/pct/ta1" frameborder="0" width="170" height="22" allowtransparency="true"></iframe>
        </div>  
             
        
        <div class="sidebar-section">
          <div class="sidebar-title">Links</div>
          <div class="site-button">
          	<div><a href="https://github.com/KitsuneNoMegami"><img src="/images/buttonrepositoy.gif" alt="buttonrepository"></a></div>
            <div><a href="https://boxd.it/bOZFp"><img src="/images/letterboxd.gif"  alt="buttonletterboxd"></a></div>
          </div>
        </div>
        
        <marquee>
          <img src="/images/stamps/nomnomnom.gif" alt="nomnomnom">
          <img src="/images/stamps/cherryblossom.png" alt="cherryblossom">
          <img src="/images/stamps/clubpenguin.jpg" alt="clubpenguin">
          <img src="/images/stamps/rawr.gif" alt="rawr">
          <img src="/images/stamps/cows.png" alt="cows">
          <img src="/images/stamps/mms.gif" alt="mms">
          <img src="/images/stamps/computeralive.png" alt="computeralive">
          <img src="/images/stamps/ragequit.gif" alt="ragequit">
          <img src="/images/stamps/sol.png" alt="sol">
          <img src="/images/stamps/bubble.gif" alt="bubble">
          <img src="/images/stamps/rainbow.gif" alt="rainbow">
          <img src="/images/stamps/cheese.gif" alt="cheese">
          <img src="/images/stamps/sleepwithplushies.png" alt="sleepwithplushies">
          <img src="/images/stamps/papercut.gif" alt="papercut">
          <img src="/images/stamps/leftportail.png" alt="leftportail">
          <img src="/images/stamps/rightportal.png" alt="rightportal">
          <img src="/images/stamps/stamponfire.gif" alt="stamponfire">
          <img src="/images/stamps/wiggly.png" alt="wiggly">
        </marquee> 
      </aside>
      <aside class="right-sidebar"></aside>`;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>
            <p><img src="/images/gif/noAI.gif"></br>
            © 2025 Beth, all rights reserved ♡</p>
            </div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    /* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}

// QUOTE
document.addEventListener(
  'DOMContentLoaded',
  async () => {
    const quotesList = await (await fetch('/quotes.json')).json();
    document.getElementById("quote").innerHTML = quotesList[Math.floor(Math.random() * quotesList.length)];
  }
);

//CommentBox
if (!window.hcb_user) { hcb_user = {}; }
(function () {
  var s = document.createElement("script"),
    l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"),
    h = "https://www.htmlcommentbox.com";
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&mod=%241%24wq1rdBcg%24NACPueU.r0OSn70BUBG0K1" + "&opts=16798&num=10&ts=1779454163371");
  if (typeof s != "undefined") document.getElementsByTagName("head")[0].appendChild(s);
})();
