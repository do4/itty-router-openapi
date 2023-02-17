export const SwaggerUI = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="description" content="SwaggerIU"/>
  <title>SwaggerUI</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css"/>
</head>
<body>
<div id="swagger-ui"></div>
<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
<script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-standalone-preset.js" crossorigin></script>
<script>
  window.onload = () => {
    window.ui = SwaggerUIBundle({
      url: 'openapi.json',
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [ SwaggerUIBundle.presets.apis ]
    });
  };
</script>
</body>
</html>`


export const ReDocUI = `<!DOCTYPE html>
<html><head>
<title>ReDocUI</title>
<!-- needed for adaptive design -->
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!--
ReDoc doesn't change outer page styles
-->
<style>
  body {
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    margin: 0;
    padding: 0;
  }
</style>
</head>
<body>
<redoc spec-url="openapi.json"></redoc>
<script src="https://unpkg.com/redoc@2.0.0-rc.58/bundles/redoc.standalone.js"> </script>
</body></html>`
