import http_auth_json from "./http-common.json.request";
const get = (url, request_type) => {
  if (request_type == "auth-json") {
    return http_auth_json.get(url);
  }
};

const create = (url, data, request_type) => {
  if (request_type == "auth-json") {
    return http_auth_json.post(url, data);
  }
};

const update = (url, data, request_type) => {
  if (request_type == "auth-json") {
    return http_auth_json.put(url, data);
  }
};

const remove = (url) => {
  return http_auth_json.delete(url);
};

export { get, create, update, remove };
