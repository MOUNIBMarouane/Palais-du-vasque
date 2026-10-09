"use server";

// TODO: Install Stripe SDK and configure environment variables
// 1. npm install stripe @stripe/stripe-js
// 2. Add STRIPE_SECRET_KEY to .env.local
// 3. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to .env.local
//
// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createPaymentIntent(amountCents: number) {
  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: amountCents,
  //   currency: "usd",
  //   automatic_payment_methods: { enabled: true },
  // });
  // return { clientSecret: paymentIntent.client_secret };

  void amountCents; // remove when Stripe is wired up
  return {
    clientSecret: null,
    error: "Stripe is not configured yet. See app/checkout/actions.ts.",
  };
}
