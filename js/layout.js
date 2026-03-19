document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

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
      

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <div class="sidebar-section">
          <nav>
            <div class="sidebar-title">
            <ul>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/more-about-me.html">More about me</a></li>
            <li>
            </div>
          </nav>
        </div>
        
        
        <div class="sidebar-section">
          <div class="sidebar-title">Quote</div>
          <blockquote>
            <p>"Boop" - by Me</p>
          </blockquote>
        </div>
                      
        
        <div class="sidebar-section">
          <div class="sidebar-title">Links</div>
          <div class="site-button">
          	<a href="https://github.com/KitsuneNoMegami"><img src="/images/buttonrepositoy.gif" alt="buttonrepository"></a>
          </div>
        </div>
          <marquee>
          	<img src="/images/stamps/nomnomnom.gif" alt="nomnomnom">
          	<img src="/images/stamps/rawr.gif" alt="rawr">
          	<img src="/images/stamps/clubpenguin.jpg" alt="clubpenguin">
          	<img src="/images/stamps/computeralive.png" alt="computeralive">
          	<img src="/images/stamps/ragequit.gif" alt="ragequit">
          	<img src="/images/stamps/bubble.gif" alt="bubble">
          	<img src="/images/stamps/rainbow.gif" alt="rainbow">
          </marquee>
      </aside>
	
      `;
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
            <a href="https://wobble.town/visit/3126"><img src="https://wobble.town/visit/3126/wobble.gif"></a>
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
