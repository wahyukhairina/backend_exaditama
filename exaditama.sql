-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2020 at 12:39 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exaditama`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_club`
--

CREATE TABLE `tb_club` (
  `club_id` int(10) NOT NULL,
  `club_name` varchar(255) NOT NULL,
  `club_points` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_club`
--

INSERT INTO `tb_club` (`club_id`, `club_name`, `club_points`) VALUES
(2, 'Man United', 21),
(3, 'Barcelona', 1),
(4, 'Atletico', 9),
(5, 'Liverpool', 0),
(6, 'Dortmund', 3),
(7, 'Paris', 0),
(8, 'Atlanta', 0),
(9, 'Leipzig', 6),
(10, 'Tottenham', 0),
(11, 'Chelsea', 0),
(12, 'Bayern', 3),
(13, 'Napoli', 1),
(14, 'Lyon', 3),
(15, 'Juventus', 0),
(16, 'Real Madrid', 0),
(17, 'Man City', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_club`
--
ALTER TABLE `tb_club`
  ADD PRIMARY KEY (`club_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_club`
--
ALTER TABLE `tb_club`
  MODIFY `club_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
