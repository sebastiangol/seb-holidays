# seb-holidays

This website is deployed using vercel: https://seb-holidays.vercel.app/

This project is a holiday-viewing website. It is based on Airbnb. The project uses the React library with the Next.js framework. Tailwind CSS is used to style the application. Mapbox is used to display a map on the Search page. The JIT compiler is used to help performance when using the styling. The application uses data created and stored on jsonkeeper.com for most of the cards on the home page, as well as the stays displayed on the search page.

• The website is responsive, adapting the page content to various screen sizes using TailwindCSS.

• The header component contains the website logo, a search bar and three logo-buttons.

• Under the header is a banner which contains a background image and a button.

• Below the banner are several card options of different sizes.

• At the bottom of the page is a generic page footer.

When something is typed into the search bar, the header expands to display a calendar which allows the user to pick a start and end date. The number of guests can also be changed. There are two buttons: Cancel and Search. The Cancel button clears the search bar, in turn hiding the expansion and returning the header back to normal. The search button will perform a search, which will route the website to a new page: the Search results page.

The search results page will display personalised text depending on the search parameters (search input, start/end dates, number of guests). Under the text, there are 5 buttons. Under the buttons, 7 stays are displayed. A map (created and styled with Mapbox) is displayed on the right of the screen. The 7 stays are pulled from a json file. Each json object, as well as the displayed information in each stay section, also has a longitude and latitude associated with each one. These coordinates are used to display a marker on the map to represent the stay. The markers can be clicked to display the title of the stay. The map is by default centered based on the coordinates of the 7 stays.

There is lazy loading built-in with Next.js, which helps performance as only the pictures that are needed are loaded.
The Just-in-time compiler is used to render only what's needed in order to improve performance and user experience.




