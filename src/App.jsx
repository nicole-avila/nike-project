import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relativ">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <h1
      style={{
        fontSize: "2rem",
        color: "hotpink",
        textTransform: "capitalize",
      }}
    >
      ...under process...
    </h1>
    {/* <section className="padding">
<PopularProducts/>
</section>
<section className="padding">
<SuperQuality/>
</section>
<section className="padding-x">
<Services/>
</section>
<section className="padding">
<SpecialOffers/>
</section>
<section className="bg-pale-blue padding">
<CustomerReviews />
</section>
<section className="padding-x sm:py-32 py-16 w-full">
<Subscribe />
</section> */}
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
