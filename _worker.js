export default {
  async fetch(request, env) {
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

    // 3. Serve static site with HSTS header
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
