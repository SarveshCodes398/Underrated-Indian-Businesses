import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen max-w-5xl mx-auto px-6 py-8 text-xl font-medium">
        <h1 className="text-5xl text-center font-bold mb-10">
          Terms & Conditions
        </h1>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to UIB (Underrated Indian Businesses)
          </h2>

          <p>
            By using this website, you agree to the following Terms &
            Conditions. Please read them carefully before relying on any
            information provided on this platform.
          </p>
        </section>

        {/* Educational Purpose */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            1. Educational Purpose Only
          </h2>

          <p>
            UIB is an educational and informational platform.
          </p>

          <p className="mt-3">
            The content on this website is designed to help users understand
            different business opportunities, sourcing methods, selling
            strategies, licensing requirements, and growth processes.
          </p>

          <p className="mt-3">
            We provide guidance, not guarantees.
          </p>
        </section>

        {/* No Guarantee */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            2. No Guarantee of Profit or Success
          </h2>

          <p>
            Starting a business always involves risk.
          </p>

          <p className="mt-3">
            UIB does not guarantee that you will:
          </p>

          <ul className="list-disc pl-8 mt-3 space-y-2">
            <li>Make money</li>
            <li>Earn profits</li>
            <li>Recover investments</li>
            <li>Achieve business success</li>
            <li>Find customers</li>
            <li>Secure suppliers</li>
          </ul>

          <p className="mt-4">
            Your results depend on many factors including your location,
            effort, market conditions, competition, product quality, pricing,
            and business decisions.
          </p>

          <p className="mt-3">
            Any profit examples mentioned on this website are for educational
            purposes only and should not be considered guaranteed outcomes.
          </p>
        </section>

        {/* Government Processes */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            3. Government Processes May Take Time
          </h2>

          <p>
            Many business activities require government registrations,
            approvals, or licenses such as:
          </p>

          <ul className="list-disc pl-8 mt-3 space-y-2">
            <li>GST Registration</li>
            <li>FSSAI License</li>
            <li>IEC (Import Export Code)</li>
            <li>Business Registrations</li>
            <li>Other local permits and approvals</li>
          </ul>

          <p className="mt-4">
            Government processing times vary by department, location,
            workload, and policy changes.
          </p>

          <p className="mt-3">
            UIB is not responsible for delays, rejections, verification
            issues, technical problems, or changes in government procedures.
          </p>
        </section>

        {/* Accuracy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            4. Information Accuracy
          </h2>

          <p>
            We strive to keep all information accurate and updated.
          </p>

          <p className="mt-3">
            However:
          </p>

          <ul className="list-disc pl-8 mt-3 space-y-2">
            <li>Market prices change regularly.</li>
            <li>Government rules can change without notice.</li>
            <li>Business regulations may vary by state or district.</li>
          </ul>

          <p className="mt-4">
            Users should independently verify important information before
            making business decisions.
          </p>
        </section>

        {/* User Responsibility */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            5. User Responsibility
          </h2>

          <p>
            All decisions made using information from this website are solely
            the responsibility of the user.
          </p>

          <p className="mt-3">
            Before investing money, purchasing equipment, signing agreements,
            or applying for licenses, users should conduct their own research
            and seek professional advice when necessary.
          </p>
        </section>

        {/* Advice Disclaimer */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            6. No Legal, Financial, or Investment Advice
          </h2>

          <p>
            The information on UIB should not be considered:
          </p>

          <ul className="list-disc pl-8 mt-3 space-y-2">
            <li>Legal advice</li>
            <li>Financial advice</li>
            <li>Tax advice</li>
            <li>Investment advice</li>
            <li>Professional business consulting</li>
          </ul>

          <p className="mt-4">
            For official guidance, users should consult qualified
            professionals or relevant government departments.
          </p>
        </section>

        {/* Liability */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            7. Limitation of Liability
          </h2>

          <p>
            UIB, its owners, contributors, and team members shall not be held
            responsible for:
          </p>

          <ul className="list-disc pl-8 mt-3 space-y-2">
            <li>Business losses</li>
            <li>Financial losses</li>
            <li>Delayed registrations</li>
            <li>Rejected applications</li>
            <li>Lost opportunities</li>
            <li>Market fluctuations</li>
            <li>Supplier disputes</li>
            <li>Customer disputes</li>
            <li>
              Any direct or indirect damages arising from the use of this
              website
            </li>
          </ul>

          <p className="mt-4">
            Use of this website is entirely at your own risk.
          </p>
        </section>

        {/* Changes */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            8. Changes to These Terms
          </h2>

          <p>
            UIB reserves the right to modify or update these Terms &
            Conditions at any time without prior notice.
          </p>

          <p className="mt-3">
            Continued use of the website after changes are made constitutes
            acceptance of the updated terms.
          </p>
        </section>

        {/* Promise */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Our Promise
          </h2>

          <p>
            We will always try to provide simple, practical, and
            beginner-friendly business guidance.
          </p>

          <p className="mt-3">
            However, success depends on your actions—not on this website.
          </p>

          <p className="mt-3">
            UIB can guide you through the process, but we cannot guarantee
            the outcome.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;