<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>Vinil-Shirt</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/vinil_shirt.css">
    <script type="text/javascript" src="js/products.js" defer=""></script>
  </head>
  <body >
    <header class="gris">
      <div class="container">
        <section  class="row">
          <div id="logo" class="col-md-2 cyan">
            <figure class="">
              <img id="logolg" src="imagenes/logo2.png" >
              <img id="logoxs">
            </figure>
          </div>
          <div class="col-md-10 ">
            <section id="search" >
              <section id="usuario_carrito">
                <figure id="usuario" ></figure>
                <figure id="carrito" ></figure>
                <figure id="triangulo" ></figure>
                <input type="text" class="cyan" id="cuenta_carro" value="0" readonly="readonly"/>
              </section >
                <div id="searchdiv"  class="col-lg-8 col-md-8 col-sm-7 col-xs-7 pull-right">
                    <form action="" method="post" class="navbar-form" role="search">
                    <div class="input-group">
                      <div id="select_search" class=" pull-left">
                        <select class="form-control">
                          <option>Camisetas Chico</option>
                          <option>camiseta chica</option>
                          <option>gorra</option>
                          <option>freak</option>
                          <option>peliculas</option>
                          <option>humor</option>
                        </select>
                      </div>
                      <div >
                      <input id="text_search" type="text" class="form-control" placeholder="Busca tus productos..." name="srch-term" id="srch-term">
                      <!-- boton de busqueda
                      <div class="input-group-btn">
                        <button class="btn btn-primary cyan" name="buscar" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                      </div>
                      -->
                    </div>
                    </div>
                  </form>
                </div>
            </section>
            <section id="producto">
              <nav  id="navegacion" class="navbar navbar-default row ">
                <div class="container-fluid ">
                  <div class="navbar-header ">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-1">
                      <span class="sr-only">Menu</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand "><span class="glyphicon glyphicon-home"></span> Vinil-Shirt</a>
                    <a href="#" class="navbar-brand ">/ Productos</a>
                    <a href="#" class="navbar-brand ">/ Camiseta corta</a>
                  </div>
                </div>
                <div class="collapse navbar-collapse gris row" id="navbar-1">
                  <ul class="nav navbar-nav col-md-12">
                    <li class="nivel1 col-md-4" class="dropdown"><a href="#" class="drpdown-toggle" data-toggle="dropdown" role="button">Diseños <span class="caret"></span></a>
                      <ul class="dropdown-menu gris">
                        <li><a href="#">Música</a></li>
                        <li><a href="#">Deportes</a></li>
                        <li><a href="#">Freak</a></li>
                        <li><a href="#">Video Juegos</a></li>
                        <li><a href="#">Humor</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Retro</a></li>
                        <li><a href="#">Peliculas</a></li>
                      </ul> 
                    </li>
                    <li class="nivel1 col-md-4" class="dropdown"><a href="#" class="drpdown-toggle" data-toggle="dropdown" role="button">Productos <span class="caret"></span></a>
                      <ul class="dropdown-menu gris">
                        <li><a href="#">Camiseta</a></li>
                        <li><a href="#">Camiseta chica</a></li>
                        <li><a href="#">Camiseta corta</a></li>
                        <li><a href="#">musculosa</a></li>
                        <li><a href="#">Gorra plana</a></li>
                        <li><a href="#">Gorra trucker</a></li>
                        <li><a href="#">sudaderas</a></li>
                        <li><a href="#">Tazas</a></li>
                      </ul> 
                    </li>
                    <li class="nivel1 col-md-4"><a href="#" class="drpdown-toggle" data-toggle="dropdown" role="button">Contacto</a></li>
                </ul>
                </div> 
              </nav>
            </section>
          </div>
        </section>
      </div>
    </header>
    <!--seccion de body-->
    <section class="container">
        <div id="lista"></div>
      <!-- banner prueba tus diseños  
      <section id="bannerCamiseta" class="row">
        <header class="col-md-12">
          <h5>Prueba tus propios diseños</h5>
        </header>
        <form action="#">
          <input type="submit" class="cyan boton botongrande" value="Sube tu archivo ahora">
        </form>
      </section>
      -->
      <header>
          <h2>Diseños<span id="wanted"> Mas buscados</span></h2>
      </header>
      <div class="container row">
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="ribbon"><span>OFERTA</span></div>
          <div class="div-img">
              <img class="img" src="imagenes/ch2.jpg" title="starwars" alt="oferta">
              <div class="text_img">Camiseta Chica Stark</div>
              <div class="text_img textprice"><span class="descuento">24.95€ </span>17.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/co3.jpg" title="starwars" alt="oferta">
              <div class="text_img">Camiseta Starwars</div>
              <div class="text_img textprice">24.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="ribbon"><span>OFERTA</span></div>
          <div class="div-img">
              <img class="img" src="imagenes/gp7.jpg" title="starwars" alt="oferta">
              <div class="text_img">Gorra Plana Perdidos</div>
              <div class="text_img textprice"><span class="descuento">19.95€ </span>13.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/sc4.jpg" title="starwars" alt="oferta">
              <div class="text_img">sudadera RastaMan</div>
              <div class="text_img textprice">27.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="ribbon"><span>OFERTA</span></div>
          <div class="div-img">
              <img class="img" src="imagenes/mu3.jpg" title="starwars" alt="oferta">
              <div class="text_img">Musculosa Surf</div>
              <div class="text_img textprice"><span class="descuento">22.95€ </span>19.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/sc1.jpg" title="starwars" alt="oferta">
              <div class="text_img">Sudadera Pulp Fiction</div>
              <div class="text_img textprice">27.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/su2.jpg" title="starwars" alt="oferta">
              <div class="text_img">sudadera retro</div>
              <div class="text_img textprice">23.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="ribbon"><span>OFERTA</span></div>
          <div class="div-img">
              <img class="img" src="imagenes/ta3.jpg" title="starwars" alt="oferta">
              <div class="text_img">Taza heisenberg</div>
              <div class="text_img textprice"><span class="descuento">15.95€ </span>11.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/co2.jpg" title="starwars" alt="oferta">
              <div class="text_img">Camiseta Calavera</div>
              <div class="text_img textprice">17.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/gt7.jpg" title="starwars" alt="oferta">
              <div class="text_img">Gorra Trucker Dember</div>
              <div class="text_img textprice">17.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/co8.jpg" title="starwars" alt="oferta">
              <div class="text_img">camiseta Freak</div>
              <div class="text_img textprice">16.95€</div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3 col-sm-6 col-xs-9 out_margin">
          <div class="div-img">
              <img class="img" src="imagenes/sc2.jpg" title="starwars" alt="oferta">
              <div class="text_img">Sudadera retro</div>
              <div class="text_img textprice">27.95€</div>
          </div>
        </div>
      </div>
      <section id ="bannerEnvio">
        <h2>Envios Gratis</h2>
        <br>
        <article>
          <p>El envío lo realizaremos por correo
          totalmente <span>gratis*</span> </p>
          <p><br>a partir de <span class="dos">2</span> unidades!!</p>
        </article>
        <form action="#" method="post">
          <input type="submit" id="botonenvio" class="cyan boton botongrande" value="Metodos de Envio">
        </form>
      </section>
    </section>
    <!--seccion de footer-->
    <footer class="gris">
      <div class="container gris back">
        <section class="row">
          <div class="col-md-4">
            <article>
              <h2 class="tituo_pie dropdown">
              <a href="#" class="drpdown-toggle tittle_menu" data-toggle="dropdown" role="button">quizas te interese<span class="caret"></span></a>
              <ul id="interes" class="dropdown-menu gris">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Quienes somos?</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Producción de vinilo</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Como lavar la ropa</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Precios gran tirada</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Devoluciones</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Aviso legal</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">+ Privacidad</a></li>
              </ul>
              </h2>
            </article>
            <article>
              <figure id="paypal"></figure>
            </article>
            <div >
              <div class="redes_container">
                <figure class="redes" id="face"></figure>
                <figure class="redes" id="twiter"></figure>
                <figure class="redes" id="google"></figure>
                <figure class="redes" id="linkedin"></figure>
                <figure class="redes" id="insta"></figure>
                <figure class="redes" id="rss"></figure>
                <figure class="redes" id="youtube"></figure>
              </div>
            </div>
          </div>
          <div class="col-md-4 cyan">
            <article>
              <figure id="mapa"></figure>
            </article>
          </div>
          <div class="col-md-4">
            <article>
              <h2 class="tituo_pie">Sobre Vinil Shirt</h2>
              <p>
                ¿Te apasionan las camisetas? 
                Crea, Compra y vende camisetas y 
                muchos mas productos de calidad 
                con lo que te gusta de verdad.
                Con vinil hirt, alimenta tu pasión.
              </p><br>
              <p>
                Producido y enviado desde Madrid
                Mas de 100.000 clientes ya nos
                han dado su confianza.
              </p>
            </article>
          </div>
        </section>
      </div>
    </footer>
    






    <script src="http://code.jquery.com/jquery.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
  </body>
</html>

