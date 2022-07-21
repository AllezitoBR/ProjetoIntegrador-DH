const controllerCheckout = {
    CHECKOUT1: (req, res) =>{
        res.render('../views/Checkout/checkout1');
    },
    CHECKOUT2: (req, res) =>{
        res.render('../views/Checkout/checkout2');
    },
    CHECKOUT3: (req, res) =>{
        res.render('../views/Checkout/checkout3');
    },
    CHECKOUT4: (req, res) =>{
        res.render('../views/Checkout/checkout4');
    },
    CHECKOUTRES: (req, res) =>{
        res.render('../views/Checkout/checkoutRes');
    },
    SALVARVENDA: (req, res) =>{
        //fazer o redirect
    }
}

module.exports = controllerCheckout;