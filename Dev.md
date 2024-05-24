- structured the folder 
- tried to install sass
- tailwind installed using npm
    - run 'npx tailwindcss init' to create tailwind config file
    - in 'tailwind.config.js' edit the the 'content key value to this
        - [ "./src/**/*.{js,jsx,ts,tsx}"],
    - create a 'tailwind.css' file in src folder and paste this
        -   @import "tailwindcss/base";
            @import "tailwindcss/components";
            @import "tailwindcss/utilities";
            
        -   Later import it in 'app.js' file

    - create a 'postcss.config.js' in the root folder and paster this:
        -       module.exports = {
                plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                ],
            };
    - run 'npm run start' 