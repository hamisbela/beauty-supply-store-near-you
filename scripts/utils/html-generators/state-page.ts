import { State } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getCityUrl } from './layout.js';

export function generateStatePage(state: State): string {
  const cities = state.cities || [];
  const salons = state.salons || [];
  const salonCount = state.salonCount || salons.length;
  
  // Sort cities alphabetically
  cities.sort((a, b) => a.city.localeCompare(b.city));
  
  // Build meta description
  const metaDescription = `Find aromatherapy providers in ${state.state}. Browse our directory of essential oil shops and wellness centers by city.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: state.state }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-teal-900">
        Aromatherapy Providers in ${state.state}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional aromatherapy providers across ${state.state}. Browse by city or view all listings.
      </p>
      <div class="mt-2 text-teal-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} across ${cities.length} cities
        </span>
      </div>
    </header>

    <!-- Cities List -->
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-teal-800 mb-6">Cities in ${state.state}</h2>
      
      ${cities.length > 0 ? `
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${cities.map(city => {
          // Make sure we have a valid slug
          const citySlug = city.slug || '';
          const citySalonCount = city.salonCount || (city.salons ? city.salons.length : 0);
          return `
          <a href="${getCityUrl(citySlug)}" class="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="font-semibold text-teal-700 hover:text-teal-500">${city.city}</h3>
            <p class="text-sm text-gray-500 mt-1">${citySalonCount} listing${citySalonCount !== 1 ? 's' : ''}</p>
          </a>
        `}).join('')}
      </div>
      ` : `
      <div class="bg-white p-6 rounded-lg shadow-md text-center">
        <p class="text-gray-600">No cities found in ${state.state}.</p>
      </div>
      `}
    </section>

    <!-- Featured Listings -->
    ${salons.length > 0 ? `
    <section class="mb-16">
      <h2 class="text-2xl font-bold text-teal-800 mb-6">Featured Aromatherapy Providers in ${state.state}</h2>
      ${generateListingsGrid(salons.slice(0, 6))}
      
      ${salons.length > 6 ? `
      <div class="text-center mt-8">
        <a href="#" class="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
          View All ${salons.length} Listings
        </a>
      </div>
      ` : ''}
    </section>
    ` : ''}

    <!-- About Section -->
    <section class="bg-teal-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-teal-800 mb-4">About Aromatherapy Providers in ${state.state}</h2>
      <p class="text-gray-700 mb-4">
        Aromatherapy providers offer a comprehensive selection of essential oils, diffusers, and holistic wellness services. In ${state.state}, you'll find quality wellness shops that cater to all your aromatherapy needs.
      </p>
      <p class="text-gray-700 mb-4">
        These specialized providers offer access to high-quality essential oils and products that promote physical and emotional wellbeing. From lavender for relaxation to peppermint for energy, eucalyptus for respiratory support, and custom blends for specific wellness goals, aromatherapy shops have everything you need for your holistic wellness journey.
      </p>
      <p class="text-gray-700">
        Browse our directory to find aromatherapy providers near you in ${state.state}. Visit them directly to explore their selection of essential oils and to get expert advice from certified aromatherapists who understand different wellness needs.
      </p>
    </section>
  </main>`;

  return pageWrapper(`Aromatherapy Providers in ${state.state} - Directory by City`, metaDescription, content);
}