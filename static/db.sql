-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.3.9-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 test001.role_info 结构
DROP TABLE IF EXISTS `role_info`;
CREATE TABLE IF NOT EXISTS `role_info` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色主键',
  `role_name` varchar(100) NOT NULL COMMENT '角色名称',
  `role_desc` varchar(200) DEFAULT NULL COMMENT '角色描述',
  `data_status` varchar(20) NOT NULL DEFAULT 'VALID' COMMENT '数据状态',
  `first_create_by` int(11) NOT NULL DEFAULT 10 COMMENT '初始创建人员',
  `first_create_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '初始创建日期',
  `description` varchar(900) NOT NULL DEFAULT '数据变化描述' COMMENT '数据变化描述',
  `last_update_by` int(11) NOT NULL DEFAULT 10 COMMENT '最后修改人员',
  `last_update_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '最后修改日期',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COMMENT='角色信息表';

-- 正在导出表  test001.role_info 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `role_info` DISABLE KEYS */;
INSERT INTO `role_info` (`role_id`, `role_name`, `role_desc`, `data_status`, `first_create_by`, `first_create_date`, `description`, `last_update_by`, `last_update_date`) VALUES
	(10, '系统角色', '任务类角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50'),
	(20, '超级管理员', '超级管理员角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50'),
	(21, '管理员', '管理员角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50'),
	(30, '游客', '游客角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50'),
	(31, '家庭户主', '家庭户主角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50'),
	(32, '家庭成员', '家庭成员角色', 'VALID', 10, '2019-11-07 15:15:50', '数据变化描述', 10, '2019-11-07 15:15:50');
/*!40000 ALTER TABLE `role_info` ENABLE KEYS */;

-- 导出  表 test001.user_info 结构
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE IF NOT EXISTS `user_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户主键',
  `user_account` varchar(100) NOT NULL COMMENT '用户账号',
  `user_password` varchar(100) NOT NULL COMMENT '用户密码',
  `user_nick` varchar(100) DEFAULT NULL COMMENT '用户昵称',
  `user_email` varchar(100) DEFAULT NULL COMMENT '用户邮箱',
  `user_role` int(11) NOT NULL COMMENT '角色主键',
  `data_status` varchar(20) NOT NULL DEFAULT 'VALID' COMMENT '数据状态',
  `first_create_by` int(11) NOT NULL DEFAULT 10 COMMENT '初始创建人员',
  `first_create_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '初始创建日期',
  `description` varchar(900) NOT NULL DEFAULT '数据变化描述' COMMENT '数据变化描述',
  `last_update_by` int(11) NOT NULL DEFAULT 10 COMMENT '最后修改人员',
  `last_update_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '最后修改日期',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_info_index001` (`user_account`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- 正在导出表  test001.user_info 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` (`user_id`, `user_account`, `user_password`, `user_nick`, `user_email`, `user_role`, `data_status`, `first_create_by`, `first_create_date`, `description`, `last_update_by`, `last_update_date`) VALUES
	(10, 'system', '123456', '系统用户', 'system@163.com', 10, 'VALID', 10, '2019-11-07 15:15:51', '数据变化描述', 10, '2019-11-07 15:15:51'),
	(11, 'superadmin', '123456', '黄药师', 'hys@163.com', 20, 'VALID', 10, '2019-11-07 15:15:51', '数据变化描述', 10, '2019-11-07 15:15:51'),
	(12, 'admin', '123456', '欧阳锋', 'oyf@163.com', 21, 'VALID', 10, '2019-11-07 15:15:51', '数据变化描述', 10, '2019-11-07 15:15:51');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
