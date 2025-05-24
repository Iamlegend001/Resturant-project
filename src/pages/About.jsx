import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our Culinary Journey
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-2xl mx-auto">
            Crafting unforgettable dining experiences since 2010
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Journey Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform transition duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-2xl">🍽️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Founded with a passion for exceptional cuisine and warm hospitality,
            our restaurant has been serving the community for over a decade.
            What started as a small family-owned establishment has grown into a
            beloved culinary destination, while maintaining our commitment to
            quality and authenticity.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform transition duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            We strive to create unforgettable dining experiences by combining
            innovative culinary techniques with traditional flavors. Our
            commitment to using locally-sourced, fresh ingredients ensures that
            every dish tells a story of quality and care.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-2xl">💫</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mb-4">
                <span className="text-xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                We never compromise on the quality of our ingredients and
                service
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mb-4">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Constantly evolving our menu with creative culinary concepts
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mb-4">
                <span className="text-xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Committed to eco-friendly practices and supporting local
                producers
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <div className="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center mb-4">
                <span className="text-xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                Building lasting relationships with our guests and community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
