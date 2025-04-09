import { BeautySalon, State, Category } from '../models.js';
import { pageWrapper, getStateUrl, getCategoryUrl } from './layout.js';

export function generateIndexPage(states: State[], categories: Category[], featuredSalons: BeautySalon[]): string {
  // Sort states alphabetically
  const sortedStates = [...states].sort((a, b) => a.state.localeCompare(b.state));
  
  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.category.localeCompare(b.category));

  // Build meta description
  const metaDescription = "Find professional aromatherapy providers near you. Our comprehensive directory features quality essential oil shops and wellness centers across the United States.";

  // Format the main content
  const content = `
  <main>
    <!-- Hero Section -->
    <section class="bg-teal-900 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Find Aromatherapy Providers Near You</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Discover quality essential oil shops and wellness centers in your area with our comprehensive directory.</p>
        
        <!-- Search Form -->
        <div class="max-w-2xl mx-auto bg-white rounded-lg p-1 flex flex-col md:flex-row">
          <select class="flex-grow p-3 rounded-lg md:rounded-r-none mb-2 md:mb-0 border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600">
            <option value="">All Categories</option>
            ${sortedCategories.map(category => `<option value="${category.id}">${category.category}</option>`).join('')}
          </select>
          <div class="flex-grow flex">
            <input type="text" placeholder="Search by location..." class="flex-grow p-3 rounded-l-lg border border-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-600">
            <button class="bg-teal-600 text-white p-3 rounded-r-lg hover:bg-teal-700 transition-colors">
              <i class="fas fa-search mr-2"></i> Search
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Listings Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-teal-900">Featured Aromatherapy Providers</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredSalons.slice(0, 6).map(salon => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <a href="/salon/${salon.slug}/">
                ${salon.images && salon.images.length > 0 
                  ? `<img src="${salon.images[0].path}" alt="${salon.title}" class="w-full h-56 object-cover">`
                  : `<div class="w-full h-56 bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center text-white text-4xl">
                      <i class="fas fa-spa"></i>
                    </div>`
                }
              </a>
              <div class="p-6">
                <a href="/salon/${salon.slug}/" class="block">
                  <h3 class="text-xl font-bold text-teal-800 mb-2 hover:text-teal-600">${salon.title}</h3>
                </a>
                <p class="text-gray-600 mb-3">
                  <i class="fas fa-map-marker-alt text-teal-500 mr-2"></i>
                  ${salon.city?.city || ''}, ${salon.state?.state || ''}
                </p>
                ${salon.categories && salon.categories.length > 0 
                  ? `<p class="text-gray-600 mb-4">
                      <i class="fas fa-tag text-teal-500 mr-2"></i>
                      ${salon.categories.map(cat => cat.category).join(', ')}
                    </p>`
                  : ''
                }
                <a href="/salon/${salon.slug}/" class="inline-block bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors">
                  View Details
                </a>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="text-center mt-10">
          <a href="/browse/" class="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Browse All Listings
          </a>
        </div>
      </div>
    </section>

    <!-- Browse by State Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-teal-900">Browse by State</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${sortedStates.map(state => `
            <a href="${getStateUrl(state.slug || '')}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="font-semibold text-teal-700 hover:text-teal-500">${state.state}</h3>
              <p class="text-sm text-gray-500 mt-1">${state.salons?.length || 0} listing${state.salons?.length !== 1 ? 's' : ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-teal-900">Browse by Category</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${sortedCategories.map(category => `
            <a href="${getCategoryUrl(category.slug || '')}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 class="font-semibold text-teal-700 hover:text-teal-500">${category.category}</h3>
              <p class="text-sm text-gray-500 mt-1">${category.salons?.length || 0} listing${category.salons?.length !== 1 ? 's' : ''}</p>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About Aromatherapy Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8 text-teal-900">About Aromatherapy Near Me</h2>
          
          <div class="bg-white p-8 rounded-lg shadow-md">
            <p class="text-gray-700 mb-4">
              Looking for <strong>aromatherapy near me</strong>? Our directory helps you find local wellness shops that offer professional-grade essential oils, diffusers, and holistic services for your well-being.
            </p>
            
            <p class="text-gray-700 mb-4">
              Aromatherapy providers offer access to high-quality essential oils and specialized services that promote physical and emotional wellness. Whether you need lavender for relaxation, eucalyptus for respiratory support, or custom blends for specific wellness goals, our directory connects you with nearby specialty shops.
            </p>
            
            <p class="text-gray-700 mb-6">
              <strong>Aromatherapy near me</strong> searches are the first step to finding quality essential oils locally. Our comprehensive directory features detailed listings with product categories, services, business hours, contact details, and customer reviews to help you make informed decisions about your wellness journey.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div class="bg-teal-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-teal-800">What You'll Find</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Pure essential oils</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Diffusers and accessories</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Aromatherapy consultations</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>Wellness services and workshops</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-teal-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-teal-800">Benefits of Local Shops</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Expert advice from certified aromatherapists</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Try before you buy options</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Verified product quality and purity</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-info-circle text-teal-500 mt-1 mr-2"></i>
                    <span>Support local wellness businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-teal-900 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Do You Offer Aromatherapy Services?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Add your business to our directory and reach potential customers searching for aromatherapy providers in their area.</p>
        <a href="/add-a-listing/" class="inline-block bg-white text-teal-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
          Add Your Listing
        </a>
      </div>
    </section>
  </main>`;

  return pageWrapper("Aromatherapy Near Me - Find Local Wellness Shops & Services", metaDescription, content);
}