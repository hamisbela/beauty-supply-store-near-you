import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Beauty Supply Store Near You | Get Support & Information</title>
        <meta name="description" content="Contact BeautySupplyStoreNearYou.com for questions, support, or information about our beauty supply store and cosmetic retailer directory." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with the BeautySupplyStoreNearYou.com team
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Send Us a Message</h2>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Us</h3>
                    <p className="text-gray-600 mt-1">For general inquiries:</p>
                    <a href="mailto:info@beautysupplystorenearyou.com" className="text-purple-600 hover:text-purple-800">
                      info@beautysupplystorenearyou.com
                    </a>
                    <p className="text-gray-600 mt-2">For business listings:</p>
                    <a href="mailto:listings@beautysupplystorenearyou.com" className="text-purple-600 hover:text-purple-800">
                      listings@beautysupplystorenearyou.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call Us</h3>
                    <p className="text-gray-600 mt-1">Customer Support:</p>
                    <a href="tel:+18005551234" className="text-purple-600 hover:text-purple-800">
                      (800) 555-1234
                    </a>
                    <p className="text-gray-600 mt-1">Monday-Friday: 9am-5pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600 mt-1">Monday-Friday: 9am-5pm EST</p>
                    <p className="text-gray-600">Saturday-Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">Follow Us</h2>
              <p className="text-gray-700 mb-4">
                Stay connected with us on social media for the latest updates, beauty tips, and product information.
              </p>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <Facebook size={28} />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <Twitter size={28} />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-800">How do I find beauty supply stores near me?</h3>
                <p className="text-gray-700 mt-2">
                  You can find local beauty supply stores by using our search function on the homepage. Simply enter your city or zip code to discover quality beauty product retailers in your area.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-gray-800">How do I add my business to the directory?</h3>
                <p className="text-gray-700 mt-2">
                  You can add your beauty supply store by visiting our <a href="/add-a-listing/" className="text-purple-600 hover:text-purple-800">Add a Listing</a> page and completing the submission form with your business details.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-gray-800">Is there a fee to list my business?</h3>
                <p className="text-gray-700 mt-2">
                  We offer both free and premium listing options. Free listings include basic business information, while premium listings offer enhanced visibility and additional features.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-gray-800">How can I update my business information?</h3>
                <p className="text-gray-700 mt-2">
                  To update your business information, please contact us at listings@beautysupplystorenearyou.com with your business name and the changes you'd like to make.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-gray-800">Do you verify the businesses listed in your directory?</h3>
                <p className="text-gray-700 mt-2">
                  We make reasonable efforts to verify basic business information, but we recommend that customers always confirm store details directly with the business before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;