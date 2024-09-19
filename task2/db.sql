-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for user_api
CREATE DATABASE IF NOT EXISTS `user_api` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `user_api`;

-- Dumping structure for table user_api.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Dumping data for table user_api.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
	(2, 'John Doe1', 'john.doe1@example.com', '$2b$10$VMKs/anUbmFqB2ZfKaTCsekzin9IpZKg/W/3291KetaA.TdHNBC3y', '2024-09-19 10:29:12', '2024-09-19 10:29:12'),
	(3, 'John Doe2', 'john.doe2@example.com', '$2b$10$87Kxm63sUPEejQICbZaAT.l3gZHsY1mRc9Ue6mXozkWZTJz.3.v/K', '2024-09-19 10:29:17', '2024-09-19 10:29:17'),
	(4, 'John Doe3', 'john.doe3@example.com', '$2b$10$oGWzt/ItyhPKJyKC1Bl8tONJpvttnq5Y8iNeTNELZTX9NjGH.pa5y', '2024-09-19 10:29:44', '2024-09-19 10:29:44'),
	(5, 'John Doe4', 'john.doe4@example.com', '$2b$10$3g/MKVrWgiABjmNOoIXp0eT2uQ6nyTUkdd3iNT5kN/1.4lSw3oEyO', '2024-09-19 10:29:54', '2024-09-19 10:29:54'),
	(6, 'John Doe5', 'john.doe5@example.com', '$2b$10$xcMQQ1U65vhwT7xsriGq8ORNfgSua0mGDZduSDHlbH97a9CTVnuVe', '2024-09-19 10:31:16', '2024-09-19 10:31:16'),
	(7, 'John Doe6', 'john.doe6@example.com', '$2b$10$xDfRAEYXQSeJ20sZVyWi9e3htPaW2eBXtigO7DmJCjirHmZ5.M2xG', '2024-09-19 10:31:44', '2024-09-19 10:31:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
