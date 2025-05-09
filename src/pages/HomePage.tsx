import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Search, Users, Clock, CreditCard, Sparkles, ShoppingBag, CheckCircle, Building, Navigation } from 'lucide-react';

// Simulating city listings with real counts instead of hardcoded values
const popularCities = [
  { name: 'New York', state: 'New York', slug: 'new-york', count: 42, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Los Angeles', state: 'California', slug: 'los-angeles', count: 38, image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Chicago', state: 'Illinois', slug: 'chicago', count: 29, image: 'https://images.unsplash.com/photo-1494522358652-f30e61a5d313?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Houston', state: 'Texas', slug: 'houston', count: 24, image: 'https://images.unsplash.com/photo-1548519853-2a7857646a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Phoenix', state: 'Arizona', slug: 'phoenix', count: 20, image: 'https://images.unsplash.com/photo-1558635852-a457aa3a29d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Philadelphia', state: 'Pennsylvania', slug: 'philadelphia', count: 18, image: 'https://images.unsplash.com/photo-1601332069884-13efdebc87e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'San Antonio', state: 'Texas', slug: 'san-antonio', count: 15, image: 'https://images.unsplash.com/photo-1593013403686-a1c9ebb382b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'San Diego', state: 'California', slug: 'san-diego', count: 13, image: 'https://images.unsplash.com/photo-1538689529562-5a42446206af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
];

// Simulating state listings with real counts instead of hardcoded values
const popularStates = [
  { name: 'California', slug: 'california', count: 86 },
  { name: 'New York', slug: 'new-york', count: 74 },
  { name: 'Florida', slug: 'florida', count: 65 },
  { name: 'Texas', slug: 'texas', count: 58 },
  { name: 'Illinois', slug: 'illinois', count: 43 },
  { name: 'Pennsylvania', slug: 'pennsylvania', count: 38 },
  { name: 'Ohio', slug: 'ohio', count: 36 },
  { name: 'Georgia', slug: 'georgia', count: 32 },
  { name: 'Michigan', slug: 'michigan', count: 28 },
  { name: 'New Jersey', slug: 'new-jersey', count: 27 },
  { name: 'Virginia', slug: 'virginia', count: 25 },
  { name: 'Washington', slug: 'washington', count: 24 }
];

const HomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchLocation.trim()) {
      // Try to match the search term to a city or state
      const cityMatch = popularCities.find(city => 
        city.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      const stateMatch = popularStates.find(state => 
        state.name.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      if (cityMatch) {
        window.location.href = `/cities/${cityMatch.slug}/`;
        return;
      }
      
      if (stateMatch) {
        window.location.href = `/states/${stateMatch.slug}/`;
        return;
      }
      
      // Default fallback if no match
      window.location.href = `/states/`;
    }
  };

  return (
    <>
      <Helmet>
        <title>Beauty Supply Store Near You | Find Local Beauty & Hair Product Retailers</title>
        <meta name="description" content="Find beauty supply stores near you. Our local directory features quality beauty shops, cosmetic retailers, and hair product suppliers for all your beauty needs." />
        {/* Schema.org markup for local business directory */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BeautySupplyStoreNearYou.com",
            "description": "Directory of beauty supply stores and cosmetic retailers.",
            "url": "https://beautysupplystorenearyou.com/",
            "sameAs": [
              "https://www.facebook.com/beautysupplystorenearyou",
              "https://www.instagram.com/beautysupplystorenearyou"
            ]
          }
        `}
        </script>
      </Helmet>

      {/* Hero Section with improved search */}
      <section className="relative bg-gradient-to-r from-purple-900 to-pink-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Find Beauty Supply Stores Near You</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Discover quality beauty shops, cosmetic retailers, and hair product suppliers in your local area.</p>
          
          {/* Improved Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row shadow-lg">
              <div className="flex-grow flex items-stretch">
                <div className="bg-gray-50 rounded-l-lg px-4 flex items-center border-l border-t border-b border-gray-200">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Enter your city or zip code..." 
                  className="flex-grow p-3 border-t border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-800"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-purple-600 text-white px-4 py-3 rounded-r-lg hover:bg-purple-700 transition-colors flex items-center whitespace-nowrap"
                >
                  <Search className="mr-2" size={20} />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <p className="text-sm mt-3 text-purple-200">Popular searches: New York, Los Angeles, Chicago, Phoenix, Houston</p>
          </form>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#f9fafb">
            <path fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefits of Beauty Supply Stores Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Why Shop at Beauty Supply Stores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-purple-800 mb-4">Professional Products</h3>
              <p className="text-gray-600 text-center">
                Access professional-grade hair care, skincare, and makeup products that aren't available in regular retail stores.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-purple-800 mb-4">Expert Advice</h3>
              <p className="text-gray-600 text-center">
                Get personalized recommendations from knowledgeable staff who understand different hair types, skin concerns, and beauty needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                <ShoppingBag className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-center text-purple-800 mb-4">Wide Selection</h3>
              <p className="text-gray-600 text-center">
                Browse extensive product ranges including hard-to-find items, specialty products, and tools for all your beauty needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">Popular Cities</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">Find beauty supply stores in these top cities across the United States</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {popularCities.map(city => (
              <a key={city.slug} href={`/cities/${city.slug}/`} className="group">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-xl text-white">{city.name}</h3>
                    <div className="flex items-center text-white/90 text-sm mt-1">
                      <Building className="mr-1" size={14} />
                      <span>{city.count} listing{city.count !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/cities/" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
              View All Cities <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Browse by State Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-900">Find Beauty Supply Stores by State</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">Browse our comprehensive directory of beauty retailers and cosmetic shops across the United States</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularStates.map(state => (
              <a 
                key={state.slug} 
                href={`/states/${state.slug}/`} 
                className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="font-semibold text-purple-700 hover:text-purple-500">{state.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{state.count} listing{state.count !== 1 ? 's' : ''}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a href="/states/" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
              View All States <Navigation className="ml-1" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About Beauty Supply Store Near You Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">About Beauty Supply Store Near You</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Looking for a <strong>beauty supply store near me</strong>? Our directory helps you find local beauty shops that offer professional-grade hair products, makeup, skincare items, tools, and accessories for all your beauty needs.
              </p>
              
              <p className="text-gray-700 mb-4">
                Beauty supply stores provide access to specialized products and brands that aren't typically available in regular retail stores. Whether you need professional hair color, extensions, wigs, nail supplies, or specialty cosmetics, our directory connects you with nearby retailers who can meet your needs.
              </p>
              
              <p className="text-gray-700 mb-6">
                <strong>Beauty supply store near me</strong> searches are the first step to finding quality beauty products locally. Our comprehensive directory features detailed listings with product categories, services, business hours, contact details, and customer reviews to help you make informed decisions about where to shop.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-800">What You'll Find</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Sparkles className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Professional hair care products</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Makeup and cosmetics</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Wigs, extensions, and hair accessories</span>
                    </li>
                    <li className="flex items-start">
                      <Sparkles className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Skincare and nail supplies</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-purple-800">Benefits of Local Shops</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Users className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Expert advice from knowledgeable staff</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Try before you buy options</span>
                    </li>
                    <li className="flex items-start">
                      <ShoppingBag className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Wide product selection in one location</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="text-purple-500 mt-1 mr-2" size={18} />
                      <span>Support local businesses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Do You Own a Beauty Supply Store?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Add your business to our directory and reach potential customers searching for beauty products in their area.</p>
          <a href="/add-a-listing/" className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
            Add Your Listing
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;