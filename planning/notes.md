TODO
<!-- - Functionality to add items to the cart -->
<!-- :if item already in cart, early return  -->
<!-- :show it in the cart button -->
<!-- :prepare ShoppingCart to show the items added -->
<!-- :only show inc/dec buttons if the item is already in the cart array -->
<!-- :item will be found within the array by its name -->
<!-- :item is not being returned by find() method? -->
<!-- :increase/decrease > object in the cartItems will have a new property called amount which will be changed whenever the inc/dec buttons are pressed
    :how to modify cartItems object     -->
<!-- - Remove button appear instead of Add button when item is added -->

<!-- - Conditionally render which button should appear when hover an Item, either the remove button or the add button
    : remove button is always rendered at the beggining because the items are not in the cart :) -->

<!-- - Adjust icon overlap on Items with the title occupying 2 rows -->
<!-- - Header font family "IBM Plex Mono", monospace -->
<!-- - When item is 1 and decrement is clicked, trigger the removeItemFromCart -->

- Adjust CartButton number expands when more than 2 digits
- Finish up ShoppingCart component styling, checkout div and possibility to increment and decrement items from there

<!-- - Make dropdown menu showing different game lists options(where the different url fetch will appear) -->
<!-- - Setup different fetch url based on the button clicked
 -->
 <!-- :make sure fetch's are being done correctly -->
- Setup image gallery when clicking an Item image(new component ImageGallery) image will lower brightness when hovered and one eye icon will appear
    :how to pass info from Item to App?
        :check if the object passed by CurrentGameInfo is the desired one
    :make the rest of the screen brightness lower
    :make the rest of the screen unclickable
        :if the rest of the screen is clicked, close the modal
        :if the cross button is clicked, close the modal
    :make a slider on fullscreen within the modal
    :show some info right below like game platforms, egb ratings etc..
    :make the sliders move automatically or let the user move them with the arrows
        :https://github.com/Vikms95/_playground/tree/master/image-slider
- Make console platform appear on the top right spot of the GameDetailsModal

- Test UI of all the components created so far
  :example TOP > https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx
  
  : all components > https://github.com/TheOdinProject/theodinproject/tree/main/app/javascript/components/project-submissions/components

  :structure of tests > http://wiki.c2.com/?ArrangeActAssert

- Setup TS strict mode

FUNCTIONALITIES
<!-- - A HomePage where you can click the "Shop" button to get into the Shop -->
<!-- s -->

<!-- - Both HomePage and Shop will be accessible from the Header component (use nav)  -->
<!-- 
- ShoppingCart will be accesible via a sticky element, and will show the amount of items in the cart -->

<!-- - Item components will have a increment and decrement button which will determine how many of the Item do you want to add to the ShoppingCart when the buy button is clicked
    :will have a title, number of products to submit and an "Add to Cart" button
    :amount will be stored within each Item as state and passed as argument to the onClick handler. The onClick function will be passed as props to each Item component. That function will have access to the ShoppingCart component.(?) -->


COMPONENTS
- RouteSwitch
    - BrowserRouter
        -Routes
            - App (HomePage) path="/"
            - Shop            path="/shop"
                :renderItems
                :incrementItem
                :decrementItem
                :submitItem
                - Item * x (props> submitItem, incItem,decItem)    
            - ShoppingCart    path="/cart"
                

COMMUNICATION

- (((Item ) ShopPage ShoppingCart) ) 

QUESTIONS
<!-- - How do I pass each item to the cart? -->
<!-- :function will be declared in Shop -->
- 
<!-- - How do I pass in the value of the amount of each Item to the cart? -->
