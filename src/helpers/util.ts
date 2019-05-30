// 工具辅助方法
// 缓存
const toString = Object.prototype.toString

// 类型保护,谓词
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
