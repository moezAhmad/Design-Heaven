import React, { useContext } from "react";
import "../../../App.scss"
import { HeadingSecondary } from "../../../components/heading-secondary/heading-secondary.component"
import { Btn_3 } from "../../../components/buttons/btn_3/btn_3.component"
import { NoRouteCardList } from "../../../components/card-list/noroute_card-list.component";
import { CompetitionDetailsContext } from "../../../pages/main.component";
const data1 = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
  },

]

export const Winner = () => {
  const { winner } = useContext(CompetitionDetailsContext)
  const [winnerData, setWinnerData] = winner
  const { competitionDetails } = useContext(CompetitionDetailsContext)
  const [compDetails, setCompDetails] = competitionDetails
  console.log(winner)
  return (
    <div>
      <div className="dashboard--designer__header u-margin-bottom-small">
        <HeadingSecondary
          text="Designer name"
          extendedStyle={`heading-secondary--black heading-secondary--1`}
          position="testimonials-past-format" />
      </div>

      <div className="winner__grid">
        <div className="winner__grid__images">
          <NoRouteCardList designs={winner[0].submissionUrls} extendedStyle="card-list--winner" />
        </div>
        <div>
          <p className="winner__grid__brief u-margin-bottom-small">Brief</p>
          <div className="winner__grid__brief__text">{`${winner[0].Brief}`}</div>
          <Btn_3 text='Select Winner' extendedStyle="btn_3--green btn_3--clickable u-margin-top-small" />
        </div>
      </div>

    </div>
  )
}