const getAPIWithBaseUrl = endPoint => {
  return `${process.env.REACT_APP_API_URL}${endPoint}`;
}

export const endPoint = {
  userAPI: getAPIWithBaseUrl("/user/v1")
}

export default {
  endPoint,
  API_URL: process.env.REACT_APP_API_URL
}