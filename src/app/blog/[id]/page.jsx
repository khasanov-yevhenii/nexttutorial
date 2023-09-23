import React from "react";
import Image from "next/image";

import styles from "./page.module.css";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>data.title</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, nam quaerat ab, maiores perspiciatis soluta modi cumque quidem itaque sit dicta distinctio reprehenderit odit. Vitae quam dolorem earum ut blanditiis magni cum modi, quae, enim nisi delectus nemo laboriosam cumque. Reprehenderit labore nihil molestias, iusto beatae optio sapiente ipsam exercitationem!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>data.username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam deserunt iure minima nesciunt temporibus molestiae aliquam! Possimus sint ullam eveniet, debitis at voluptate aut soluta temporibus suscipit sapiente similique aliquid explicabo inventore tempore veritatis blanditiis reiciendis consequuntur aspernatur nostrum praesentium impedit expedita voluptas magni fugit. Autem enim expedita modi quam.
         <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus sapiente mollitia, ex praesentium, reprehenderit dolorem laboriosam corrupti veniam voluptatem, perspiciatis repellendus necessitatibus eius iusto magni! Tempore quasi delectus facilis, hic, odit ipsa reiciendis nam totam earum blanditiis rem numquam illo voluptatum debitis adipisci dolor eum magnam architecto vitae non! Maxime velit dolorum numquam ea! Earum alias facere expedita delectus! Ipsam quibusdam reprehenderit unde repellendus omnis? Assumenda quidem dolore doloremque exercitationem saepe, at optio minus? Tempora harum labore quaerat non rerum repellendus doloribus similique placeat facilis sint asperiores quod veritatis dolorem maxime, atque deleniti maiores vero, fugiat, suscipit illum? Vel.
         <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut ipsa pariatur adipisci explicabo nostrum obcaecati. Cumque, voluptatem molestias cupiditate odit doloribus necessitatibus incidunt recusandae veritatis mollitia, sapiente, modi perspiciatis sed laudantium iure temporibus harum earum? Aspernatur ea odit veritatis nisi doloremque magnam possimus quibusdam beatae placeat laboriosam architecto, nobis eum omnis fugiat aliquid deserunt sequi. Atque excepturi totam sit eaque ad! Fuga praesentium rem enim cum, ab quaerat porro, cumque non, nostrum ad quos?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
