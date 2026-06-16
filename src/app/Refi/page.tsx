import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
  <Header/>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

    {/* Hero Section */}
    <section className="text-center mb-10 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        🌻 Refined Oil Business Guide
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Learn how to start, scale, package, brand, and export refined oil
        businesses from local markets to international buyers.
      </p>
    </section>

    {/* Important Notice */}
    <section className="mb-8 sm:mb-12">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-6 rounded-xl">
        <h3 className="font-bold text-xl mb-2">
          ⚠ Important Notice
        </h3>

        <p>
          Unlike vegetables and some agricultural products, edible oil requires
          FSSAI registration even at the local level. This helps ensure food
          safety and prevents adulteration.
        </p>
      </div>
    </section>

   
    {/* Step 1 */}
    <section className="mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        🌱 Step 1: Sourcing Oil Seeds
      </h2>

      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
        <ul className="space-y-4 text-base sm:text-lg">
          <li>
            <strong>What it is:</strong> Buying mustard, sunflower,
            sesame, soybean, or groundnut seeds.
          </li>

          <li>
            <strong>Where to Buy:</strong> Local Anaj Mandis,
            wholesale grain markets, or directly from farmers.
          </li>

          <li>
            <strong>Alternative:</strong> Purchase bulk unrefined oil
            from established oil mills.
          </li>

          <li>
            <strong>Goal:</strong> Acquire quality raw material at the
            lowest possible price.
          </li>
        </ul>
      </div>
    </section>

    {/* Step 2 */}
    <section className="mb-10 sm:mb-16">
      <div className="border rounded-2xl p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          🏪 Step 2: Local Business
        </h2>

        <ul className="space-y-4 text-base sm:text-lg">
          <li>✅ Sell directly to local households.</li>
          <li>✅ Supply grocery stores and kirana shops.</li>
          <li>✅ Supply local dhabas and restaurants.</li>
          <li>✅ Use a mini oil expeller machine.</li>
          <li>✅ Sell loose oil or in tin containers.</li>
          <li>✅ Basic FSSAI Registration is mandatory.</li>
        </ul>
      </div>
    </section>

    {/* Step 3 */}
    <section className="mb-10 sm:mb-16">
      <div className="border rounded-2xl p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          🇮🇳 Step 3: National Business
        </h2>

        <ul className="space-y-4 text-base sm:text-lg">
          <li>📦 Launch your own refined oil brand.</li>
          <li>📱 Sell through Amazon, Flipkart, Udaan, and supermarkets.</li>
          <li>📄 FSSAI State License required.</li>
          <li>📄 GST Registration required.</li>
          <li>🏆 Agmark Certification recommended.</li>
          <li>🏭 Use bottle filling and pouch sealing machines.</li>
          <li>🏦 Business Current Account recommended.</li>
        </ul>
      </div>
    </section>

    {/* Step 4 */}
    <section className="mb-10 sm:mb-16">
      <div className="border rounded-2xl p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          🌎 Step 4: International Export
        </h2>

        <ul className="space-y-4 text-base sm:text-lg">
          <li>🌍 Export premium cold-pressed oils.</li>
          <li>🌍 Target NRI and international markets.</li>
          <li>🌍 Use leak-proof export packaging.</li>
          <li>🌍 FSSAI Central License required.</li>
          <li>🌍 Import Export Code (IEC) required.</li>
          <li>🌍 IOPEPC registration required.</li>
        </ul>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <strong>Important:</strong> Export quality packaging is essential
          to prevent leakage and maintain product quality during transit.
        </div>
      </div>
    </section>

    {/* Government Links */}
    <section className="mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        🏛 Official Government Portals
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <a
          href="https://foscos.fssai.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 sm:p-6 rounded-xl hover:shadow-lg"
        >
          FSSAI Registration
        </a>

        <a
          href="https://reg.gst.gov.in/registration/"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 sm:p-6 rounded-xl hover:shadow-lg"
        >
          GST Registration
        </a>

        <a
          href="https://www.dgft.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 sm:p-6 rounded-xl hover:shadow-lg"
        >
          IEC Registration
        </a>

        <a
          href="https://iiopepc.org"
          target="_blank"
          rel="noopener noreferrer"
          className="border p-4 sm:p-6 rounded-xl hover:shadow-lg"
        >
          IOPEPC Registration
        </a>

      </div>
    </section>

    {/* Affiliate Section */}
    <section className="mb-10 sm:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
        💰 Recommended Tools & Equipment
      </h2>

      <p className="text-lg text-gray-600 mb-6 sm:mb-8">
        These tools can help streamline your oil business operations.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Oil Expeller Machine
          </h3>

          <p className="text-gray-600 mb-4">
            Start local oil extraction operations.
          </p>

          <a
            href="https://dir.indiamart.com/impcat/oil-expellers.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
          >
            View Product
          </a>
        </div>

        <div className="border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Digital Weighing Scale
          </h3>

          <p className="text-gray-600 mb-4">
            Ensure accurate measurements and packaging.
          </p>

          <a
            href="YOUR_AMAZON_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
          >
            View Product
          </a>
        </div>

        <div className="border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Bottle Sealing Machine
          </h3>

          <p className="text-gray-600 mb-4">
            Professional packaging for national sales.
          </p>

          <a
            href="https://www.swissonline.co.in/bottle-sealing-machine.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
          >
            View Product
          </a>
        </div>

        <div className="border rounded-2xl p-4 sm:p-6 hover:shadow-lg transition">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Trademark & Legal Help
          </h3>

          <p className="text-gray-600 mb-4">
            Register and protect your brand.
          </p>

          <a
            href="https://www.onlinelegalindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block"
          >
            Get Assistance
          </a>
        </div>

      </div>
    </section>

  </div>

  <Footer/>
</>
  )
}

export default page
