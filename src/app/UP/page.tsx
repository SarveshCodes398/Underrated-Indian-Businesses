import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen max-w-5xl mx-auto px-6 py-8 text-xl font-medium">
        <h1 className="text-5xl text-center font-bold mb-10">
          User Policy
        </h1>

        {/* Welcome */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to UIB
          </h2>

          <p>
            By accessing and using UIB (Underrated Indian Businesses), you
            agree to follow this User Policy. These guidelines help ensure a
            safe, respectful, and productive experience for all users of the
            platform.
          </p>
        </section>

        {/* Respectful Use */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Respectful Use
          </h2>

          <p className="mb-4">
            Users must use this website responsibly and lawfully.
          </p>

          <p className="mb-4">
            You agree not to:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Misuse the website.</li>
            <li>Attempt unauthorized access to systems or data.</li>
            <li>
              Upload harmful software, viruses, malware, or malicious code.
            </li>
            <li>
              Copy or reproduce website content for commercial purposes
              without permission.
            </li>
            <li>
              Use information from the website for illegal activities.
            </li>
          </ul>
        </section>

        {/* User Responsibility */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            User Responsibility
          </h2>

          <p className="mb-4">
            Users are responsible for:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li>Verifying business information independently.</li>
            <li>Following local laws and regulations.</li>
            <li>Making their own business decisions.</li>
            <li>
              Conducting proper research before investing money.
            </li>
          </ul>

          <p className="mt-4">
            UIB provides educational guidance only and does not make
            decisions on behalf of users.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Intellectual Property
          </h2>

          <p>
            All content, text, branding, designs, graphics, and business
            guides published on UIB are protected by applicable intellectual
            property laws.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">
              Users May:
            </h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>Read content.</li>
              <li>Share links to pages.</li>
              <li>Use information for personal learning.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-3">
              Users May Not:
            </h3>

            <ul className="list-disc pl-8 space-y-2">
              <li>Republish content as their own.</li>
              <li>Sell copied content.</li>
              <li>Create duplicate websites using UIB content.</li>
              <li>Remove copyright or ownership notices.</li>
            </ul>
          </div>
        </section>

        {/* Suspension */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Suspension of Access
          </h2>

          <p>
            We reserve the right to restrict, suspend, or permanently block
            access to users who violate this policy, misuse the website, or
            engage in activities that may harm the platform or its users.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Changes to This Policy
          </h2>

          <p>
            This User Policy may be updated at any time without prior notice.
            Continued use of the website after updates are published
            constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* Final Note */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Our Goal
          </h2>

          <p>
            UIB exists to help aspiring entrepreneurs discover and understand
            underrated business opportunities in India through simple,
            practical, and beginner-friendly guidance.
          </p>

          <p className="mt-4">
            We appreciate your cooperation in keeping the platform useful,
            respectful, and accessible for everyone.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;