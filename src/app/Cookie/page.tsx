import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen max-w-5xl mx-auto px-6 py-8 text-xl font-medium">
        <h1 className="text-5xl text-center font-bold mb-10">
          Cookie Policy
        </h1>

        {/* What Are Cookies */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            What Are Cookies?
          </h2>

          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites function properly and improve the user
            experience.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            How UIB Uses Cookies
          </h2>

          <p className="mb-4">
            UIB may use cookies to:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Remember user preferences.</li>
            <li>Improve website performance.</li>
            <li>Understand how visitors use the website.</li>
            <li>Analyze traffic and page performance.</li>
            <li>Maintain website security.</li>
          </ul>
        </section>

        {/* Third Party Services */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Third-Party Services
          </h2>

          <p>
            We may use trusted third-party services such as analytics tools,
            hosting providers, or performance monitoring services. These
            services may place their own cookies on your device.
          </p>
        </section>

        {/* Managing Cookies */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Managing Cookies
          </h2>

          <p className="mb-4">
            Most web browsers allow you to:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>View stored cookies.</li>
            <li>Delete cookies.</li>
            <li>Block cookies.</li>
            <li>Receive notifications when cookies are used.</li>
          </ul>

          <p className="mt-4">
            Disabling cookies may affect certain website features and
            functionality.
          </p>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Updates to This Policy
          </h2>

          <p>
            We may update this Cookie Policy from time to time. Any changes
            will be posted on this page. Continued use of the website after
            updates indicates acceptance of the revised policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Contact Us
          </h2>

          <p>
            If you have any questions regarding this Cookie Policy, please
            contact us through the Contact Us page.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;