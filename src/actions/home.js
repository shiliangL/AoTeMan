import { createActionToFetch } from '~/utils/reduxToFech'

// eslint-disable-next-line import/prefer-default-export
export const dispatchFetchBanner = () => createActionToFetch({
  url: 'shop/goods/list',
  type: 'LOAD',
})

export const dispatchAdd = ()=> {
  return{
    type:'ADD'
  }
}
