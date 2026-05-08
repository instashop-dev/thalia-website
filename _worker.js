const PRERENDER_TOKEN = '51H3EcoHgpxmbe10BFOg';

const botUserAgents = [
  'googlebot', 'bingbot', 'yandex', 'duckduckbot',
  'slurp', 'baiduspider', 'facebot', 'ia_archiver',
  'gptbot', 'claudebot', 'perplexitybot', 'anthropic-ai',
  'ahrefsbot', 'mj12bot', 'semrushbot', 'dotbot', 'rogerbot',
  'screaming frog', 'siteauditbot', 'seokicks'
];

function isBot(userAgent) {
  const ua = (userAgent || '').toLowerCase();
  return botUserAgents.some(bot => ua.includes(bot));
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get('User-Agent') || '';
    const url = new URL(request.url);

    // 1. Redirect non-www to www
    if (url.hostname === 'thaliatechnologies.com') {
      url.hostname = 'www.thaliatechnologies.com';
      return Response.redirect(url.toString(), 301);
    }

    // 2. Redirect /spreadr → /apps/spreadr
    if (url.pathname === '/spreadr') {
      url.pathname = '/apps/spreadr';
      return Response.redirect(url.toString(), 301);
    }

    // 3. Prerender for bots
    if (isBot(userAgent)) {
      const prerenderUrl = `https://service.prerender.io/${url.href}`;
      const prerendered = await fetch(prerenderUrl, {
        headers: { 'X-Prerender-Token': PRERENDER_TOKEN }
      });
      return prerendered;
    }

    // 4. Serve static site with HSTS header
    const response = await env.ASSETS.fetch(request);
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }
};
