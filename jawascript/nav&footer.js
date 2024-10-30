let nav= document.getElementById("nav");
let foot=document.getElementById("fotter")
let navbar;
let footer;
navbar=`<nav class="navbar navbar-expand-lg bg-light-orange" style="background-color:#ec7430 ;">
    <div class="container-fluid">
      <img src="./images/logo-top.png" alt="logo img " class="m-auto" id="logo-img" style="height: 3rem;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav m-auto fw-bolder">
          <a class="nav-link active"  href="./contact.html">Home</a>
          
          <a class="nav-link active" href="./staff.html">Staff</a>
          <a class="nav-link active" href="./gallery.html">Gallery</a>
          <a class="nav-link active" href="./contact.html">ContactUS</a>
        </div>
      </div>
    </div>
  </nav>`
  footer=`<footer class="py-5 text-white" style="background-color: #ec7430;" >
    <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4 mb-3">
        <img src="./images/logo-bottom.png" alt="logo img "  class="img-fluid">
      </div>

      <div class="col-sm-6 col-md-2 mb-3">
        <h5>Quick Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="./contact.html" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="./staff.html" class="nav-link p-0 text-body-secondary">Staff</a></li>
          <li class="nav-item mb-2"><a href="./gallery.html" class="nav-link p-0 text-body-secondary">Gallery</a></li>
         
        </ul>
      </div>

      <div class="col-sm-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="./contact.html" class="nav-link p-0 text-body-secondary">Contact</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        </ul>
      </div>

      <div class="col-md-3 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn " type="button" style="backgroumd-color:#ff4400;">Subscribe</button>
          </div>
        </form>
      </div>
      </div>
    </div>

   
  </footer>`
foot.innerHTML= footer;
 nav.innerHTML= navbar;