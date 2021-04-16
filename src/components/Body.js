import React from 'react'
import IconTextComponent from './IconTextComponent'
import HouseAmenities from './HouseAmenities'
import HouseImage from './HouseImages'
import HouseCardButton from './HouseCardButton'
import BodyCSS from './Body.module.css'
import refundIcon from './IconTextComponent/refund1.png'

//getting query parameter from url


const Body = props => {
  console.log("props: ", props)
  console.log("rentObj: ", props.houseData)
  const rentObj = props.houseData.rent
  
  //console.log("rentType: " + props.rentType)
  const rentToDisplay = rentObj[props.rentType]
    //console.log("rentToDisplay: " + rentToDisplay)
  return (
    <div className={BodyCSS.housecard_wrapper}>
      <div className={BodyCSS.housecard}>
        <div className={BodyCSS.house_block}>
          <div className={BodyCSS.house_image}>
            <HouseImage
              listedHouseURL={props.houseData.listedHouseURL}
              gender={props.houseData.gender}
              IsSeen={props.houseData.isSeen ? 'SEEN' : null}
            />
          </div>

          <div className={BodyCSS.house_info}>
            <div className={BodyCSS.house_info_features}>
              <h3>{rentToDisplay}</h3>
              <div className={BodyCSS.deposit_icon_text}>
                <IconTextComponent
                  src='https://nestaway-assets.nestaway.com/refonte/precompiled-assets/src/assets/images/srp/deposit-110b7751575471207b0983692dfcc15b.svg'
                  info={props.houseData.rentDeposit}
                />
              </div>
              <div className={BodyCSS.instant_refund}>
                <IconTextComponent
                  src={refundIcon}
                  info='Instant Deposit Refund'
                />
              </div>
            </div>
            <div className={BodyCSS.house_listing_description}>
              <h3>{props.houseData.homeDescription}</h3>
            </div>
            <div>
              <HouseAmenities
                housingamenities={props.houseData.houseAmenity}
                moreInfo=' + 1 more | fully furnished'
                //moreInfo = "Semi Furnished"
              />
            </div>
          </div>
        </div>

        <div className={BodyCSS.listing_block}>
          <div className={BodyCSS.listing_information}>
            <div className={BodyCSS.listing_information_buttons}>
              {props.houseData.isVacancy ? (
                <div className={BodyCSS.red_button}>
                  <HouseCardButton msg={props.houseData.houseVacancy} />
                </div>
              ) : null}
              <div className={BodyCSS.green_button}>
                <HouseCardButton msg='Online Tour' />
              </div>
            </div>

            <div className={BodyCSS.visitInfo}>
              <h4>{props.houseData.visitStats}</h4>
            </div>

            <div className={BodyCSS.uploader_id}>
              <h4>{props.houseData.listerUsername}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

