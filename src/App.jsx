import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Business, CTA, Footer, Navbar, Hero, Subsection, CaseStudy1 } from "./components";
import Portfolio from "./components/Portfolio";
import { web_3, web_1, web_2 } from "./assets";
import Services from "./components/Services";
import PortfolioText from "./components/PortfolioText";
import Subsection_2 from "./components/Subsection_2";
import Pricing from "./components/Pricing";
import ThankYou from "./components/ThankYou"; 
import CustomPackage from "./components/CustomPackage";
import FAQs from "./components/FAQs";

const faqs = [
  { question: 'Who owns the domain and hosting?', answer: 'The domain and hosting are entirely under your control. We’ll set everything up for you, but you’ll retain ownership and management rights.' },
  { question: 'How does the pricing work?', answer: 'Since we don’t offer domain and hosting services directly, the pricing will be determined by the service provider you choose. We’ll ensure your setup is seamless, and you only pay what the provider charges.' },
  { question: 'Can you recommend a service provider?', answer: 'Absolutely! We can recommend reliable domain and hosting providers that align with your needs and budget.' }
];

const App = () => (
  <Router>
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={`bg-grey_new ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>
              <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <CTA />
                  <Subsection section="Portfolio" id="portfolio" />
                  <PortfolioText />
                  <Portfolio />
                  <Subsection section="Pricing" id="pricing" />
                  <Services />
                  <CustomPackage
                  title="Custom and Corporate Web Design Package"
                  description="At Primech Agency, we specialize in creating custom and corporate web design solutions tailored to your business needs. Contact us for a customized quote that fits your exact requirements."
                  subTitle="Get a Tailored Website Design Solution: Call Us or Request a Free Quote Today!"
                  showButton={true}
                  bulletPoints={[
                    "Flexible Pricing: Prices may vary based on additional features or services.",
                    "Domain & Hosting Setup: We don't provide our own domain and hosting services, but we will expertly set up your domain and hosting. The cost will depend on your chosen service provider's pricing."
                  ]}/>
                  <CustomPackage
                  title="Why Choose Our Web Design Services?"
                  description="Primech Agency is committed to delivering top-quality custom web design services at affordable prices. Explore our value-packed web design packages:"
                  bulletPoints={[
                    "Custom Design: Fully customized designs that reflect your brand's unique identity.",
                    "Affordable Pricing: Packages starting at just 200$, offering exceptional value.",
                    "Brand Identity: We create visually appealing websites that enhance your brand's online presence.",
                    "Advanced Technology: We use the latest technologies to build highly functional, fast, and secure websites.",
                    "Fast Delivery: Quick turnaround times to ensure your project is completed on time."
                  ]}/>
                  <FAQs title="Domain FAQs" faqs={faqs} />
                  <Subsection section="Case Studies" id="case" />
                  <CaseStudy1
                    title="E-Commerce Solution for Retail Business"
                    description="We developed a fully customized e-commerce platform for a retail business, increasing their online sales by 40% in the first quarter. Our website development services included:"
                    imgSrc={web_1}
                    subTitle="Case Study 1"
                    bulletPoints={[
                      "-Custom web design",
                      "-Secure payment gateway integration",
                      "-SEO optimization",
                      "-Mobile responsiveness"
                    ]}
                  />
                  <CaseStudy1
                    title="CMS Development for Educational Institution"
                    description="Our team provided a leading educational institution with a user-friendly CMS, streamlining content management and improving user engagement. Key features included:"
                    imgSrc={web_2}
                    subTitle="Case Study 2"
                    bulletPoints={[
                      "-Custom CMS development",
                      "-Intuitive user interface",
                      "-Content migration",
                      "-Training and support"
                    ]}
                  />
                  <CaseStudy1
                    title="Corporate Website for Financial Firm"
                    description="We created a professional and responsive website for a financial services firm, enhancing their online credibility and client engagement. Our web development services involved:"
                    imgSrc={web_3}
                    subTitle="Case Study 3"
                    bulletPoints={[
                      "-Professional web development",
                      "-Custom graphic design",
                      "-SEO-friendly architecture",
                      "-Secure data handling"
                    ]}
                  />
                  <Subsection_2
                    section="Comprehensive Web Development Services"
                    description="We offer a wide range of web developer services to cater to all your needs. Whether you need a CMS development company or require web programming company expertise, we have you covered."
                  />
                  <Business />
                </div>
              </div>
            </>
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/Thank-You" element={<ThankYou />} />
      </Routes>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
