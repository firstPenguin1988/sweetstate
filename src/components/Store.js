import { createStore, createHook } from 'react-sweet-state'

const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'
//const apiUrl = 'https://4f79d4067c98ed72d6f6e4a11c020cca.m.pipedream.net'
//const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream'

const initialState = {
  data: [],
  loading: false,
  error: null,
  rentType: ''
}

const actions = {
  load: () => async ({ getState, setState }) => {
    if (!getState().loading) {
      setState({ loading: true })
    }

    try {
      const res = await fetch(apiUrl)
      const jsondata = await res.json()
      console.log('datadata: ', jsondata)
      setState({ data: jsondata, loading: false })
    } catch (error) {
      setState({ error, loading: false })
    }
  },
  setRentType: rentType => ({ setState }) => {
    setState({ rentType })
  }
}

// create a store type
const Store = createStore({ initialState, actions })
// create components to access store state instances
export const useFetchData = createHook(Store)

/*
import {createStore, createHook} from 'react-sweet-state'

const initialState = {
    data: [],
    loading: true,
    error: null,
    rentType: '',
}

const actions = {
    setRentTypeAction: (rentType) => ({setState}) => {
        setState({ rentType })
    },
    fetchDataBegin: () => ({setState}) => {
        setState({
            loading: true,
            error: null
        })
    },
    fetchDataSuccess: (data) => ({setState}) => {
        setState({
            loading: false,
            data,
        })
    },
    fetchDataFailure: (error) => ({setState}) => {
        setState({
            loading: false,
            error
        })
    },

}

// store is an Object with initialstate and actions:
const Store = createStore({
    initialState,
    actions,
    name: 'FetchHouseData'
})

// create selectors which will be used to fetch state from store
const fetchDataSelector = (state) => state
//const rentTypeSelector = (state) => state.rentType

/*
// turn selectors into hooks using createHooks
export const useFetchData = createHook(Store, {
    selector: fetchDataSelector,
})
*/
/*
import {createStore, createHook} from 'react-sweet-state'

const initialState = {
    data: [],
    loading: true,
    error: null,
    rentType: '',
}

// store is an Object with initialstate and actions:
const Store = createStore({
    initialState,
    actions: {
        setRentTypeAction: (rentType) => ({setState}) => {
            setState({ rentType })
        },
        fetchDataBegin: () => ({setState}) => {
            setState({
                loading: true,
                error: null
            })
        },
        fetchDataSuccess: (data) => ({setState}) => {
            setState({
                loading: false,
                data,
            })
        },
        fetchDataFailure: (error) => ({setState}) => {
            setState({
                loading: false,
                error
            })
        },

    },
    name: 'FetchHouseData'
})

// create selectors which will be used to fetch state from store
const fetchDataSelector = (state) => state
//const rentTypeSelector = (state) => state.rentType


// turn selectors into hooks using createHooks
export const useFetchData = createHook(Store, {
    selector: fetchDataSelector,
})
/*
export const useRentType = createHook(Store, {
    selector: rentTypeSelector,
})
*/
