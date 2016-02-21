--
-- Base de datos: `vinilajax`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(24) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img` varchar(20) NOT NULL,
  `descount` tinyint(1) NOT NULL DEFAULT '0',
  `descrip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `img`, `descount`, `descrip`) VALUES
(1, 'Camiseta chica Stark', '19.95', 'ch2.jpg', 1, 'camiseta chica manga corta con logo casa Stark de Juego de Tronos'),
(2, 'Camiseta Starwars', '18.95', 'co3.jpg', 0, 'camiseta manga corta Starwars con diseño transporte acorazado todo terreno'),
(3, 'Gorra plana perdidos', '19.00', 'gp7.jpg', 0, 'Gorra plana de un color con logo serie perdidos'),
(4, 'Sudadera Rastaman', '27.00', 'sc4.jpg', 0, 'Sudadera standar con logo rastafari leon de judea'),
(5, 'Musculosa Surf', '17.95', 'mu3.jpg', 1, 'Camiseta musculosa con logo surfer'),
(6, 'Sudadera Pulp Fiction', '27.95', 'sc1.jpg', 0, 'Sudadera con capucha edicion Tarantino'),
(7, 'Sudadera retro', '23.00', 'su2.jpg', 0, 'Sudadera clasica para los amantes de juegos de arcade, logo Space Invaders'),
(8, 'Taza heisenberg', '10.95', 'ta3.jpg', 1, 'Taza blsncs de serie Braking Bad '),
(9, 'Camiseta calavera', '21.95', 'co2.jpg', 0, 'Camiseta calavera sigue tu musica'),
(10, 'Gorra trucker Dember', '20.95', 'gt7.jpg', 0, 'Gorra 2 colores trucker con logo de Futurama'),
(11, 'Camiseta freak', '21.95', 'co8.jpg', 0, 'Camiseta freak informatico'),
(12, 'Sudadera retro rubik', '22.95', 'sc2.jpg', 1, 'sudadera con cubo de rubik clasica con capucha');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
