import request from './request'
// eslint-disable-next-line import/prefer-default-export
export function createActionToFetch(options) {
  const { url, payload, method, fetchOptions, cb, type } = options
  return (dispatch) => {
    return request.fetch({ url, payload, method, ...fetchOptions }).then(({data}) => {
      dispatch({ type, payload: cb ? cb(data) : data })
      return data
    })
  }
}
