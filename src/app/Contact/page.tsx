import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen w-full text-xl font-medium px-6 py-8">
        <h1 className="text-5xl text-center font-bold mb-10">
          Contact Us
        </h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Have a Question? We're Here to Help.
          </h2>

          <p>
            Whether you're confused about a business process, found incorrect
            information, have a suggestion for a new business guide, or simply
            want to get in touch, we'd love to hear from you.
          </p>

          <p className="mt-3">
            UIB (Underrated Indian Businesses) is built to make business
            learning simple and practical. Your feedback helps us improve our
            guides and create better step-by-step resources for future
            entrepreneurs.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">
            Contact Information
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold">📧 Email</h3>
              <a
                href="mailto:mathursarvesh722@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mathursarvesh722@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">📱 WhatsApp</h3>
              <p>+91 7340100113</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">🌐 Website</h3>
              <p>www.yourwebsite.com</p>
            </div>
          </div>
        </section>

        {/* Reasons to Contact */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">
            What Can You Contact Us About?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Business Guide Questions
              </h3>

              <p>
                Need clarification about a sourcing process, selling strategy,
                licenses, packaging, or scaling a business? Send us your
                questions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Report Incorrect Information
              </h3>

              <p>
                Found outdated pricing, incorrect details, broken links, or
                inaccurate information in a guide? Let us know so we can fix it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Suggest a New Business
              </h3>

              <p>
                Know an underrated Indian business that deserves a detailed
                step-by-step guide? Tell us about it.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Partnership & Collaboration
              </h3>

              <p>
                Interested in contributing knowledge, sharing industry
                expertise, or collaborating with UIB? We'd be happy to discuss
                opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                General Feedback
              </h3>

              <p>
                Have ideas to improve the website experience? We welcome all
                suggestions.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6">
            Before Contacting Us
          </h2>

          <ul className="list-disc pl-8 space-y-3">
            <li>
              We provide educational and informational business guides.
            </li>
            <li>
              We do not provide legal, financial, or investment advice.
            </li>
            <li>
              Market prices, profits, and business conditions may vary by
              location.
            </li>
            <li>
              Users should conduct their own research before making business
              decisions.
            </li>
          </ul>
        </section>

        {/* Commitment */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Our Commitment
          </h2>

          <p>
            We aim to respond to all genuine inquiries as quickly as possible
            and continuously improve UIB for aspiring entrepreneurs across
            India.
          </p>

          <p className="mt-4">
            Thank you for being part of the UIB community.
          </p>

          <p className="mt-4 text-2xl font-bold">
            Learn. Start. Grow.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;