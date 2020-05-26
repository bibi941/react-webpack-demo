// 用于把所有的 svg 有一个默认导出
declare module '*.svg' {
  const content: any;
  export default content;
}
