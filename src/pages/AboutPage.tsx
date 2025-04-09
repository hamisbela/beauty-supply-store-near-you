import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Star, ShoppingBag, Info, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Beauty Supply Store Near You | Our Mission & Services</title>
        <meta name="description" content="Learn about BeautySupplyStoreNearYou.com, the premier resource for finding professional beauty shops, cosmetic retailers, and hair product suppliers in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900">About BeautySupplyStoreNearYou.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding quality beauty supply stores, cosmetic retailers, and hair product suppliers in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At BeautySupplyStoreNearYou.com, our mission is to connect individuals seeking quality beauty products with professional beauty supply stores and cosmetic retailers in their local area. We believe everyone deserves access to quality beauty products that help them look and feel their best.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of beauty product retailers, making it easy to find the right beauty supply store near you. Our platform allows you to browse listings by location, read detailed business profiles, and make informed decisions about where to shop for your beauty needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Customers</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Find quality beauty supply stores and cosmetic shops in your local area</span>
                </li>
                <li className="flex items-start">
                  <Info className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Access detailed store profiles with products, services, and contact information</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient options near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with beauty product retailers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Businesses</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential customers</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Showcase your products, specialties, and business details</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Grow your customer base with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Stand out in a specialized, niche directory</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Why Beauty Supply Stores Matter</h2>
            <p className="text-gray-700 mb-4">
              Beauty supply stores offer specialized products that aren't typically available in regular retail stores. These shops provide access to professional-grade hair care, skincare, makeup, tools, and accessories that help consumers achieve salon-quality results at home.
            </p>
            <p className="text-gray-700 mb-4">
              These specialized retailers offer personalized service that takes into account your specific beauty needs, hair type, skin concerns, and preferences. They provide expert advice on products and techniques that help you make the most of your beauty regimen.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Professional Beauty Supply Stores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ShoppingBag className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Professional-grade products</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Knowledgeable staff</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Specialty items and hard-to-find products</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Wide selection of brands and options</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Regular Retail Stores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ShoppingBag className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited selection of brands</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Few professional-grade options</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Generic consumer products</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited expert assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              BeautySupplyStoreNearYou.com was founded by a team of digital marketing specialists who recognized the need for a specialized platform connecting beauty product retailers with customers seeking quality beauty supplies in their local communities.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both retailers and customers, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on beauty supply stores. Many quality establishments were difficult to find online, and customers struggled to identify which stores specialized in their specific beauty needs or carried particular brands.
            </p>
            <p className="text-gray-700">
              Today, BeautySupplyStoreNearYou.com is the premier online resource for beauty supply retailers across the United States. We continue to expand our listings and improve our platform to better serve both businesses and their customers.
            </p>
          </div>
          
          <div className="bg-purple-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a beauty supply store owner? Add your business to our directory and connect with potential customers in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;