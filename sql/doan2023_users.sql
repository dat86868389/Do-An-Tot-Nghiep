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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `RoleID` int NOT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `Account` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Avartar` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `time_create` datetime DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `Account_UNIQUE` (`Account`),
  KEY `RoleID` (`RoleID`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`RoleID`) REFERENCES `roles` (`RoleId`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,0,'Quản Trị Viên','admin','Admin',NULL,1,'admin@gmail.com','2023-04-15 00:00:00'),(33,1,'Nguoi dung 01','nguoidung01','123456',NULL,1,'nguoidung01@gmail.com','2023-04-20 00:00:00'),(34,1,'Nguyễn Tiến Đạt','datcntt3k60','123456',NULL,1,'dat86868389@gmail.com','2023-04-20 00:00:00'),(35,1,'Kiều Quang Thuyết','thuyetcntt3k60','123456',NULL,1,'kieuquanthuyet@gmail.com','2023-04-20 00:00:00'),(36,1,'DAT_UTC','datutc','123456',NULL,0,'dat6789@gmail.com','2023-05-02 00:00:00'),(37,1,'test1','test1','123456',NULL,1,'test1@gmail.com','2023-05-02 00:00:00'),(38,1,'doan2023','doan2023','123456',NULL,1,'dat999999@gmail.com','2023-05-15 00:00:00'),(40,1,'accdemo001','accdemo001','123456',NULL,0,'accdemo001@gmail.com','2023-05-26 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
