import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { getTaxonomy } from "@lib/taxonomyParser";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
const { blog_folder } = config.settings;
import { getSinglePage } from "@lib/contentParser";
import { FaFolder } from "react-icons/fa";
import { slugify } from "@lib/utils/textConverter";
import { BsArrowRightShort } from "react-icons/bs";

const Categories = ({ categories }) => {

  const { frontmatter } = categories;
 // const { form_action } = frontmatter;
  return (
    <Base title={"categories"}>
      <section className="section pt-0">
        {markdownify(
          "Inquiry",
          "h1",
          "h2 mb-16 bg-theme-light dark:bg-darkmode-theme-dark py-12 text-center lg:text-[55px]"
        )}
        <div className="row relative pb-16">

          <div className="contact-form-wrapper mx-auto rounded border border-border p-6 dark:border-darkmode-border lg:col-6">
            <h2>
              Submit Your Inquiry
              {/* <span className="ml-1.5 inline-flex items-center text-primary">
                Message

                <BsArrowRightShort />
              </span> */}
            </h2>
            <form
              className="contact-form mt-12"
              method="POST"
             // action={form_action}
            >
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="name">
                  Full name
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  type="text"
                  placeholder="Thomas Milano"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="email">
                  Email Address
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="email">
                  Phone Number
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="phone no"
                  type="number"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="subject">
                  Country
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="Country"
                  type="text"
                  placeholder="Canada"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="subject">
                  Subject
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <input
                  className="form-input w-full"
                  name="subject"
                  type="text"
                  placeholder="Blog advertisement"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-secondary" htmlFor="message">
                  Your Message Here
                  <small className="font-secondary text-sm text-primary">
                    *
                  </small>
                </label>
                <textarea
                  className="form-textarea w-full"
                  placeholder="Hello I’m Mr ‘x’ from………….."
                  rows="7"
                />
              </div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Send Now"
              />
            </form>
          </div>
        </div>
        {/* <div className="container pt-12 text-center">
          <ul className="row">
            {categories.map((category, i) => (
              <li
                key={`category-${i}`}
                className="mt-4 block lg:col-4 xl:col-3"
              >
                <Link
                  href={`/categories/${category.name}`}
                  className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-4 font-bold text-dark transition hover:bg-primary hover:text-white  dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white"
                >
                  <FaFolder className="mr-1.5" />
                  {humanize(category.name)} ({category.posts})
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");
  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.map(e => slugify(e)).includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });
  return {
    props: {
      categories: categoriesWithPostsCount,
    },
  };
};
