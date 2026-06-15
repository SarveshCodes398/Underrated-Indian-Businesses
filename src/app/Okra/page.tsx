import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header/>
    <div className="max-w-6xl mx-auto px-6 py-12">

  {/* Hero Section */}
  <section className="text-center mb-16">
    <h1 className="text-6xl font-extrabold mb-4">
      Okra (Bhindi) Business Guide
    </h1>

    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Learn how to start, scale, and legally grow an Okra business from local
      selling to national distribution and international exports.
    </p>
  </section>

  {/* Step 1 */}
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-6">
      🌾 Step 1: Sourcing Your Bhindi
    </h2>

    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-4">
        Option A: The Growing Route
      </h3>

      <ul className="space-y-4 text-lg">
        <li>
          <strong>How:</strong> Plant premium varieties like Arka Anamika
          or Pusa A4.
        </li>

        <li>
          <strong>Why:</strong> Freshest possible quality and higher profit
          margins.
        </li>

        <li>
          <strong>Investment:</strong> Seeds, irrigation, fertilizers,
          and basic farm maintenance.
        </li>

        <li>
          <strong>Best For:</strong> Farmers and land owners looking for
          long-term profits.
        </li>
      </ul>
    </div>
  </section>

  {/* Step 2 */}
  <section className="mb-16">
    <h2 className="text-4xl font-bold mb-6">
      🏢 Step 2: Legal & Scaling Roadmap
    </h2>

    <p className="text-lg mb-8">
      As your business grows, the registrations and licenses required
      also increase. Follow the roadmap below.
    </p>

    {/* Level 1 */}
    <div className="border rounded-2xl p-8 mb-8">
      <h3 className="text-2xl font-bold mb-4">
        Level 1: Selling Locally
      </h3>

      <ul className="space-y-3">
        <li>✅ No registration required.</li>
        <li>✅ Sell through WhatsApp groups.</li>
        <li>✅ Supply local vendors and restaurants.</li>
        <li>✅ Roadside stalls are allowed.</li>
        <li>✅ Focus on cleaning and sorting quality produce.</li>
      </ul>
    </div>

    {/* Level 2 */}
    <div className="border rounded-2xl p-8 mb-8">
      <h3 className="text-2xl font-bold mb-4">
        Level 2: Selling Nationally
      </h3>

      <ul className="space-y-3">
        <li>📄 FSSAI Registration Required.</li>
        <li>📄 GST Registration Required.</li>
        <li>🏦 Business Current Account Recommended.</li>
        <li>📱 Sell through KisanMandi, Bijak, BigBasket hubs, etc.</li>
      </ul>

      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">
          Official Government Portals
        </h4>

        <a
          href="https://foscos.fssai.gov.in"
          target="_blank"
          className="block text-blue-600"
        >
          FSSAI Registration
        </a>

        <a
          href="https://reg.gst.gov.in/registration/"
          target="_blank"
          className="block text-blue-600"
        >
          GST Registration
        </a>
      </div>
    </div>

    {/* Level 3 */}
    <div className="border rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-4">
        Level 3: International Export
      </h3>

      <ul className="space-y-3">
        <li>🌍 FSSAI Central License Required.</li>
        <li>🌍 IEC (Import Export Code).</li>
        <li>🌍 APEDA Registration.</li>
        <li>🌍 Export through Amazon Global and B2B buyers.</li>
      </ul>

      <div className="mt-6 bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">
          Official Government Portals
        </h4>

        <a
          href="https://www.dgft.gov.in"
          target="_blank"
          className="block text-green-600"
        >
          DGFT (IEC Registration)
        </a>

        <a
          href="https://apeda.gov.in"
          target="_blank"
          className="block text-green-600"
        >
          APEDA Registration
        </a>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <strong>Important:</strong> Export processed products such as
        frozen bhindi, dehydrated bhindi, or pickled okra instead of
        raw bhindi due to shelf-life limitations.
      </div>
    </div>
  </section>
  <section className="mb-16">
  <h2 className="text-4xl font-bold mb-8">
    💰 Recommended Tools & Services
  </h2>

  <p className="text-lg text-gray-600 mb-8">
    These platforms and tools can help you source products, buy equipment,
    find buyers, and scale your Okra business faster.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Amazon */}
    <div className="border rounded-2xl p-6 hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-3">Amazon</h3>

      <p className="text-gray-600 mb-4">
        Buy packaging materials, weighing scales, storage crates,
        vacuum sealers, and farming tools.
      </p>

      <a
        href="https://amzn.to/43wz3KD"
        target="_blank"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
      >
        Visit Amazon
      </a>
    </div>

    <div className="border rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Heat Sealer
      </h3>

      <p className="mb-4">
        Seal local retail packets easily.
      </p>

      <a
        href="https://www.amazon.in/JD9-Plastic-Machine-Impulse-Packing/dp/B07RRJ3QRV"
        target="_blank"
        className="bg-yellow-500 text-white px-4 mt-4 py-2 rounded-lg inline-block"
      >
        View Product
      </a>
    </div>

    <div className="border rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Export Registration Help
      </h3>

      <p className="mb-4">
        Assistance with APEDA & IEC registration.
      </p>

      <a
        href="https://www.makemerchant.com/shefexil.php"
        target="_blank"
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
