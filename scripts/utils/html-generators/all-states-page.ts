import { State } from '../models.js';
import { pageWrapper, getStateUrl } from './layout.js';

export function generateAllStatesPage(states: State[]): string {
  // Sort states alphabetically
  const sortedStates = [...states].sort((a, b) => a.state.localeCompare(b.state));
  
  // Build meta description
  const metaDescription = "Browse aromatherapy providers by state. Find wellness shops with essential oils and holistic services across the United States.";

  // Calculate total listings
  const totalListings = states.reduce((sum, state) => sum + (state.salonCount || 0), 0);

  // Format the main content
  const content = `
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-teal-900">
        Browse Aromatherapy Providers by State
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional aromatherapy providers across the United States. Browse by state to discover essential oil shops and wellness centers in your area.
      </p>
      <div class="mt-2 text-teal-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${totalListings} listing${totalListings !== 1 ? 's' : ''} across ${states.length} states
        </span>
      </div>
    </header>

    <div class="bg-white p-8 rounded-lg shadow-md mb-12">
      <h2 class="text-2xl font-bold text-teal-800 mb-6">All States</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${sortedStates.map(state => {
          const stateSlug = state.slug || '';
          const citiesCount = state.cities?.length || 0;
          const listingsCount = state.salonCount || 0;
          
          return `
          <a href="${getStateUrl(stateSlug)}" class="block bg-gray-50 p-4 rounded-lg hover:bg-teal-50 transition-colors border border-gray-100">
            <h3 class="font-bold text-lg text-teal-700">${state.state}</h3>
            <p class="text-sm text-gray-600 mt-1">${listingsCount} listing${listingsCount !== 1 ? 's' : ''}</p>
            <p class="text-xs text-gray-500 mt-1">${citiesCount} cit${citiesCount !== 1 ? 'ies' : 'y'}</p>
          </a>
        `}).join('')}
      </div>
    </div>

    <div class="bg-teal-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-teal-800 mb-4">About Our Aromatherapy Directory</h2>
      <p class="text-gray-700 mb-4">
        Our nationwide directory of aromatherapy providers helps you find professional essential oil shops and wellness centers in your state. These providers offer a comprehensive selection of aromatherapy products, diffusers, and holistic wellness services.
      </p>
      <p class="text-gray-700 mb-4">
        Professional aromatherapy providers offer access to high-quality essential oils and specialized wellness services that may not be available in regular retail stores. Whether you're a wellness practitioner or a consumer looking for quality aromatherapy products, these shops have what you need.
      </p>
      <p class="text-gray-700">
        Browse our listings by state to find quality aromatherapy providers in your area. Most shops offer a wide range of essential oils for various wellness needs, with knowledgeable staff to help you find exactly what you're looking for.
      </p>
    </div>
  </main>`;

  return pageWrapper("Browse Aromatherapy Providers by State - National Directory", metaDescription, content);
}