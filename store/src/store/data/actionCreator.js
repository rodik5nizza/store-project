import { FETCH, IN_FAVOURITE } from "./actions"

export const fetchAC = () => async (dispatch) => {
    const datas = localStorage.getItem('data')
      if (datas) {
        dispatch({type: FETCH, payload: JSON.parse(datas)})
      }else {
                const data = await fetch("https://ajax.test-danit.com/api/v2/cards", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer c2267d7d-4d6c-4f8e-be4a-7cb04bc875fc`
          }}).then(res => res.json())
                console.log(data)
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
