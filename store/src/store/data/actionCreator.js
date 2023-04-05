import { FETCH, IN_FAVOURITE } from "./actions"

export const fetchAC = () => async (dispatch) => {
    const datas = localStorage.getItem('data')
      if (datas) {
        dispatch({type: FETCH, payload: JSON.parse(datas)})
      }else {
        const data = await fetch('./data.json').then(res => res.json())
        dispatch({type: FETCH, payload: data})
        localStorage.setItem('data', JSON.stringify(data))
      }
}

export const inFavouriteAC = (payload) => async (dispatch) => {

    const data = JSON.parse(localStorage.getItem('data'))

    const index = data.findIndex((elem) => elem.article === payload)
      if (index !== -1) {
        if (!data[index].counter) {
          data[index].counter = 1;
        } else {
          delete data[index].counter
        }
        data[index].isFavourite = !data[index].isFavourite
      }
      localStorage.setItem('data', JSON.stringify(data))
      dispatch({type: IN_FAVOURITE, payload: data})

}

// export const localStorageSaveAC = (payload) => () => {
//   dispatch({type: LOCAL_STORAGE_SAVE, payload: payload})
// }