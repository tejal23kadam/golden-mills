const Elements = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience } = frontmatter;

  return (
    <section className="section">
      <div className="container text-center">

        <section className="mt-4">
          {markdownify("About Us", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            The Golden Mills is a trusted name in the food processing and export industry,
            proudly operating a modern flour grinding mill in Canada. We are committed to
            delivering high-quality, finely milled flour products that meet international
            standards of purity, consistency, and safety.
            With a strong foundation built on quality and reliability, The Golden Mills
            combines advanced milling technology with carefully sourced raw grains to
            produce flour that meets the diverse needs of global consumers and food
            businesses. Our Canadian operations enable us to maintain stringent quality
            control, superior hygiene standards, and efficient distribution across domestic
            and international markets.
          </div>
        </section>

        <section className="mt-4">
          {markdownify("Our Expertise", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            At The Golden Mills, we specialize in the processing and supply of premium flour
            products, serving wholesalers, distributors, retailers, and food service
            businesses.

            <p className="mt-4">Our capabilities include:</p>

            <ul>
              <li>Advanced flour milling using modern technology</li>
              <li>Consistent quality through standardized processes</li>
              <li>Bulk supply and export-ready packaging solutions</li>
              <li>Private labeling and customized packaging services</li>
              <li>Reliable distribution across Canada and global markets</li>
            </ul>
          </div>
        </section>

        <section className="mt-4">
          {markdownify("Global Approach", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            While our operations are based in Canada, our outlook is global. We work closely
            with partners worldwide to ensure timely delivery, consistent supply, and long
            term business relationships built on trust.


          </div>
        </section>

        <section className="mt-4">
          {markdownify("Our Commitment to Quality", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            Quality is at the core of everything we do. From sourcing raw grains to final
            packaging, we follow strict quality control measures to ensure purity, freshness,
            and consistency in every batch.
          </div>

          <div className="content text-left">
            Our facility adheres to international food safety and hygiene standards, ensuring
            our products consistently meet global expectations.
          </div>
        </section>


        <section className="mt-4">
          {markdownify("Why Choose The Golden Mills", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            <ul>
              <li>Advanced flour milling using modern technology</li>
              <li>Consistent quality through standardized processes</li>
              <li>Bulk supply and export-ready packaging solutions</li>
              <li>Private labeling and customized packaging services</li>
              <li>Reliable distribution across Canada and global markets</li>
            </ul>

          </div>
        </section>


        <section className="mt-4">
          {markdownify("Our Promise", "h1", "h1 text-left lg:text-[55px]")}

          <div className="content text-left">
            At The Golden Mills, we are committed to delivering quality you can trust and
            consistency you can rely on—ensuring that every product reflects our dedication
            to excellence.
          </div>
        </section>
      </div>
    </section>
  );
};

export default Elements;
