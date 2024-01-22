import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { msgBox } from "../../images";
import styles from "./AllCards.module.css";
import SingleCard from "../SingleCard/SingleCard";
const AllCards = () => {
  const data = [
    {
      title: "Explore",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Checking interest rates",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Talking to friends and family",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Getting referrals",
        },
      ],
      subTitle: "“Is this the right time to buy?”",
      imgLink: msgBox,
      color: "#5753f4",
    },
    {
      title: "Research",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Collecting lender offers",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Browsing listings",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Looking up school ratings",
        },
      ],
      subTitle: "“There seems to be more costs involved than i expected!”",
      imgLink: msgBox,
      color: "#2929ce",
    },
    {
      title: "Purchase",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Making an offer",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Arranging inspections",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Signing paperwork",
        },
      ],
      subTitle: "“This is so stressful. I hope they accept our Offer.”",
      imgLink: msgBox,
      color: "#000075",
    },
    {
      title: "Own",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Booking movers",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Finalizing paperwork",
        },
        { id: "", icon: <FontAwesomeIcon icon={faCheck} />, info: "Moving in" },
      ],
      subTitle: "“I can't believe i've finally bought a home. ”",
      imgLink: msgBox,
      color: "#00003f",
    },
    {
      title: "Purchase",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Making an offer",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Arranging inspections",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Signing paperwork",
        },
      ],
      subTitle: "“This is so stressful. I hope they accept our Offer.”",
      imgLink: msgBox,
      color: "#000075",
    },
    {
      title: "Own",
      list: [
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Booking movers",
        },
        {
          id: "",
          icon: <FontAwesomeIcon icon={faCheck} />,
          info: "Finalizing paperwork",
        },
        { id: "", icon: <FontAwesomeIcon icon={faCheck} />, info: "Moving in" },
      ],
      subTitle: "“I can't believe i've finally bought a home. ”",
      imgLink: msgBox,
      color: "#00003f",
    },
  ];
  return (
    <section className={styles.mainWrapper}>
      <div className={[styles.wrapper, "container"].join(" ")}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Experience Map:</h1>

          <h4 className={styles.subHeading}>Buying a Home</h4>
        </div>

        <div className={styles.allCards}>
          {data.map((cardData, i) => (
            <SingleCard {...cardData} key={i} numberOfItems={data.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCards;
