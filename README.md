## Choose-Your-Shoes
Using React JS, I built a web application with the following features: add-to-cart capability, category, price, and color-wise filtering; additionally, I added search functionality. This screenshot below illustrates the appearance of the web application.
## Home Page
![Preview1](https://drive.google.com/uc?export=view&id=1zHcINUNHxGEwnl4dEYrhFyjH7JHbn9Th)

## Cart Page
![Preview2](https://drive.google.com/uc?export=view&id=19DTgrTTEeG-9ntG1F4tQ9dBuwKuDzo2W)

## Functionalities:

1. **Home Layout:**
   - Created a grid-style arrangement for the shoes' display.
   - Added a sidebar to go through the various filtering options.
   - The navigation section is equipped with a search bar for easy browsing, along with icons that provide quick access to the shopping cart and a simple way to return to the homepage.
2. **Searching:**
   - The advanced search option has been enabled, which executes a search for each substring as it is typed. This feature displays products that closely match the entered search terms.
3. **Sidebar Filterings:**
   - Introduced filtering by categories for a more organized view.
   - Enabled price-based filtering for budget-friendly shopping.
   - Added the option to filter by color to match your style preferences.
4. **Add-to-Cart:**
   - Users are given the ability to select a product by simply clicking the ‘add-to-cart’ button.
   - The selected products are conveniently added to the cart, each with their respective quantities.
   - The management of cart products and other related functionalities are efficiently handled by the React Context API
5. **User Experience:**
   - A seamless user experience is prioritized.
   - Users can view a subtotal price that reflects the contents of their cart.
   - Transitions and animations have been incorporated for a sophisticated and interactive interface.
   - Checkout functionalities are on the roadmap for future implementation.
   
6. **[Live Demo:](https://choose-your-shoes.netlify.app/)**
   - After completing Production build, project is being deployed at [Netlify](https://choose-your-shoes.netlify.app/).

## How to Clone the Project
Here is a step-by-step guide on how to clone a project from GitHub:

1. **Find the Repository**: Log in to your GitHub account and find the repository you want to clone.
2. **Copy the URL**: On the master/main page of the repository, click on the `Code` button. You will see an option to clone. Copy the URL.
3. **Open Terminal**: Depending on your system, you'll use Terminal (with Mac) or Command line (with Windows git bash) to move it to your local directory.
4. **Change Directory**: Change the current working directory to the location where you want the cloned directory.
5. **Clone the Repository**: Type `git clone`, and then paste the URL you copied earlier. Press Enter to create your local clone. The command will look something like this:
    ```
    git clone https://github.com/alanherprovat/Shoe-Store-Demo.git
    ```
6. **Check the Directory**: You should see a folder that just being clonned to your local directory.
7. Open the project folder in VS Code, launch a terminal, and enter `npm install` to install all necessary dependencies.






























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
