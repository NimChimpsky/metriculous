var stripe = Stripe('pk_test_HRVpsbrZpnIvduOx3gZyP5tp00tZJK02FZ');

var checkoutButton = document.getElementById('checkout-button-plan_FeFy0svDWw52T2');
checkoutButton.addEventListener('click', function () {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe.redirectToCheckout({
        items: [{plan: 'plan_FeFy0svDWw52T2', quantity: 1}],

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://metriculous.network/success',
        cancelUrl: 'https://metriculous.network/canceled',
    })
        .then(function (result) {
            if (result.error) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer.
                var displayError = document.getElementById('error-message');
                displayError.textContent = result.error.message;
            }
        });
});