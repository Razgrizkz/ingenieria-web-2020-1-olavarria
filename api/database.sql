-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3308
-- Tiempo de generación: 12-07-2020 a las 03:50:22
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database`
--
CREATE DATABASE IF NOT EXISTS `database` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `database`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `idCategoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `categoria`
--

TRUNCATE TABLE `categoria`;
--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `titulo`) VALUES
(1, 'Historia'),
(2, 'Artes & Fotografía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

DROP TABLE IF EXISTS `comentario`;
CREATE TABLE IF NOT EXISTS `comentario` (
  `idComentario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `calificacion` int(11) NOT NULL,
  `comentario` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
  `publicadoen` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idUsuario` int(10) UNSIGNED DEFAULT NULL,
  `idProducto` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `us` (`idUsuario`),
  KEY `pr` (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `comentario`
--

TRUNCATE TABLE `comentario`;
--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`idComentario`, `calificacion`, `comentario`, `publicadoen`, `idUsuario`, `idProducto`, `nombre`) VALUES
(1, 3, 'Recomendado!', '2020-07-11 19:34:59', NULL, 2, 'Anónimo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `elementocarro`
--

DROP TABLE IF EXISTS `elementocarro`;
CREATE TABLE IF NOT EXISTS `elementocarro` (
  `idElementoCarro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cantidad` int(10) UNSIGNED NOT NULL,
  `agregadoen` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `idProducto` int(10) UNSIGNED NOT NULL,
  `idUsuario` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`idElementoCarro`),
  KEY `usuario` (`idUsuario`),
  KEY `producto` (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `elementocarro`
--

TRUNCATE TABLE `elementocarro`;
--
-- Volcado de datos para la tabla `elementocarro`
--

INSERT INTO `elementocarro` (`idElementoCarro`, `cantidad`, `agregadoen`, `idProducto`, `idUsuario`) VALUES
(30, 3, '2020-07-11 23:49:43', 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordencarro`
--

DROP TABLE IF EXISTS `ordencarro`;
CREATE TABLE IF NOT EXISTS `ordencarro` (
  `idElementoCarro` int(10) UNSIGNED NOT NULL,
  `idOrden` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`idElementoCarro`,`idOrden`) USING BTREE,
  KEY `ord` (`idOrden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `ordencarro`
--

TRUNCATE TABLE `ordencarro`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordencompra`
--

DROP TABLE IF EXISTS `ordencompra`;
CREATE TABLE IF NOT EXISTS `ordencompra` (
  `idOrdenCompra` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `costoenvio` int(11) NOT NULL,
  `comprado` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipodepago` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `notas` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
  PRIMARY KEY (`idOrdenCompra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `ordencompra`
--

TRUNCATE TABLE `ordencompra`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `idProducto` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci,
  `calificacion` float DEFAULT '0',
  `imagen` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `autor` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `peso` float NOT NULL COMMENT 'kg',
  `idCategoria` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `categor` (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `producto`
--

TRUNCATE TABLE `producto`;
--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `titulo`, `stock`, `descripcion`, `calificacion`, `imagen`, `autor`, `precio`, `descuento`, `peso`, `idCategoria`) VALUES
(1, 'Hamilton: The Revolution', 20, 'Lin-Manuel Miranda\'s groundbreaking musical Hamilton is as revolutionary as its subject, the poor kid from the Caribbean who fought the British, defended the Constitution, and helped to found the United States. Fusing hip-hop, pop, R&B, and the best traditions of theater, this once-in-a-generation show broadens the sound of Broadway, reveals the storytelling power of rap, and claims our country\'s origins for a diverse new generation.', NULL, '../assets/img/books/1.jpg', 'Lin-Manuel Miranda', 15000, 0, 0.4, 2),
(2, 'Saint X: A Novel', 18, 'When you lose the person who is most essential to you, who do you become?', NULL, '../assets/img/books/2.jpg', 'Alexis Schaitkin', 16900, 10, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `idUsuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `correo` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` int(10) UNSIGNED DEFAULT NULL,
  `dirección` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `ciudad` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `país` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `región` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `códigoPostal` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Truncar tablas antes de insertar `usuario`
--

TRUNCATE TABLE `usuario`;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `pr` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `us` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `elementocarro`
--
ALTER TABLE `elementocarro`
  ADD CONSTRAINT `producto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `ordencarro`
--
ALTER TABLE `ordencarro`
  ADD CONSTRAINT `ord` FOREIGN KEY (`idOrden`) REFERENCES `ordencompra` (`idOrdenCompra`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `prod` FOREIGN KEY (`idElementoCarro`) REFERENCES `producto` (`idProducto`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `categor` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
