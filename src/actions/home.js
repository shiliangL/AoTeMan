import { createActionToFetch } from '~/utils/reduxToFech'

export const dispatchFetchBanner = payload => createActionToFetch({
  url: 'shop/goods/list',
  type: 'LOAD',
  payload
})

export const fetch = () => {
  return {
    type: 'LOAD'
  }
}
