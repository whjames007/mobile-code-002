function version () {
  let msg = '【当前程序版本】'
  let ver = '【V1.0.1】'
  console.info(msg, ver)
}

// 全局脚本，字符串增加格式化函数
String.prototype.format = function () {
  if (arguments.length === 0) {
    return this
  }
  for (var s = this, i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i]);
  }
  return s
}

const status = {success: 'SUCCESS', warning: 'WARNING', error: 'ERROR', valid: 'VALID', invalid: 'INVALID', normal: 'NORMAL', snull: 'SNULL'}
const operation = {create: 'CREATE', delete: 'DELETE', update: 'UPDATE', retrieve: 'RETRIEVE', copy: 'COPY', init: 'INIT', enable: 'ENABLE', disable: 'DISABLE'}
const device = {concentrator: 'CONCENTRATOR', camera: 'CAMERA'}
const configurations = [{id: 1, code: 'ORDER'}, {id: 2, code: 'DEVICE'}, {id: 3, code: 'ALARM'}, {id: 4, code: 'TASK'}]
const langList = [
  {value: 'zh', label: '中华人民共和国', flag: '/static/flagChina.png'},
  {value: 'en', label: 'United States of America', flag: '/static/flagEnglish.png'},
  {value: 'ja', label: '日本の国', flag: '/static/flagJapan.png'}
]
// 语言组，均是与后台约定的固定数据
const langGroup = [
  {value: 'MENU-NAME', i18n: 'message.menuInfo.menuName'},
  {value: 'MENU-DESC', i18n: 'message.menuInfo.menuDesc'},
  {value: 'ROLE-NAME', i18n: 'message.roleInfo.roleName'},
  {value: 'ROLE-DESC', i18n: 'message.roleInfo.roleDesc'},
  {value: 'PRIVILEGE-NAME', i18n: 'message.privilege.privilegeName'},
  {value: 'PRIVILEGE-DESC', i18n: 'message.privilege.privilegeDesc'}
]
// 后台的一系列接口
const auth = 'Authorization' // 请求头
const urlWebapi = '/webapi'
// const urlUserRouter = urlWebapi + '/routeruser'
// const urlUserRouter = '/localdevapi'
const urlUserRouter = '/localdevapi'
const url = {
  // 用户管理系列
  userVersion: urlUserRouter + '/user/version',
  userLogin: urlUserRouter + '/user/login',
  userPage: urlUserRouter + '/user/page',
  userAdd: urlUserRouter + '/user/add',
  userDelete: urlUserRouter + '/user/delete',
  userEdit: urlUserRouter + '/user/edit',
  userInit: urlUserRouter + '/user/init',
  // 角色管理系列
  roleList: urlUserRouter + '/role/list',
  rolePage: urlUserRouter + '/role/page',
  addRoleInfo: urlUserRouter + '/addRoleInfo',
  // 菜单管理系列
  menuTree: urlUserRouter + '/menu/tree',
  menuFind: urlUserRouter + '/menu/find',
  menuEdit: urlUserRouter + '/menu/edit',
  // 告警信息系列
  alertPage: urlUserRouter + '/alert/page',
  alertRead: urlUserRouter + '/alert/read',
  alertCount: urlUserRouter + '/alert/count',
  // 客户管理系列
  customerPage: urlUserRouter + '/customer/page',
  customerList: urlUserRouter + '/customer/list',
  customerAdd: urlUserRouter + '/customer/add',
  customerDelete: urlUserRouter + '/customer/delete',
  customerEdit: urlUserRouter + '/customer/edit',
  // 工程项目系列
  projectPage: urlUserRouter + '/project/page',
  projectList: urlUserRouter + '/project/list',
  projectAdd: urlUserRouter + '/project/add',
  projectDelete: urlUserRouter + '/project/delete',
  projectEdit: urlUserRouter + '/project/edit',
  // 集中器系列
  concentratorPage: urlUserRouter + '/concentrator/page',
  concentratorList: urlUserRouter + '/concentrator/list',
  concentratorAdd: urlUserRouter + '/concentrator/add',
  concentratorDelete: urlUserRouter + '/concentrator/delete',
  concentratorEdit: urlUserRouter + '/concentrator/edit',
  // 照相机系列
  cameraPage: urlUserRouter + '/camera/page',
  cameraList: urlUserRouter + '/camera/list',
  cameraAdd: urlUserRouter + '/camera/add',
  cameraDelete: urlUserRouter + '/camera/delete',
  cameraEdit: urlUserRouter + '/camera/edit',
  cameraTree: urlUserRouter + '/camera/tree',
  // 网管指令系列
  orderDevice: urlUserRouter + '/order/device',
  orderSender: urlUserRouter + '/order/sender',
  orderInfo: urlUserRouter + '/order/info',
  orderDown: urlUserRouter + '/order/down',
  orderUp: urlUserRouter + '/order/up',
  condevicePage: urlUserRouter + '/condevice/page',
  camdevicePage: urlUserRouter + '/camdevice/page',
  camdeviceList: urlUserRouter + '/camdevice/list',
  fieldstrengthPage: urlUserRouter + '/fieldstrength/page',
  uploadDeviceSoft: urlUserRouter + '/upload/devicesoft',
  // 定时任务系列
  timingtaskcyclePage: urlUserRouter + '/timingtaskcycle/page',
  timingtaskcycleList: urlUserRouter + '/timingtaskcycle/list',
  timingtaskcycleAdd: urlUserRouter + '/timingtaskcycle/add',
  timingtaskcycleDelete: urlUserRouter + '/timingtaskcycle/delete',
  timingtaskcycleEdit: urlUserRouter + '/timingtaskcycle/edit',
  // 报表系列
  reportdayFieldstrengthList: urlUserRouter + '/reportday/fieldstrength/list',
  reportdayFieldstrengthList2: urlUserRouter + '/reportday/fieldstrength/list2',
  // 系统配置系列
  configurationPage: urlUserRouter + '/configuration/page',
  configurationList: urlUserRouter + '/configuration/list',
  configurationAdd: urlUserRouter + '/configuration/add',
  configurationDelete: urlUserRouter + '/configuration/delete',
  configurationEdit: urlUserRouter + '/configuration/edit',
  // 杂项
  pageLanguageList: urlUserRouter + '/languageContent/page',
  languageAdd: urlUserRouter + '/languageContent/add',
  languageRemove: urlUserRouter + '/languageContent/remove',
  languageEdit: urlUserRouter + '/languageContent/edit',
  languageFind: urlUserRouter + '/languageContent/find',
  privilegePageList: urlUserRouter + '/privilege/page',
  privilegeAdd: urlUserRouter + '/privilege/add',
  privilegeEdit: urlUserRouter + '/privilege/edit',
  sss: 'sss'
}
// 方法
function aaa () {
  console.info(urlWebapi)
}

export default {
  version,
  status,
  operation,
  device,
  configurations,
  langList,
  langGroup,
  auth,
  url
}
