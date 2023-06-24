-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: doan2023
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoriespost`
--

DROP TABLE IF EXISTS `categoriespost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriespost` (
  `PostId` int NOT NULL,
  `CategoryId` int NOT NULL,
  PRIMARY KEY (`PostId`,`CategoryId`),
  KEY `CategoryId` (`CategoryId`),
  CONSTRAINT `categoriespost_ibfk_1` FOREIGN KEY (`PostId`) REFERENCES `posts` (`PostId`),
  CONSTRAINT `categoriespost_ibfk_2` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`CategoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriespost`
--

LOCK TABLES `categoriespost` WRITE;
/*!40000 ALTER TABLE `categoriespost` DISABLE KEYS */;
INSERT INTO `categoriespost` VALUES (28,1),(79,1),(132,1),(184,1),(185,1),(186,1),(187,1),(188,1),(190,1),(191,1),(79,2),(132,2),(151,2),(184,2),(186,2),(187,2),(188,2),(190,2),(191,2),(79,3),(132,3),(151,3),(187,3),(188,3),(189,3),(190,3),(191,3),(79,4),(151,4),(49,5),(132,6),(152,6),(153,6),(189,6),(152,7),(153,7),(186,7),(187,7),(186,8),(187,8),(132,9),(152,9),(186,9),(28,10),(151,10),(189,10),(132,12),(28,13),(151,13),(146,14),(28,15),(132,15),(152,15),(153,15),(186,16),(28,17),(146,17),(151,17),(28,18);
/*!40000 ALTER TABLE `categoriespost` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-02 11:07:16
