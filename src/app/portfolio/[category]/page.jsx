import React from "react";
import Image from "next/image";

import Button from "@/components/Button/Button";

import styles from "./page.module.css";

const arr = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam quod a error magni labore dolorem quas reiciendis temporibus officia.',
    image: 'https://images.pexels.com/photos/18193622/pexels-photo-18193622.jpeg'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa veniam quod a error magni labore dolorem quas reiciendis temporibus officia.',
    image: 'https://images.pexels.com/photos/18098210/pexels-photo-18098210.jpeg'
  }
];

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {arr.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              sizes="30vw"
              priority={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;