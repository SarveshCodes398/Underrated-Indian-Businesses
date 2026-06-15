import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>

  <Header />

  <div className="max-w-6xl mx-auto px-6 py-12">


{/* Hero Section */}
<section className="text-center mb-16">
  <h1 className="text-6xl font-extrabold mb-4">
    ⚪ Foxnuts (Makhana) Business Guide
  </h1>

  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Learn how to source, package, brand, and export Makhana from local
    markets to national and international buyers.
  </p>
</section>

{/* Important Notice */}
<section className="mb-12">
  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl">
    <h3 className="font-bold text-xl mb-2">
      ⚠ Important Notice
    </h3>

    <p>
      More than 80% of the world's Makhana comes from Bihar. Sourcing
      directly from Bihar wholesale hubs can significantly improve
      profit margins compared to buying from local distributors.
    </p>
  </div>
</section>



{/* Step 1 */}
<section className="mb-16">
  <h2 className="text-4xl font-bold mb-6">
    ⚪ Step 1: Sourcing Makhana
  </h2>

  <div className="bg-white shadow-lg rounded-2xl p-8">
    <ul className="space-y-4 text-lg">
      <li>
        <strong>What it is:</strong> Buying raw, unflavored popped
        makhana before roasting and branding.
      </li>

      <li>
        <strong>Best Source:</strong> Darbhanga, Purnia,
        and Katihar wholesale markets in Bihar.
      </li>

      <li>
        <strong>Buy In:</strong> Large wholesale sacks.
      </li>

      <li>
        <strong>Quality Tip:</strong> Choose 5-Suta and
        6-Suta for retail sales.
      </li>

      <li>
        <strong>Premium Export Grade:</strong> 7-Suta.
      </li>
    </ul>
  </div>
</section>

{/* Step 2 */}
<section className="mb-16">
  <div className="border rounded-2xl p-8">
    <h2 className="text-4xl font-bold mb-6">
      🏪 Step 2: Local Business
    </h2>

    <ul className="space-y-4 text-lg">
      <li>✅ Sell to dry fruit stores.</li>
      <li>✅ Supply grocery stores.</li>
      <li>✅ Sell to sweet shops.</li>
      <li>✅ Pack in 1kg, 5kg, or 10kg bags.</li>
      <li>✅ Use a simple heat sealer.</li>
      <li>✅ No GST or FSSAI required if turnover remains below ₹12 Lakhs.</li>
    </ul>
  </div>
</section>

{/* Step 3 */}
<section className="mb-16">
  <div className="border rounded-2xl p-8">
    <h2 className="text-4xl font-bold mb-6">
      🇮🇳 Step 3: National Business
    </h2>

    <ul className="space-y-4 text-lg">
      <li>📦 Create your own snack brand.</li>
      <li>📦 Roast and flavor Makhana.</li>
      <li>📱 Sell on Amazon & Flipkart.</li>
      <li>📄 GST Registration required.</li>
      <li>📄 FSSAI Registration required.</li>
      <li>🏭 Use Nitrogen-Flushing Packaging Machines.</li>
      <li>🥫 Create long shelf-life snack packs.</li>
    </ul>

    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
      <strong>Popular Flavors : </strong>
      Peri Peri, Mint, Cheese, Tangy Tomato,
      Himalayan Salt, Barbecue.
    </div>
  </div>
</section>

{/* Step 4 */}
<section className="mb-16">
  <div className="border rounded-2xl p-8">
    <h2 className="text-4xl font-bold mb-6">
      🌍 Step 4: International Export
    </h2>

    <ul className="space-y-4 text-lg">
      <li>🌍 Export premium 7-Suta Makhana.</li>
      <li>🌍 Market as "Popped Water Lily Seeds".</li>
      <li>🌍 Target USA, UK, Canada, and Gulf countries.</li>
      <li>🌍 FSSAI Central License required.</li>
      <li>🌍 IEC required.</li>
      <li>🌍 APEDA Registration required.</li>
      <li>🌍 Use premium zip-lock export pouches.</li>
    </ul>

    <div className="mt-6 p-4 bg-green-50 rounded-lg">
      <strong>Export Tip : </strong>
      International buyers prefer large,
      unbroken 7-Suta Makhana.
    </div>
  </div>
</section>

{/* Government Portals */}
<section className="mb-16">
  <h2 className="text-4xl font-bold mb-8">
    🏛 Official Government Portals
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <a
      href="https://foscos.fssai.gov.in"
      target="_blank"
      rel="noopener noreferrer"
      className="border p-6 rounded-xl hover:shadow-lg"
    >
      FSSAI Registration
    </a>

    <a
      href="https://www.dgft.gov.in"
      target="_blank"
      rel="noopener noreferrer"
      className="border p-6 rounded-xl hover:shadow-lg"
    >
      IEC Registration
    </a>

    <a
      href="https://apeda.gov.in"
      target="_blank"
      rel="noopener noreferrer"
      className="border p-6 rounded-xl hover:shadow-lg"
    >
      APEDA Registration
    </a>

  </div>
</section>

{/* Affiliate Section */}
<section className="mb-16">
  <h2 className="text-4xl font-bold mb-8">
    💰 Recommended Tools & Equipment
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

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
        Digital Weighing Scale
      </h3>

      <p className="mb-4">
        Accurate packet measurements.
      </p>

      <a
        href="https://iscaleindia.com/"
        target="_blank"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
      >
        View Product
      </a>
    </div>

    <div className="border rounded-2xl p-6">
      <h3 className="text-xl font-semibold mb-3">
        Nitrogen Flushing Machine
      </h3>

      <p className="mb-4">
        Keeps Makhana crunchy for months.
      </p>

      <a
        href="https://dir.indiamart.com/impcat/nitrogen-flushing-machine.html"
        target="_blank"
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg inline-block"
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

  <Footer />
</>

  )
}

export default page
