import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

const arr = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/18391462/pexels-photo-18391462.jpeg',
    title: 'Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex omnis rem molestias.'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/18391462/pexels-photo-18391462.jpeg',
    title: 'Lorem, ipsum. Lorem, ipsum.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex omnis rem molestias.'
  }
];

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      {arr.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              priority={true}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
