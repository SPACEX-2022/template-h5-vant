export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // Splicing request parameters to url
  joinParamsToUrl?: boolean;
  // Format request parameter time
  formatDate?: boolean;
  // Whether to process the request result
  isTransformResponse?: boolean;
  // Whether to return native response headers
  // For example: use this attribute when you need to get the response headers
  isReturnNativeResponse?: boolean;
  // Whether to join url
  joinPrefix?: boolean;
  // Interface address, use the default apiUrl if you leave it blank
  apiUrl?: string;
  // 请求拼接路径
  urlPrefix?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  // Whether to add a timestamp
  joinTime?: boolean;
  ignoreCancelToken?: boolean;
  // Whether to send token in header
  withToken?: boolean;
  // 请求重试机制
  retryRequest?: RetryRequest;
}

export interface RetryRequest {
  isOpenRetry: boolean;
  count: number;
  waitTime: number;
}
/**
 * 响应数据返回通用格式
 */
export interface Result<T = any> {
  code: string;
  message: string;
  flag: string;
  dataResult: T;
}
/**
 * 分页请求返回数据类型
 */
export interface PageResult<T = any> {
  code:           string;
  dataResult:     T;
  message:        string;
  pageIndex:      number;
  pageSize:       number;
  permitNextPage?: number;
  success?:        boolean;
  total:          number;
  totalPage?:      number;
}

/**
 * 分页请求数据参数
 */
export interface PageQueryParam {
  offset?:    number;
  pageIndex: number;
  pageSize:  number;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
