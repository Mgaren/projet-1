<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta author = "Aurélie Fauquet, Maxime Bouet, Leo Brossillion, Maxime Auneau">
    <meta name="Description" content="Une histoire, un lieu, une visite !">
    <meta name="keywords" content="Visite, Tours, Guide">
    <link href="histoire.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="script.js"></script>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">    <title>Vision Tours</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Document</title>
</head>
<body>
  <header id="header" class="header">
    <a href="index.html"><img src="../images/logo2.png" class="logo" alt="logo" width="100" height="81" ></a>
    <a href="javascript:void(0);" class="icon" id="icon" onclick="topMenu()">
      <div class="container" id="button-menu" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div> 
    </a>
    <nav class="menu" id="menu">
        <a href="histoire.html" class="item">Histoire</a>
        <a href="visite.html"class="item">Visites</a>
        <a href="activité.html"class="item">Activités</a>
        <a href="adresse.html"class="item">Adresses</a>
        <a href="contact.html"class="item">Contact</a>
    </nav>
      <script>


function topMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Open */
function openNav() {
  document.getElementById("menu").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("menu").style.height = "0%";
} 

function myFunction(x) {
  x.classList.toggle("change");
} 
      </script>
      </header>



<section id="timeline">
  
  <div class="tl-item">
    
    <div class="tl-bg" style="background-image: url(https://placeimg.com/801/801/nature)"></div>
    
    <div class="tl-year">
      <p class="f2 heading--sanSerif">2011</p>
    </div>

    <div class="tl-content">
      <h1>Lorem ipsum dolor sit</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>

  </div>

  <div class="tl-item">
    
    <div class="tl-bg" style="background-image: url(https://placeimg.com/802/802/nature)"></div>
    
    <div class="tl-year">
      <p class="f2 heading--sanSerif">2013</p>
    </div>

    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
      <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
    </div>

  </div>

  <div class="tl-item">
    
    <div class="tl-bg" style="background-image: url(https://placeimg.com/803/803/nature)"></div>
    
    <div class="tl-year">
      <p class="f2 heading--sanSerif">2014</p>
    </div>

    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Phasellus mauris elit</h1>
      <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
    </div>

  </div>

  <div class="tl-item">
    
    <div class="tl-bg" style="background-image: url(https://placeimg.com/800/800/nature)"></div>
    
    <div class="tl-year">
      <p class="f2 heading--sanSerif">2016</p>
    </div>

    <div class="tl-content">
      <h1 class="f3 text--accent ttu">Mauris vitae nunc elem</h1>
      <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
    </div>

  </div>
</section>