import { City } from '../models.js';
import { pageWrapper, generateBreadcrumbs, generateListingsGrid, getStateUrl } from './layout.js';

export function generateCityPage(city: City): string {
  const stateName = city.state?.state || 'Unknown State';
  const stateSlug = city.state?.slug || '';
  const salons = city.salons || [];
  const salonCount = city.salonCount || salons.length;
  
  // Build meta description
  const metaDescription = `Find aromatherapy providers in ${city.city}, ${stateName}. Browse our listings of top-rated essential oil shops and wellness centers with holistic services.`;

  const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', url: '/' },
    { label: stateName, url: getStateUrl(stateSlug) },
    { label: city.city }
  ]);

  // Format the main content
  const content = `
  ${breadcrumbs}
  
  <main class="container mx-auto px-4 py-6">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-teal-900">
        Aromatherapy Providers in ${city.city}, ${stateName}
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Find professional aromatherapy providers in ${city.city}. Browse our comprehensive directory of local essential oil shops and wellness centers.
      </p>
      <div class="mt-2 text-teal-600 font-medium">
        <span class="inline-flex items-center">
          <i class="fas fa-list-ul mr-2"></i>
          ${salonCount} listing${salonCount !== 1 ? 's' : ''} found
        </span>
      </div>
    </header>

    ${salons.length > 0 
      ? generateListingsGrid(salons, `Aromatherapy Providers in ${city.city}`)
      : `
        <div class="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 class="text-2xl font-bold text-teal-800 mb-4">No Listings Found</h2>
          <p class="text-gray-600 mb-6">We couldn't find any aromatherapy providers in ${city.city} at this time.</p>
          <a href="/add-a-listing/" class="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Add Your Business
          </a>
        </div>
      `
    }

    <div class="mt-16 bg-teal-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-teal-800 mb-4">About Aromatherapy Providers in ${city.city}</h2>
      <p class="text-gray-700 mb-4">
        Aromatherapy providers offer a comprehensive selection of essential oils, diffusers, and holistic wellness services. ${city.city}, ${stateName} is home to a range of quality wellness shops to help you on your path to natural wellbeing.
      </p>
      <p class="text-gray-700 mb-4">
        Professional aromatherapy providers in ${city.city} offer access to high-quality, therapeutic-grade essential oils and specialized services that may not be available in regular retail stores. Their knowledgeable staff can offer expert advice for all your wellness needs.
      </p>
      <p class="text-gray-700">
        Browse our listings to find aromatherapy providers in ${city.city}. Visit them directly to explore their selection of essential oils, diffusers, and to get personalized recommendations for your aromatherapy journey.
      </p>
    </div>
  </main>`;

  return pageWrapper(`Aromatherapy Providers in ${city.city}, ${stateName} - Directory`, metaDescription, content);
}