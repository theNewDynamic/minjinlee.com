class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ["assets/css"],
    }), 
    require('tailwindcss')('./assets/css/config/tailwind.js'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html', 'layout_modules/**/**/*.html' ],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }], 
      fontFace: true,
      whitelist: ["body",
      "h-3/4",
      "h-screen",
      "bg-near-white",
      "text-white-70",
      "ais-hits",
      "ais-hits--item",
      "results-hidden",
      "hidden",
      "ais-pagination",
      "ais-pagination--item__active ais-pagination--item__first",
      "ais-pagination--item__last",
      "bg-primary-color",
      "turbolinks-progress-bar",
      "opacity-25",
      "about",
      "pagination",
      "our-work",
      "updates",
      "take-action",]
    }),    
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%']
    }),    
  ]
}