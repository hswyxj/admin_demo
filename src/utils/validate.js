/**
 * Created by heshiwen on 20190401.
 */

//  /**
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validUsername(str) {
//   const valid_map = ['admin', 'editor', 'editor1']
//   return valid_map.indexOf(str.trim()) >= 0
// }

// export function validPassword(str) {
//   const valid_map = ['adminpwd', 'editorpwd']
//   return valid_map.indexOf(str.trim()) >= 0
// }

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/* 合法uri*/
/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/* 小写字母*/
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 数字*/
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumbers(str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

/* 包含大小写字母和数字 */
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumAlphabets(str) {
  // const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])[a-zA-Z\d_@\.]{8,30}$/
  const reg = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d_@\.]{8,30}$/
  return reg.test(str)
}

/* 包含特殊字符 */
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validSpecial(str) {
  const reg = /^(?=.*[\W]).{0,}$/
  return reg.test(str)
}

/* 包含数字、大小写字母和特殊符号 */
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumAlphaSpecial(str) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9])(?=.*[\W]).{6,}$/
  return reg.test(str)
}

/**
 * validate email
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * validate ip
 * @param {string} ip
 * @returns {Boolean}
 */
export function validIP(ip) {
  const reg = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
  return reg.test(ip)
}

/**
 * validate JSON
 * @param {string} JSON
 * @returns {Boolean}
 */
export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log('isJSONerror：' + str + '!!!' + e)
      return false
    }
  }
  console.log('isJSON:It is not a string!')
}

/* 包含[] */
/**
 * validate Arraystr
 * @param {string} str
 * @returns {Boolean}
 */
export function validArraystr(str) {
  const reg = /^[[\s\S]{1,}]$/
  return reg.test(str)
}
