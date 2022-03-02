import Link from "next/link";
import Image from "next/image";

import styles from "./BlogPostThumbnail.module.scss";

function BlogPostThumbnail(props) {
  console.log(props.image);

  return (
    <Link {...props}>
      <div className={styles.blogPostThumbnailComponent}>
        <div
          className={styles.blogPostThumbnailImage}
          style={{
            backgroundImage: `url(${props.image})`,
          }}
        >
          <p className="text-white">{props.date}</p>
        </div>
        <div className="container-fluid mt-3">
          <h5 className={`lh-2 fw-bold ${styles.blogPostTitle}`}>{props.title}</h5>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostThumbnail;
