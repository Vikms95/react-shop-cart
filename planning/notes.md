TODO
- Functionality to add items to the cart
    <!-- :if item already in cart, early return  -->
    <!-- :show it in the cart button -->
    <!-- :prepare ShoppingCart to show the items added -->
    <!-- :only show inc/dec buttons if the item is already in the cart array -->
    :increase/decrease > object in the cartItems will have a new property called amount which will be changed whenever the inc/dec buttons are pressed
    *:item will be found within the array by its name
      :item is not being returned by find() method?

- Conditionally render which button should appear when hover an Item, either the remove button or the add button
    : remove button is always rendered at the beggining because the items are not in the cart :)

FUNCTIONALITIES
<!-- - A HomePage where you can click the "Shop" button to get into the Shop -->

- Click an Item on the Shop to add them to the ShoppingCart, if the Item is already there, do nothing

<!-- - Both HomePage and Shop will be accessible from the Header component (use nav)  -->

- ShoppingCart will be accesible via a sticky element, and will show the amount of items in the cart

- Item components will have a increment and decrement button which will determine how many of the Item do you want to add to the ShoppingCart when the buy button is clicked
    :will have a title, number of products to submit and an "Add to Cart" button
    :amount will be stored within each Item as state and passed as argument to the onClick handler. The onClick function will be passed as props to each Item component. That function will have access to the ShoppingCart component.(?)


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
- How do I pass in the value of the amount of each Item to the cart?
