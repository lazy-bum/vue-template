/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
    return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
    return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 判断是否为整数
 */
export function validatenum(num, type) {
    let regName = /[^\d.]/g;
    if (type == 1) {
        if (!regName.test(num)) return false;
    } else if (type == 2) {
        regName = /[^\d]/g;
        if (!regName.test(num)) return false;
    }
    return true;
}
/**
 * 判断是否为小数
 */
export function validatenumord(num, type) {
    let regName = /[^\d.]/g;
    if (type == 1) {
        if (!regName.test(num)) return false;
    } else if (type == 2) {
        regName = /[^\d.]/g;
        if (!regName.test(num)) return false;
    }
    return true;
}
/**
 * 判断是否为空
 */
export function validatenull(val) {
    if (typeof val == 'boolean') {
        return false;
    }
    if (typeof val == 'number') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
        return false;
    }
    return false;
}