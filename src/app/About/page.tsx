import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen w-full text-base sm:text-lg md:text-xl font-medium px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-6 sm:mb-10">
          About UIB (Underrated Indian Businesses)
        </h1>

        {/* What is this website */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            What is this website?
          </h2>

          <p>
            UIB is an online step-by-step guidebook. We do not sell products,
            we do not take commissions, and we do not give complicated business
            theories.
          </p>

          <p className="mt-3">
            Our only job is to guide you, step-by-step, on how to start and
            grow a business using simple, highly profitable Indian items that
            most people ignore.
          </p>
        </section>

        {/* How does our website guide you */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            How does our website guide you?
          </h2>

          <p className="mb-6">
            For every business listed on this site, we break everything down
            into clear, practical processes so you can start even if you have
            zero experience. We tell you exactly what it is and how to do it
            across four main stages:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                1. Sourcing Process (Where to get the item)
              </h3>

              <p>
                <strong>What it is:</strong> Finding your raw material at the
                cheapest possible rate.
              </p>

              <p className="mt-2">
                <strong>How to do it:</strong> We give you the exact
                steps—whether you need to grow it yourself, visit your local
                wholesale Sabzi Mandi or Anaj Mandi at 4:00 AM, or buy directly
                from local farmers.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                2. Local Business Process (Selling in your town)
              </h3>

              <p>
                <strong>What it is:</strong> Making your first profits locally
                with zero risks.
              </p>

              <p className="mt-2">
                <strong>How to do it:</strong> We guide you on how to pack,
                clean, and sell the item directly to local shops, neighbors, or
                WhatsApp groups. We explicitly tell you how to do this without
                wasting money on legal paperwork or licenses at the start.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                3. National Process (Selling across India via Apps)
              </h3>

              <p>
                <strong>What it is:</strong> Scaling up your business to sell in
                other cities and states using mobile apps.
              </p>

              <p className="mt-2">
                <strong>How to do it:</strong> We walk you through the exact
                digital process—which mobile apps to download (like Bijak,
                KisanMandi, etc.), and the exact steps to get your basic GST
                number and FSSAI food license only when you are ready.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                4. International Process (Selling globally via Amazon)
              </h3>

              <p>
                <strong>What it is:</strong> Converting your product so it can
                be shipped overseas for maximum profit.
              </p>

              <p className="mt-2">
                <strong>How to do it:</strong> We show you how to change raw
                items into long-lasting products (like drying them or packing
                them safely) so you can list them on Amazon Global. We give you
                the clear steps to get your Export License (IEC) without getting
                confused by heavy paperwork.
              </p>
            </div>
          </div>
        </section>

        {/* Businesses */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            The 4 Underrated Businesses We Guide You Through
          </h2>

          <p className="mb-6">
            Click on any of the sections below on our home page to see the exact
            step-by-step process:
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Okra (Bhindi)</h3>
              <p>
                Moving from fresh mandi sacks to national apps and
                frozen/packaged exports.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Refined Oil</h3>
              <p>
                Sourcing oilseeds, setting up a local small-scale mini mill,
                crushing, and bottling.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">Foxnut (Makhana)</h3>
              <p>
                Sourcing raw seeds, roasting and cleaning processes, and selling
                branded snacks on Amazon.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Tragacanth Gum (Gond Katira)
              </h3>
              <p>
                Sourcing natural herbal resin from traders, cleaning, and
                packaging it as a premium wellness product.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;