import React from 'react'
import AmenitiesCSS from './Amenities.module.css'

const amenitiesObj = {
  security: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/security_1.png',
    name: 'security'
  },
  washingMachine: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/washing_machine_1.png',
    name: 'washing machine'
  },
  fridge: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/fridge_1.png',
    name: 'fridge'
  },
  tv: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/television_1.png',
    name: 'tv'
  },
  pool: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/swimming_pool_1.png',
    name: 'pool'
  },
  gym: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/gym_1.png',
    name: 'gym'
  },
  powerBackUp: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/power_backup_1.png',
    name: 'power backup'
  },
  cctv: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/CCTV.png',
    name: 'camera'
  },
  dth: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/dish_tv.png',
    name: 'dth'
  },
  ac: {
    icon:
      'https://s3.ap-south-1.amazonaws.com/na-prod-static-assets/amenities-icons/ac_1.png',
    name: 'ac'
  }
}

// A failsafe amenity in case the amenity in data object send from App.js isn't stored in Amenities
const failsafe =
  'https://free-icon-rainbow.com/i/icon_00570/icon_005700_256.png'

const Amenities = props => {
  const propsAmenities = props.housingamenities

  return (
    <div>
      <ul className={AmenitiesCSS.list}>
        {propsAmenities.map(amenity => (
          <li>
            {amenitiesObj.hasOwnProperty(amenity) ? (
              <img src={amenitiesObj[amenity]?.icon} />
            ) : (
              <img src={failsafe} />
            )}
          </li>
        ))}
        <li>{props.moreInfo}</li>
      </ul>
    </div>
  )
}

export default Amenities
//optional chaining operator = ?