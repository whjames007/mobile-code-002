/* 函数：格式化日期
参数：formatStr-格式化字符串
d：将日显示为不带前导零的数字，如1
dd：将日显示为带前导零的数字，如01
ddd：将日显示为缩写形式，如Sun
dddd：将日显示为全名，如Sunday
M：将月份显示为不带前导零的数字，如一月显示为1
MM：将月份显示为带前导零的数字，如01
MMM：将月份显示为缩写形式，如Jan
MMMM：将月份显示为完整月份名，如January
yy：以两位数字格式显示年份
yyyy：以四位数字格式显示年份
h：使用12小时制将小时显示为不带前导零的数字，注意||的用法
hh：使用12小时制将小时显示为带前导零的数字
H：使用24小时制将小时显示为不带前导零的数字
HH：使用24小时制将小时显示为带前导零的数字
m：将分钟显示为不带前导零的数字
mm：将分钟显示为带前导零的数字
s：将秒显示为不带前导零的数字
ss：将秒显示为带前导零的数字
l：将毫秒显示为不带前导零的数字
ll：将毫秒显示为带前导零的数字
tt：显示am/pm
TT：显示AM/PM
返回：格式化后的日期 */

let formatWithDateToString = function (paramDate, paramFormat) {
  var date = new Date(paramDate)
  /* 函数：填充0字符；参数：value-需要填充的字符串, length-总长度；返回：填充后的字符串 */
  var zeroize = function (value, length) {
    if (!length) {
      length = 2
    }
    value = String(value)
    for (var i = 0, zeros = ''; i < (length - value.length); i++) {
      zeros += '0'
    }
    return zeros + value
  }
  return paramFormat.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|M{1,4}|yy(?:yy)?|([hHmstT])\1?|[lLZ])\b/g, function ($0) {
    switch ($0) {
      case 'd':
        return date.getDate()
      case 'dd':
        return zeroize(date.getDate())
      case 'ddd':
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][date.getDay()]
      case 'dddd':
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]
      case 'M':
        return date.getMonth() + 1
      case 'MM':
        return zeroize(date.getMonth() + 1)
      case 'MMM':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()]
      case 'MMMM':
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]
      case 'yy':
        return String(date.getFullYear()).substr(2)
      case 'yyyy':
        return date.getFullYear()
      case 'h':
        return date.getHours() % 12 || 12
      case 'hh':
        return zeroize(date.getHours() % 12 || 12)
      case 'H':
        return date.getHours()
      case 'HH':
        return zeroize(date.getHours())
      case 'm':
        return date.getMinutes()
      case 'mm':
        return zeroize(date.getMinutes())
      case 's':
        return date.getSeconds()
      case 'ss':
        return zeroize(date.getSeconds())
      case 'l':
        return date.getMilliseconds()
      case 'll':
        return zeroize(date.getMilliseconds())
      case 'tt':
        return date.getHours() < 12 ? 'am' : 'pm'
      case 'TT':
        return date.getHours() < 12 ? 'AM' : 'PM'
    }
  })
}

let formatWithStringToDate = function (param) {
  var result = new Date()
  var dateArray = param.split(' ')
  var yyyymmdd = dateArray[0]
  var hhmmss = dateArray[1]
  var ymdArray = yyyymmdd.split('-')
  var hmsArray = hhmmss.split(':')
  var year = ymdArray[0]
  var month = parseInt(ymdArray[1], 10) - 1
  var day = ymdArray[2]
  var hour = parseInt(hmsArray[0])
  var minute = hmsArray[1]
  var second = hmsArray[2]
  result.setFullYear(year, month, day)
  result.setHours(hour, minute, second)
  return result
}

let format = function (date, flag) {
  if (date) {
    switch (flag) {
      case 'DTS':
        return formatWithDateToString(date, 'yyyy-MM-dd HH:mm:ss')
      case 'STD':
        return formatWithStringToDate(date)
    }
  } else {
    return null
  }
}

let range = function (index) {
  let date = new Date()
  let result = []
  switch (index) {
    case 'DAY':
      let begin = date.setHours(0, 0, 0)
      let end = date.setHours(23, 59, 59)
      result.push(format(begin, 'DTS'))
      result.push(format(end, 'DTS'))
      break
    case 'WEEK':
      result = '您好，您输入的账号或密码有误！'
      break
    case 'MOUNTH':
      result = '驱蚊器翁额'
      break
    case 'YEAR':
      result = '按时发电费'
      break
    default:
      result = ['1949-10-01 00:00:00', '2049-09-30 23:59:59']
      break
  }
  return result
}

export default {
  format,
  range
}
