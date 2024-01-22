import React, { useEffect, useState } from "react";

import styles from "./SingleCard.module.css";
import { calculateHeight } from "../util";

const SingleCard = ({
  title,
  subTitle,
  list,
  imgLink,
  color,
  numberOfItems,
}) => {
  const [titleContainerHeight, setTitleContainerHeight] = useState("auto");
  const [listContainerHeight, setListContainerHeight] = useState("auto");
  useEffect(() => {
    calculateHeight("#titleContainer", setTitleContainerHeight);
    calculateHeight("#listContainer", setListContainerHeight);
  }, [titleContainerHeight, listContainerHeight]);
  return (
    <div
      className={`${styles.cardWrapper} ${styles[`items-${numberOfItems}`]}  ${
        numberOfItems > 6 && styles[`items-6`]
      }`}
    >
      <div className={styles.card}>
        <div
          className={styles.titleContainer}
          id="titleContainer"
          style={{
            background: color,
            height: titleContainerHeight,
          }}
        >
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.cardInner}>
          <div
            className={styles.listContainer}
            id="listContainer"
            style={{ height: listContainerHeight }}
          >
            {list.map((el, i) => (
              <div className={styles.list} key={i}>
                {el.id && <p className={styles.id}> {el.id}</p>}
                {el.icon && <p className={styles.iconContainer}>{el.icon}</p>}

                <p className={styles.info}>{el.info}</p>
              </div>
            ))}
          </div>
          <div
            className={styles.dashedBorder}
            style={{ borderColor: color }}
          ></div>

          <p className={styles.subTitle}>{subTitle}</p>

          <img src={imgLink} alt="img" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
