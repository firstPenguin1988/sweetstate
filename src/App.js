import React, { useEffect } from 'react'
import './App.css'
import Body from './components/Body'
import { useFetchData } from './components/Store'
//import { useSelector, useDispatch } from 'react-redux'
//import {setRentTypeAction} from './actions'
//import {bedrate, roomrate, houserate} from './actions'

const rate = { bed: 'bed rate', room: 'room rate', house: 'house rate' }

function App () {
  //const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream'
  //const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'
  //const apiUrl = 'https://4f79d4067c98ed72d6f6e4a11c020cca.m.pipedream.net'

  const [state, actions] = useFetchData()

  useEffect(() => {
    if (state.data.length === 0) actions.load()
  }, [state, actions])

  if (state.error || state.data[0]?.rent === undefined) {
    return <h1>something went wrong</h1>
  }

  return (
    <div className='App'>
      {state.loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {Object.keys(rate).map(keyName => {
            return (
              <button
                key={keyName}
                className={
                  state.rentType === keyName ? 'buttonToggled' : 'buttons'
                }
                //onClick={() => dispatch({type: `${rate[keyName].toUpperCase().split(" ").join("")}`})}
                //onClick={() => dispatch({type: `${rate[keyName].toUpperCase().split(" ").join("")}`})}
                //onClick={() => dispatch(`${`${keyName}rate()`}`)}
                onClick={() => {
                  actions.setRentType(keyName)
                  //setRentType(keyName)
                  //setRateSelection(keyName)
                }}
              >
                {rate[keyName]}
              </button>
            )
          })}

          <Body rentType={state.rentType} houseData={state.data[0]} />
          <Body rentType={state.rentType} houseData={state.data[1]} />
        </>
      )}
    </div>
  )
}

export default App

/*
function App () {
  //const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream'
  //const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'
  //const apiUrl = 'https://4f79d4067c98ed72d6f6e4a11c020cca.m.pipedream.net'

  // dispatch an action on button click
  //const dispatch = useDispatch()
  
  const [state, actions] = useFetchData()
  
  useEffect(
    () => { 
      if (!state.data) {
        actions.fetch(); 
      }
    },
    [state, actions], 
  )
  /*
  useEffect(() => {
    console.log('111111')
    actions.fetch()  
  }, [])
 
  const setRentType = rentType => {
    //setRateSelection(keyName)
    dispatch(setRentTypeAction(rentType))
  }

  const getDataWithFetch = async () => {
    
    dispatch(fetchDataBegin()) // fetching have started
      try {
        const response = await fetch(apiUrl)
        console.log(arguments)
        //let text = await response.text();
        //console.log(text);
        const jsonData = await response.json()
        console.log('json data: ',jsonData)
        dispatch(fetchDataSuccess(jsonData))
        //setIsLoading(false) 
      } catch (error) {
        dispatch(fetchDataFailure(error))
        console.log('Error! ' + error.message)
        throw(error)
      }
  }
  

  // retrieve state from store using selector function which is passed as an argument in useSelector
  //const rentType = useSelector(state => state.rentType)
  //const houseData = state.data
  //console.log('loading: ', state.loading)
  //console.log('house data', houseData)
  //console.log('access rent: ', houseData.data[0]?.rent);
  //console.log('isitempty: ',Object.keys(houseData.data).length)
  //const error = useSelector(state => state.houseData)
  //console.log('error: ', state.error);
  
  if (state.error || state.data[0]?.rent === undefined) {
    return (
      <h1>something went wrong</h1>
    )
  } 
  
  return (
    <div className='App'>
      {state.loading ? (
        <h1>Loading...</h1>
      ) : (  
        <>
          <Body houseData={state.data[0]} />
          <Body houseData={state.data[1]} />
          
        </>
      )}   
    </div>
  )
  //<Body rentType={rentType} houseData={houseData[0]} />
  //<Body rentType={rentType} houseData={houseData[1]} />

  
}

export default App


/*

import {createStore, createHook} from 'react-sweet-state'

const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'

// define store initial state
const initialState = {
    data: [],
    loading: false,
    error: null,
}
// define the actions that mutate the state
const actions = {
    fetch: () => async ( { setState, getState } ) => {
      if (getState().loading) return;

      setState({
        loading: true,
      })

      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        console.log('datadata: ', data)
        setState({ 
          data, 
          loading: false 
        });
      } catch (error) { 
        setState({ 
          error: error.message, 
          loading: false });
      } 
    }
  }

  // create a store
  const Stores = createStore( {initialState, actions} )
  // create components to access store state instances
  const useHouseData = createHook(Stores)

*/

/*
{Object.keys(rate).map(keyName => {
            return (
              <button
                key={keyName}
                className={rentType === keyName ? 'buttonToggled' : 'buttons'}
                //onClick={() => dispatch({type: `${rate[keyName].toUpperCase().split(" ").join("")}`})}
                //onClick={() => dispatch({type: `${rate[keyName].toUpperCase().split(" ").join("")}`})}
                //onClick={() => dispatch(`${`${keyName}rate()`}`)}
                onClick={() => {
                  //setRentType(keyName)
                  //setRateSelection(keyName)
                }}
              >
                {rate[keyName]}
              </button>
            )
          })}

*/
/*
        <>
          <button className={ rateSelect === 'bed' ? 'buttonToggled' : 'buttons'} onClick={() => dispatch(bedrate())}>bed rate</button>
          <button className={ rateSelect === 'room' ? 'buttonToggled' : 'buttons'} onClick={() => dispatch(roomrate())}>room rate</button>
          <button className={ rateSelect === 'house' ? 'buttonToggled' : 'buttons'} onClick={() => dispatch(houserate())}>house rate</button>
        </>
          */

/*
if (houseData.data[0]?.rent === undefined) {
      return (
        <div>
          <h1>Welcome to Nestaway.</h1>
          <h1>Please Wait...</h1>
        </div>     
      )
  }

*/

//---------------------------------

/*
import React, { useState, useEffect } from 'react'
import './App.css'
import Body from './components/Body'

const rate = { bed: 'bed rate', room: 'room rate', house: 'house rate' }

function App () {
  const apiUrl = 'https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/'
  const [houseData, setHouseData] = useState([])
  const [rateSelection, setRateSelection] = useState('')

  // If data is taking sometime to fetch. So, we will log something on console while the data is being fetched and when it's
  // fetched we will display it. check out isLoading inline conditional statement line: 35 (below  <div className="App">)
  const [isLoading, setIsLoading] = useState(true)

  // fetch() API, takes URL as argument, makes a network request to that URL & returns a Promise that resolves to a response object
  //await keyword in front of the fetch() function pause the code until fetch() returns a fulfilled Promise
  // response is then parsed into JSON using json() method, which also returns a Promise that resolves to the jsonData object
  // await yet again pauses the code until the response is parsed to JSON
  // setHouseData() is called with jsonData. It updates the state of the <App> component with api data.
  //Passing an empty array [] ensures this 'effect' will run just once, otherwise it will fetch data after every render
  useEffect(() => {
    ;(async () => {
      const response = await fetch(apiUrl)
      const jsonData = await response.json()
      setHouseData(jsonData)
      setIsLoading(false)
    })()
  }, [])

  return (
    <div className='App'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {Object.keys(rate).map(keyName => {
            return (
              <button
                key={keyName}
                className={
                  rateSelection === keyName ? 'buttonToggled' : 'buttons'
                }
                onClick={() => setRateSelection(keyName)}
              >
                {rate[keyName]}
              </button>
            )
          })}
          
          <Body rentType={rateSelection} data={houseData[0]} />
          <Body rentType={rateSelection} data={houseData[1]} />
        </>
      )}
    </div>
  )
}

export default App

*/

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

/*

import React, { useState, useEffect } from "react"
//import "./App.css"

const apiUrl = "https://45240421cf2f0c2fbd1eea6c037d3984.m.pipedream.net/"

function App() {
  const [houseData, setHouseData] = useState([])
  //Passing an empty array [] ensures this 'effect' will run just once, otherwise it will fetch data after every render
  useEffect(() => {
    getHouseDataWithFetch()
  }, [])
   // fetch() API, which takes as argument a URL, makes a network request to that URL, and 
  // returns a Promise that resolves to a response object.
  // await keyword in front of the fetch() function pause the code until fetch() returns a fulfilled Promise
  // response is then parsed into JSON using json() method, which also returns a Promise that resolves to the jsonData object
  // await yet again pauses the code until the response is parsed to JSON
  // setData() is called with jsonData. It updates the state of the <App> component with api data.
  const getHouseDataWithFetch = async () => {
    const response = await fetch(apiUrl)
    const jsonData = await response.text()
    setHouseData(jsonData)
  }

  return (
    <div className="App">
      {console.log(houseData[0]?.gender)}
    </div>
  );
}

//-----------------------------------------------


{Object.keys(rate).map((keyName) => {
        return (
          <button
            key={keyName}
            className={rateSelection === keyName ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(keyName)}
          >
            {rate[keyName]}
          </button>
        )
      })}
      {console.log('xxxxxxx: ' + data[0].gender)}
      <Body rentType={rateSelection} data={data[0]} />
      <Body rentType={rateSelection} data={data[1]} />

*/

/*

import React, { useState, useEffect } from 'react'
import './App.css'
import Body from './components/Body'

const data = [
  {
    gender: 'male',
    listedHouseURL:
      'https://i.pinimg.com/474x/aa/b2/7a/aab27a53b7ceba066dea612ea126f308.jpg',
    isSeen: true,
    rent: {
      bed: '₹8050 / bed',
      room: '₹15000 / room',
      house: '₹28000 / house'
    },
    rentDeposit: 'Deposit: ₹25375',
    homeDescription:
      '3 Private Rooms in Apartment for rent in green glen layout',
    houseAmenity: ['tv', 'microwave', 'pool'],
    isVacancy: true,
    houseVacancy: '2 beds left!',
    visitStats: '12 visits happening within 12 hours',
    listerUsername: 'Arijit nest'
  },
  {
    gender: 'female',
    listedHouseURL:
      'https://i.pinimg.com/474x/cb/cf/d6/cbcfd6ab160f826dfee985d5f348c6db.jpg',
    isSeen: false,
    rent: {
      bed: '₹7500 / bed',
      room: '₹13000 / room',
      house: '₹36000 / house'
    },
    rentDeposit: 'Deposit: ₹20000',
    homeDescription:
      '2 Shared and 1 Private Room in Studio for rent in hsr layout',
    houseAmenity: ['ac', 'dth', 'microwave'],
    isVacancy: false,
    houseVacancy: '1 beds left!',
    visitStats: '3 visits happening within 12 hours',
    listerUsername: 'HSR Layout'
  }
]


function App () {
  const rate = {'bed': 'bed rate' ,'room': 'room rate', 'house': 'house rate'}
  const [rateSelection, setRateSelection] = useState('')

  return (
    <div className='container'>
      {Object.keys(rate).map((keyName) => {
        return (
          <button
            key={keyName}
            className={rateSelection === keyName ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(keyName)}
          >
            {rate[keyName]}
          </button>
        )
      })}

      <Body rentType={rateSelection} data={data[0]} />
      <Body rentType={rateSelection} data={data[1]} />
    </div>
  )
}

export default App

*/

/*
function App () {
  const rate = {'bed': 'bed rate' ,'room': 'room rate', 'house': 'house rate'}
  const [rateSelection, setRateSelection] = useState(null)
  //const buttonType = rate[rateSelection]?.name
  //console.log("button type" + buttonType)
  //const rentType = buttonType?.split(' ').shift()
  //console.log('rentofType: ' +  rentType)

  const rentarr = Object.keys(rate)
  const rentType = rentarr[rateSelection]
  console.log('rentoftype: ' + rentType)
  return (
    <div className='container'>
      {Object.keys(rate).map((keyName, keyIndex) => {
        return (
          <button
            key={keyIndex}
            className={rateSelection === keyIndex ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(keyIndex)}
          >
            {rate[keyName]}
          </button>
        )
      })}

      <Body rentType={rentType} data={data[0]} />
      <Body rentType={rentType} data={data[1]} />
    </div>
  )
}

*/

/*
const RateButton = () => {
  const rate = [{name: "bed"}, {name: "room"}, {name: "house"}]
  const [condition, setCondition] = useState(null)

  return(
    <div>
      {rate.map( (data, k) => {
        return (
          <button
            key={k}
            className={condition === k ? "buttonToggled" : "buttons"}
            onClick={ () => setCondition(k) }
          >
          {data.name}
          </button>
        )
      } )}
    </div>
  )
}

function App() {
  return (
    <div className='container'>
      <RateButton />
      <Body data={data[0]} />
      <Body data={data[1]} />
    </div>
  )
}
*/

/*
function App () {
  const rate = [{ name: 'bed rate' }, { name: 'room rate' }, { name: 'house rate' }]
  const [rateSelection, setRateSelection] = useState(null)
  const buttonType = rate[rateSelection]?.name
  console.log("button type" + buttonType)
  const rentType = buttonType?.split(' ').shift()
  console.log('rentofType: ' +  rentType)
  
  return (
    <div className='container'>
      {rate.map((data, k) => {
        return (
          <button
            key={k}
            className={rateSelection === k ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(k)}
          >
            {data.name}
          </button>
        )
      })}

      <Body rentType={rentType} data={data[0]} />
      <Body rentType={rentType} data={data[1]} />
    </div>
  )
}
*/

/*

function App () {
  const rate = [{ 'bed': 'bed rate' }, { 'room': 'room rate' }, { 'house': 'house rate' }]
  const [rateSelection, setRateSelection] = useState(null)
  //const buttonType = rate[rateSelection]?.name
  //console.log("button type" + buttonType)
  //const rentType = buttonType?.split(' ').shift()
  //console.log('rentofType: ' +  rentType)

  const rentType = Object.keys(rate[rateSelection])
  console.log('rentoftype: ' + rentType)
  return (
    <div className='container'>
      {rate.map((data, k) => {
        return (
          <button
            key={k}
            className={rateSelection === k ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(k)}
          >
            {Object.values(rate[k])}
          </button>
        )
      })}

      <Body rentType={rentType} data={data[0]} />
      <Body rentType={rentType} data={data[1]} />
    </div>
  )
}

*/

/*
function App () {
  const rate = [{ type: 'bed', name: 'bed rate' }, { type: 'room', name: 'room rate' }, { type: 'house', name: 'house rate' }]
  const [rateSelection, setRateSelection] = useState(null)
  //const buttonType = rate[rateSelection]?.name
  //console.log("button type" + buttonType)
  //const rentType = buttonType?.split(' ').shift()
  //console.log('rentofType: ' +  rentType)
  const rentType = rate[rateSelection]?.type
  
  return (
    <div className='container'>
      {rate.map((data, k) => {
        return (
          <button
            key={k}
            className={rateSelection === k ? 'buttonToggled' : 'buttons'}
            onClick={() => setRateSelection(k)}
          >
            {rate[k].name}
          </button>
        )
      })}

      <Body rentType={rentType} data={data[0]} />
      <Body rentType={rentType} data={data[1]} />
    </div>
  )
}
*/

/*
function App () {
  const [bedButtonColor, setBedButtonColor] = useState('azure')
  const [roomSelected, roomSetSelected] = useState('azure')
  const [houseSelected, houseSetSelected] = useState('azure')

  let urlParams = new URLSearchParams(window.location.search).toString()
  let rentType = urlParams.split('=').pop()

  return (
    <div className='container'>
      <div className='rateSelector'>
        <button
          style={{ backgroundColor: bedButtonColor }}
          className='bedRateButton'
          onClick={() => {
            setBedButtonColor(bedButtonColor === 'red' ? 'azure' : 'red')
            houseSetSelected('azure')
            roomSetSelected('azure')
            //houseSetSelected(houseSelected = 'azure')
          }}
        >
          Bed Rate
        </button>
        <button
          style={{ backgroundColor: roomSelected }}
          className='roomRateButton'
          onClick={() => {
            roomSetSelected(roomSelected === 'red' ? 'azure' : 'red')
            setBedButtonColor('azure')
            houseSetSelected('azure')
          }}
        >
          Room Rate
        </button>
        <button
          style={{ backgroundColor: houseSelected }}
          className='houseRateButton'
          onClick={() => {
            houseSetSelected(houseSelected === 'red' ? 'azure' : 'red')
            setBedButtonColor('azure')
            roomSetSelected('azure')
          }}
        >
          House Rate
        </button>
      </div>
      <Body rentType={rentType} data={data[0]} />
      <Body rentType={rentType} data={data[1]} />
    </div>
  )
}
*/
