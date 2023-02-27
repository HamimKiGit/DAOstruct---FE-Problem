import _superagent from "superagent";
const superagentPromise = require("superagent-promise");
const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = `https://api.nasa.gov/`
const API_ROOT_IMAGEUPLOAD = ``
const BUCKET_ROOT = ``;

const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}small/`;

const encode = encodeURIComponent;
const responseBody = (res: any) => res.body;

let token: any = null;
const tokenPlugin = (req: any) => {
  if (token) {
    req.set("token", `${token}`);
  }
};

const requests = {
  del: (url: any) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: any) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url: any, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  patch: (url: any, body: any) =>
    superagent
      .patch(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url: any, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  file: (url: any, key: any, file: any) =>
    superagent.post(`${API_ROOT}${url}`)
      .attach(key, file)
      .use(tokenPlugin)
      .then(responseBody)
};

const Planetary = {
  apod: (q: string) => requests.get(`planetary/apod?${q}`),
};

const FILES = {
  imageOriginal: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_ORIGINAL}${filename}`,
  imageMedium: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_MEDIUM}${filename}`,
  imageSmall: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_SMALL}${filename}`,
}

export default {
  token,
  Planetary,
  FILES,
  API_ROOT,
  API_ROOT_IMAGEUPLOAD,
  API_FILE_ROOT_SMALL,
  API_FILE_ROOT_MEDIUM,
  API_FILE_ROOT_ORIGINAL,
  setToken: (_token: any) => {
    token = _token;
  },
};