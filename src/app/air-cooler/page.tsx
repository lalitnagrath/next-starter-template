'use client';

export default function AirCoolerComparisonPage() {
  const coolers = [
    {
      title: 'Crompton Optimus 80L',
      badge: 'Best Overall',
      badgeClass: 'bg-green-100 text-green-700',
      description:
        'Best combination of cooling power, airflow, reliability, and room coverage.',
      features: [
        'Large room support',
        'Powerful air throw',
        'Good build quality',
        'Strong cooling pads',
      ],
    },
    {
      title: 'Voltas Velocity 110L',
      badge: 'Best for Large Rooms',
      badgeClass: 'bg-blue-100 text-blue-700',
      description:
        'Excellent for halls, top-floor rooms, and very hot environments.',
      features: [
        'Huge 110L tank',
        'Strong airflow',
        'Fewer water refills',
        'Best for bigger spaces',
      ],
    },
    {
      title: 'Havells Altima 70L BLDC',
      badge: 'Best Power Saving',
      badgeClass: 'bg-purple-100 text-purple-700',
      description:
        'Great choice for bedrooms and lower electricity consumption.',
      features: [
        'BLDC inverter technology',
        'Energy efficient',
        'Quieter operation',
        'Good for overnight usage',
      ],
    },
    {
      title: 'Bajaj DMH 90 Neo',
      badge: 'Best Value',
      badgeClass: 'bg-orange-100 text-orange-700',
      description:
        'Strong value-for-money cooler with good airflow and decent tank size.',
      features: [
        'Affordable pricing',
        'Large 90L capacity',
        'Good cooling',
        'Reliable brand',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Best Air Cooler Comparison 2026
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Top Recommended Air Coolers From Your List
          </p>
        </div>

        <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white rounded-3xl p-8 shadow-xl mb-10">
          <h2 className="text-3xl font-bold mb-4">
            🏆 Best Overall: Crompton Optimus 80L
          </h2>

          <p className="text-lg text-gray-100">
            The Crompton Optimus 80L offers the best balance of cooling
            performance, airflow, durability, and features for Indian summers.
          </p>

          <ul className="mt-5 space-y-2 list-disc list-inside text-gray-100">
            <li>Excellent airflow performance</li>
            <li>Strong cooling for large rooms</li>
            <li>Reliable honeycomb cooling pads</li>
            <li>Good service network</li>
            <li>Ideal for long-term usage</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Top Recommended Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {coolers.map((cooler, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <span
                className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${cooler.badgeClass}`}
              >
                {cooler.badge}
              </span>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {cooler.title}
              </h3>

              <p className="text-gray-600 mb-4">{cooler.description}</p>

              <ul className="space-y-2 text-gray-700 list-disc list-inside mb-6">
                {cooler.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-block bg-gray-900 hover:bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold transition-colors"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="p-4 text-left">Model</th>
                  <th className="p-4 text-left">Best For</th>
                  <th className="p-4 text-left">Tank Size</th>
                  <th className="p-4 text-left">Power Efficiency</th>
                  <th className="p-4 text-left">Noise Level</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ['Crompton Optimus 80L', 'Overall Performance', '80L', 'Good', 'Medium'],
                  ['Voltas Velocity 110L', 'Very Large Rooms', '110L', 'Average', 'High'],
                  ['Havells Altima 70L BLDC', 'Power Saving', '70L', 'Excellent', 'Low'],
                  ['Bajaj DMH 90 Neo', 'Budget Value', '90L', 'Good', 'Medium'],
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    {row.map((cell, i) => (
                      <td key={i} className="p-4 text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-2xl mb-10">
          <h3 className="text-2xl font-bold text-red-700 mb-3">
            ⚠ Models to Avoid
          </h3>

          <p className="text-gray-700 mb-3">
            Avoid very slim tower coolers for large rooms and weaker airflow
            models if you live on a top floor or in extremely hot regions.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Some smaller 70L coolers for very large rooms</li>
            <li>Weak airflow tower coolers</li>
            <li>Low-service brands in your area</li>
          </ul>
        </div>

        <div className="text-center text-gray-500 text-sm">
          Recommended based on airflow, cooling efficiency, service support,
          durability, and value for Indian summer conditions.
        </div>
      </div>
    </main>
  );
}
