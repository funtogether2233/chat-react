import axios, { AxiosRequestConfig } from 'axios';

//基础URL，axios将会自动拼接在url前
//process.env.NODE_ENV 判断是否为开发环境 根据不同环境使用不同的baseURL 方便调试
const baseURL = 'http://127.0.0.1:3000';

//创建axios实例
const service = axios.create({
  timeout: 5000,
  baseURL,
  //如需要携带cookie 该值需设为true
  withCredentials: true
});

//axios返回格式
interface axiosTypes<T> {
  data: T;
  status: number;
  statusText: string;
}

//后台响应数据格式
//###该接口用于规定后台返回的数据格式，意为必须携带code、msg以及result
//###而result的数据格式 由外部提供。如此即可根据不同需求，定制不同的数据格式
interface responseTypes<T> {
  code: number;
  message: string;
  data: T;
}

//核心处理代码 将返回一个promise 调用then将可获取响应的业务数据
const requestHandler = <T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  params: object = {},
  config: AxiosRequestConfig = {}
): Promise<T> => {
  let response: Promise<axiosTypes<responseTypes<T>>>;
  console.log('Axios req', method.toUpperCase(), url, params);
  switch (method) {
    case 'get':
      response = service.get(url, { params: { ...params }, ...config });
      break;
    case 'post':
      response = service.post(url, { ...params }, { ...config });
      break;
    case 'put':
      response = service.put(url, { ...params }, { ...config });
      break;
    case 'patch':
      response = service.patch(url, { ...params }, { ...config });
      break;
    case 'delete':
      response = service.delete(url, { params: { ...params }, ...config });
      break;
  }

  return new Promise<T>((resolve, reject) => {
    response
      .then((res) => {
        //业务代码 可根据需求自行处理
        console.log('Axios res', res);

        const data = res.data;
        if (data.code !== 200) {
          //数据请求错误 使用reject将错误返回
          reject(data);
        } else {
          //数据请求正确 使用resolve将结果返回
          resolve(data.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
        reject(error.response.data);
      });
  });
};

// 使用 request 统一调用，包括封装的get、post、put、delete等方法
const request = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    requestHandler<T>('get', url, params, config),
  post: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    requestHandler<T>('post', url, params, config),
  put: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    requestHandler<T>('put', url, params, config),
  patch: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    requestHandler<T>('patch', url, params, config),
  delete: <T>(url: string, params?: object, config?: AxiosRequestConfig) =>
    requestHandler<T>('delete', url, params, config)
};

// 导出至外层，方便统一使用
export { request };
