import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-lg md:text-xl font-medium">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-10">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Introduction
          </h2>

          <p>
            At UIB (Underrated Indian Businesses), we respect your privacy and
            are committed to protecting your personal information.
          </p>

          <p className="mt-3">
            This Privacy Policy explains what information we collect, how we use
            it, and how we protect it.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Information We Collect
          </h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-3">
              Information You Provide
            </h3>

            <p className="mb-4">
              When you contact us, we may collect:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number (if provided)</li>
              <li>Message details</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Automatically Collected Information
            </h3>

            <p className="mb-4">
              When you visit our website, certain information may be collected
              automatically, including:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Browser type</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral sources</li>
            </ul>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            How We Use Your Information
          </h2>

          <p className="mb-4">
            We may use collected information to:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Respond to inquiries.</li>
            <li>Improve website performance.</li>
            <li>Understand visitor behavior.</li>
            <li>Enhance user experience.</li>
            <li>Maintain website security.</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Information Sharing
          </h2>

          <p>
            UIB does not sell, rent, or trade your personal information to
            third parties.
          </p>

          <p className="mt-4">
            We may share information only when:
          </p>

          <ul className="list-disc pl-8 mt-4 space-y-2">
            <li>Required by law.</li>
            <li>Necessary to protect our legal rights.</li>
            <li>
              Required to maintain website operations through trusted service
              providers.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Data Security
          </h2>

          <p>
            We take reasonable measures to protect personal information from
            unauthorized access, misuse, disclosure, or loss.
          </p>

          <p className="mt-3">
            However, no internet-based service can guarantee complete security.
          </p>
        </section>

        {/* External Links */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            External Links
          </h2>

          <p>
            Our website may contain links to third-party websites,
            applications, or services.
          </p>

          <p className="mt-3">
            UIB is not responsible for the privacy practices or content of
            external websites.
          </p>

          <p className="mt-3">
            Users should review the privacy policies of those websites
            separately.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Children's Privacy
          </h2>

          <p>
            UIB is not intended for children under 13 years of age. We do not
            knowingly collect personal information from children.
          </p>
        </section>

        {/* User Rights */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Your Rights
          </h2>

          <p className="mb-4">
            Depending on applicable laws, users may request:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Access to their personal information.</li>
            <li>Correction of inaccurate information.</li>
            <li>Deletion of personal information.</li>
            <li>Information about how their data is used.</li>
          </ul>
        </section>

        {/* Updates */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page.
          </p>

          <p className="mt-3">
            Continued use of the website after updates have been published
            indicates acceptance of the revised policy.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Contact Us
          </h2>

          <p>
            For privacy-related questions or requests, please contact us through
            the Contact Us page.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;